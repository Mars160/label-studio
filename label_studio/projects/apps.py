"""Projects Django App Configuration"""

import logging

from django.apps import AppConfig

logger = logging.getLogger(__name__)


class ProjectsConfig(AppConfig):
    name = 'projects'

    def ready(self):
        # Register project lifecycle receivers after all app models are loaded.
        from projects import receivers  # noqa: F401
