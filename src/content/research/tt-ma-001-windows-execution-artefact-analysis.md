---
title: "Windows Execution Artefact Analysis: Correlating Process, Registry and Network Activity"

description: "An interactive forensic case study demonstrating how synthetic Windows process execution, filesystem, Registry and network records can be correlated to develop and evaluate investigative hypotheses."

date: 2026-11-12
category: "Malware Analysis"
caseId: "TT-MA-001"

tags:
  - Malware Analysis
  - Windows Forensics
  - Process Analysis
  - Registry Forensics
  - Network Forensics
  - Digital Forensics

tools:
  - Windows 10
  - FLARE-VM
  - REMnux
  - Oracle VirtualBox
  - Trace & Triage Malware Investigation Workspace

difficulty: "Beginner"

draft: false
status: "Completed"

platform: "Windows 10"
environment: "Synthetic Demonstration / Malware Analysis Laboratory"

references: []
---

## Executive Summary

This case study explores the correlation of Windows execution artefacts using an interactive, synthetic forensic investigation dataset.

The investigation focuses on relationships between process execution, filesystem changes, Windows Registry activity and network observations. These artefact categories are commonly examined together when reconstructing potentially suspicious activity on a Windows system.

The Trace & Triage Malware Investigation Workspace provides interactive tools for examining a fictional execution scenario, inspecting related records and producing a demonstration investigation report.

**Evidence classification:** Synthetic demonstration.

The dataset was created for educational and interface-development purposes. It does not represent independently acquired forensic evidence, confirmed malicious activity or verified execution of malware.

## Parent Project

This case study is part of the [Malware Analysis Lab](../../projects/malware-analysis-lab/) (TT-PR-001), the flagship Trace & Triage project hosting the interactive Malware Investigation Workspace.

The linked laboratory describes the intended VirtualBox, Windows 10/FLARE-VM and REMnux environment. The case study itself uses synthetic demonstration records, not acquired or verified forensic evidence.

## Research Question

How can process, filesystem, Registry and network records be correlated to reconstruct a Windows execution sequence, and what limitations arise when the available evidence consists only of synthetic demonstration records?

## Investigation Objectives

The investigation has six objectives:

1. Examine parent-child process relationships and associated executable paths.
2. Reconstruct the sequence of recorded execution events.
3. Identify filesystem and Registry activity associated with the scenario.
4. Correlate network observations with process and timeline records.
5. Distinguish observable records from analytical interpretations.
6. Document findings, uncertainties and evidence limitations in a structured report.

## Laboratory Context

The Malware Analysis Lab project describes an environment involving Oracle VirtualBox, Windows 10 with FLARE-VM, REMnux and an internal virtual network.

These technologies provide the context for the broader laboratory project. However, this particular case study uses a fictional dataset rather than artefacts acquired from a live or completed malware execution experiment.

The reported virtual-network configuration has not been independently verified as isolated. No claim is made that malware was safely executed within this environment.

## Dataset and Evidence Classification

The investigation uses the synthetic dataset identified as:

**TT-MA-DEMO-001 — Synthetic Windows Execution Investigation**

The dataset contains demonstration records representing:

- Windows process relationships.
- Process creation and termination events.
- Filesystem activity.
- Registry operations.
- DNS and network observations.
- Evidence metadata and indicators of compromise.
- Cross-references between investigative records.

These records are designed to support interactive exploration and demonstrate the structure of a forensic investigation.

They are not original operating-system logs, memory captures, packet captures, Registry hive exports or independently collected forensic artefacts.

The dataset does not provide verified file hashes or a validated chain of custody.

## Methodology

### 1. Process Relationship Analysis

The Process Tree Explorer is used to examine the fictional relationship between three processes:

| Process | Synthetic PID | Investigative role |
|---|---:|---|
| explorer.exe | 4100 | Parent process context |
| lab-demo.exe | 4820 | Demonstration executable |
| cmd.exe | 4936 | Child process context |

The primary analytical question is whether the process relationships help explain the sequence of recorded activity.

A parent-child relationship alone does not establish malicious intent. Additional evidence would be required to determine the legitimacy or purpose of a process in a real investigation.

### 2. Execution Timeline Reconstruction

The Execution Timeline is used to examine the ordering of synthetic events.

The demonstration sequence includes process creation, filesystem activity, a Registry operation, a DNS observation and process termination.

