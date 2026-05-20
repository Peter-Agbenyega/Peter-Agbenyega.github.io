# Peter Christian Agbenyega - EB-2 NIW Portfolio

This repository contains the public portfolio for `petercagbenyega.com`. It presents cloud security, DevSecOps, and resilience reference work in a format intended for technical review, public-interest evidence, and EB-2 NIW support.

## Overview

The portfolio is organized around public reference architectures that address preventable cloud risk:

- secure cloud baselines
- Kubernetes platform security
- control-oriented cloud governance
- multi-region resilience
- secure software delivery

## Problem Statement

Cloud misconfiguration, weak identity boundaries, missing logging, and insecure delivery paths remain common causes of avoidable breach exposure. This repository documents reference architectures that translate those concerns into reviewable technical patterns.

## Reference Architecture Catalog

### kubernetes-security-reference-architecture

- Overview: Secure Kubernetes platform baseline for teams that need controlled cluster access, private worker placement, and policy boundaries around workloads.
- Problem Statement: Container platforms can widen the attack surface when registry controls, secrets handling, and namespace isolation are added late.
- Reference Architecture: Source control, CI/CD, image scanning, registry controls, Kubernetes control plane, private worker nodes, RBAC, NetworkPolicy, and observability.
- Security / Resilience Focus: least privilege, image review gates, secrets management, monitoring, and audit-friendly logging.
- Public Benefit: reusable baseline patterns for smaller organizations and technical reviewers.
- Repository Scope: public reference work and design documentation.
- Diagram: [diagrams/kubernetes-security-reference-architecture.mmd](diagrams/kubernetes-security-reference-architecture.mmd)
- Disclaimer: educational and public-interest technical reference work.

### cloud-security-controls-framework

- Overview: Control-mapped cloud security framework connecting identity, network, encryption, monitoring, detection, and remediation.
- Problem Statement: Security controls are often implemented in isolation, which makes governance review harder and leaves gaps between control domains.
- Reference Architecture: IAM, network controls, KMS-backed encryption, logging, threat findings, compliance mapping, and remediation backlog.
- Security / Resilience Focus: least privilege, centralized logs, detection signals, control traceability, and governance continuity.
- Public Benefit: helps practitioners and reviewers understand how cloud controls fit together as a structured framework.
- Repository Scope: public control architecture and implementation guidance.
- Diagram: [diagrams/cloud-security-controls-framework.mmd](diagrams/cloud-security-controls-framework.mmd)
- Disclaimer: educational and public-interest technical reference work.

### multi-region-cloud-resilience-architecture

- Overview: Resilience and failover reference architecture for workloads that need regional continuity planning.
- Problem Statement: Single-region assumptions can leave organizations exposed when recovery workflows, backups, and health monitoring are incomplete.
- Reference Architecture: DNS routing, primary region workloads, database and object replication, secondary region recovery path, monitoring, alerting, and runbook execution.
- Security / Resilience Focus: backups, replication integrity, health checks, and defined recovery procedures.
- Public Benefit: supports continuity planning patterns that are understandable and reusable beyond large enterprises.
- Repository Scope: public resilience reference work and recovery design patterns.
- Diagram: [diagrams/multi-region-cloud-resilience-architecture.mmd](diagrams/multi-region-cloud-resilience-architecture.mmd)
- Disclaimer: educational and public-interest technical reference work.

### secure-devsecops-pipeline-reference-architecture

- Overview: Secure software delivery reference architecture with policy gates and release evidence.
- Problem Statement: Release pipelines need disciplined controls for secrets, insecure infrastructure changes, vulnerable artifacts, and rollback readiness.
- Reference Architecture: source code review, secret scanning, SAST and IaC checks, build and test, artifact handling, container scanning, approval, deployment, monitoring, and rollback path.
- Security / Resilience Focus: policy gates, audit logs, artifact integrity, promotion discipline, and operational feedback.
- Public Benefit: demonstrates a practical path for stronger release governance using accessible control stages.
- Repository Scope: public pipeline reference work and documentation.
- Diagram: [diagrams/secure-devsecops-pipeline-reference-architecture.mmd](diagrams/secure-devsecops-pipeline-reference-architecture.mmd)
- Disclaimer: educational and public-interest technical reference work.

## Repository Scope

- `index.html`, `style.css`, `script.js`: public portfolio site
- `diagrams/`: Mermaid architecture diagrams
- `evidence/`: NIW-oriented support documentation
- `assets/cv/`: public resume assets

## Disclaimer

This repository is independent, non-commercial, educational, and public-interest technical reference work. It does not represent client deliverables, legal advice, or operational security guidance for a specific environment.

## Local Preview

Run a static file server from the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080`.
