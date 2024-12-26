"""This file and its contents are licensed under the Apache License 2.0. Please see the included NOTICE for copyright information and LICENSE for a copy of the license.
"""
import os

from core.feature_flags import all_flags
from core.utils.common import collect_versions
from django.conf import settings as django_settings
from django.utils import timezone

from label_studio.core.utils.io import get_config_dir


def sentry_fe(request):
    # return the value you want as a dictionary, you may add multiple values in there
    return {'SENTRY_FE': django_settings.SENTRY_FE}


def settings(request):
    """Make available django settings on each template page"""
    versions = collect_versions()

    os_release = versions.get('label-studio-os-backend', {}).get('commit', 'none')[0:6]
    # django templates can't access names with hyphens
    versions['lsf'] = versions.get('label-studio-frontend', {})
    versions['lsf']['commit'] = versions['lsf'].get('commit', os_release)[0:6]

    versions['dm2'] = versions.get('dm2', {})
    versions['dm2']['commit'] = versions['dm2'].get('commit', os_release)[0:6]

    versions['backend'] = {}
    if 'label-studio-os-backend' in versions:
        versions['backend']['commit'] = versions['label-studio-os-backend'].get('commit', 'none')[0:6]
    if 'label-studio-enterprise-backend' in versions:
        versions['backend']['commit'] = versions['label-studio-enterprise-backend'].get('commit', 'none')[0:6]

    feature_flags = {}
    if hasattr(request, 'user'):
        feature_flags = all_flags(request.user)

    return {'settings': django_settings, 'versions': versions, 'feature_flags': feature_flags}


def frontend_events(request):
    events = []
    if should_send_install_event():
        events.append(
            {
                'name': 'setup.install',
                'with_iframe': True,
            }
        )
    return {'frontend_events': events}


_INSTALL_EVENT_SENT = False


def should_send_install_event():
    # Only fire install event once per instance
    # Using global variable to avoid checking file on each request
    global _INSTALL_EVENT_SENT
    if django_settings.VERSION_EDITION == 'Community' and not _INSTALL_EVENT_SENT:
        install_file = os.path.join(get_config_dir(), 'install.txt')
        if not os.path.exists(install_file):
            with open(install_file, 'w') as f:
                f.write(timezone.now().isoformat())
            _INSTALL_EVENT_SENT = True
            return True
        _INSTALL_EVENT_SENT = True

    return False
