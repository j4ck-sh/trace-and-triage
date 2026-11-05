---
title: "Test Forensic Investigation"
description: "Testing the Trace & Triage research system."
date: 2026-11-01
category: "Digital Forensics"
caseId: "TT-DF-TEST"
tags:
  - Windows
  - DFIR
tools:
  - Event Viewer
difficulty: "Beginner"

draft: false

platform: "Windows 11"
environment: "Isolated Test Lab"
status: "Completed"


timeline:
  - timestamp: "2026-11-05 14:30:01 UTC"
    title: "User logon recorded"
    description: "A test user logon event was identified."
    source: "Windows Security Event Log"

  - timestamp: "2026-11-05 14:32:16 UTC"
    title: "PowerShell execution"
    description: "A PowerShell process was observed."
    source: "Sysmon Event ID 1"

  - timestamp: "2026-11-05 14:32:20 UTC"
    title: "File created"
    description: "A test file creation event was recorded."
    source: "Filesystem evidence"

indicators:
  - type: "Domain"
    value: "example[.]com"
    description: "Illustrative domain, not a real IOC."

  - type: "IPv4"
    value: "192.0.2.10"
    description: "Documentation-only IP address."

  - type: "Filename"
    value: "sample.exe"
    description: "Example filename for testing."


---

# Executive Summary

If you can read this, the Trace & Triage article system is working.

## Investigation

This is a test investigation.

## Evidence Examination

![Windows forensic Evidence](/trace-and-triage/public/images/tt-sp-001/hero.png)

*Figure 1 - Example of evidence screenshot.*

## Findings

The Markdown article successfully rendered.

## Conclusion

Trace & Triage can now publish research articles.

### Testing further

oh yeah baby