import pandas as pd
import pytest

from label_studio.tests.sdk.common import LABEL_CONFIG_AND_TASKS

pytestmark = pytest.mark.django_db
from label_studio_sdk.client import LabelStudio


@pytest.fixture
def test_project(django_live_url, business_client):
    ls = LabelStudio(base_url=django_live_url, api_key=business_client.api_key)
    project = ls.projects.create(title='Export Test Project', label_config=LABEL_CONFIG_AND_TASKS['label_config'])
    ls.projects.import_tasks(id=project.id, request=LABEL_CONFIG_AND_TASKS['tasks_for_import'])
    return ls, project


def test_export_formats(test_project):
    ls, project = test_project

    # Get available export formats
    formats = ls.projects.exports.list_formats(project.id)
    assert len(formats) > 0


def test_direct_export(test_project):
    ls, project = test_project

    # Test JSON export
    json_data = ls.projects.exports.as_json(project.id)
    assert isinstance(json_data, list)
    assert len(json_data) == 1

    # Test pandas export
    df = ls.projects.exports.as_pandas(project.id)
    assert isinstance(df, pd.DataFrame)
    assert len(df) == 1
