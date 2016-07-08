# OpenStack RC File v2.0 to v3 Converter

If your OpenStack environment uses multi-domain authentication, your
old RC file configured for Keystone's v2.0 API won't
work. Authorization failures are the most common sign that you're
using an outdated v2.0 configuration.

This page takes your RC file and your authentication domain and
transforms the RC file into a Keystone v3 compliant file.