Correlating these events illustrates how an investigator can move beyond isolated records and develop a chronological account of system activity.

Because the records are synthetic, the resulting chronology demonstrates investigative reasoning rather than reconstructing an independently observed incident.

### 3. Filesystem Activity Review

The dataset includes a fictional filesystem creation event associated with the execution scenario.

This record can be correlated with process and timeline entries to illustrate how filesystem changes contribute to an execution narrative.

No corresponding file has been independently acquired or validated, and no file hash is available to establish artefact identity.

### 4. Windows Registry Examination

The Registry Artefact Explorer presents a synthetic operation involving:

`HKEY_CURRENT_USER\Software\TraceTriageDemo`

The record illustrates how Registry paths, operations and related events can be examined during a Windows investigation.

The existence of a Registry write does not, by itself, demonstrate persistence, compromise or malicious behaviour.

A real investigation would require the relevant Registry data, contextual system information and corroborating artefacts before drawing those conclusions.

### 5. Network Observation Analysis

The Network Activity Viewer includes a synthetic DNS-related observation involving:

`demo.example.test`

The scenario also uses documentation-reserved IP addresses, including `192.0.2.10` and `192.0.2.53`.

These identifiers are demonstration values, not verified attacker infrastructure or confirmed command-and-control destinations.

The objective is to show how process activity and network records can be linked during an investigation without treating a fictional endpoint as a real indicator of compromise.

### 6. Evidence Correlation and Reporting

The Evidence and IOC Explorer is used to inspect the metadata and relationships associated with the fictional records.

The Interactive Investigation Report then presents analytical findings and supporting record references.

The report is a demonstration output. Its findings describe the synthetic scenario and must not be interpreted as independently verified forensic conclusions.

## Findings and Interpretation

### Finding 1 — Process Relationships Provide Execution Context

The fictional process tree demonstrates how a parent process, demonstration executable and child process can be examined together.

**Interpretation:** Process relationships can help investigators identify activity that warrants closer examination.

**Limitation:** The synthetic relationships do not establish that any real process executed or behaved maliciously.

### Finding 2 — Event Correlation Supports Timeline Reconstruction

The synthetic timeline connects execution, filesystem, Registry and network events within a single investigative scenario.

**Interpretation:** Cross-referencing records can produce a more coherent account than examining each artefact independently.

**Limitation:** The timeline is constructed from demonstration records rather than validated system timestamps.

### Finding 3 — Registry Activity Requires Context

The dataset includes a Registry operation under the current-user software hive.

**Interpretation:** Registry changes can provide useful contextual evidence when correlated with process activity.

**Limitation:** This record does not establish persistence or compromise.

### Finding 4 — Network Observations Are Not Proof of Malicious Communication

The demonstration DNS record can be examined alongside process and timeline data.

**Interpretation:** Network observations can support investigative hypotheses about communications associated with an execution sequence.

**Limitation:** The domain and IP addresses are fictional or documentation-reserved identifiers, not verified malicious infrastructure.

## Evidence Limitations

This case study has several important limitations:

- No actual malware execution is demonstrated.
- No independently acquired forensic artefacts are available.
- No verified file hashes are supplied.
- No original packet captures, process logs or Registry exports are presented.
- No validated evidence provenance or chain of custody is established.
- Laboratory network isolation remains unverified.
- Indicators of compromise are illustrative rather than confirmed malicious indicators.

These limitations prevent conclusions about a real compromise, attacker behaviour, malware family or operational impact.

## Conclusion

This research demonstrates a structured approach to correlating Windows execution artefacts through an interactive forensic workspace.

The synthetic scenario illustrates how process relationships, event chronology, filesystem activity, Registry changes and network observations can contribute to investigative reasoning.

The central lesson is the distinction between **record correlation**, **analytical interpretation** and **verified forensic findings**.

Although the workspace supports a complete demonstration investigation workflow, further research using appropriately acquired, validated and safely handled artefacts would be necessary before making real-world forensic conclusions.

## Future Research

Future development may include:

- Validated evidence acquisition from an appropriately isolated laboratory.
- Recorded acquisition methods and chain-of-custody information.
- Cryptographic hash verification.
- Expanded process, filesystem, Registry and network datasets.
- More advanced timeline correlation.
- Comparison of competing investigative hypotheses.
- Additional research case studies linked to the Malware Analysis Lab.

Any future real-world evidence should be clearly distinguished from the existing synthetic demonstration dataset.