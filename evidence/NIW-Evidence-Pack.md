# NIW Evidence Pack

This document summarizes how the named reference architectures support public-interest cybersecurity work and EB-2 NIW evidence framing.

## kubernetes-security-reference-architecture

- Project purpose: document a secure Kubernetes platform baseline with controlled delivery, policy boundaries, and observability.
- National importance angle: container platform misconfiguration can expose identity, workload, and network boundaries in organizations that lack mature platform teams.
- Technical contribution: connects source control, pipeline review, image scanning, secrets handling, RBAC, NetworkPolicy, and logging in one architecture path.
- Why this supports well positioned: shows applied understanding across Kubernetes, AWS, CI/CD, identity, and runtime governance.
- Scalability / public benefit: reusable by technical reviewers, students, and smaller organizations evaluating safer Kubernetes adoption.
- Non-commercial compliance statement: provided as independent public reference work, not as a client deliverable or operational claim.

## cloud-security-controls-framework

- Project purpose: organize identity, network, encryption, logging, detection, and compliance controls into one reviewable framework.
- National importance angle: governance failures in cloud environments often arise from fragmented controls rather than missing tools.
- Technical contribution: maps least privilege, KMS-backed protection, logging, findings review, and remediation planning into a practical control sequence.
- Why this supports well positioned: demonstrates systems-level thinking across security architecture and governance evidence.
- Scalability / public benefit: useful as a reusable model for security reviews, training, and control mapping discussions.
- Non-commercial compliance statement: provided as independent public reference work, not as a client deliverable or operational claim.

## multi-region-cloud-resilience-architecture

- Project purpose: document a continuity-oriented regional resilience pattern with replication, health checks, and failover procedures.
- National importance angle: outages, data loss, and delayed recovery affect small businesses and public-facing services that lack deeper resilience planning.
- Technical contribution: combines DNS routing, primary and secondary region placement, replication flows, backups, monitoring, and runbook alignment.
- Why this supports well positioned: shows applied knowledge across networking, recovery planning, observability, and continuity architecture.
- Scalability / public benefit: reusable by organizations that need clearer recovery patterns without large platform teams.
- Non-commercial compliance statement: provided as independent public reference work, not as a client deliverable or operational claim.

## secure-devsecops-pipeline-reference-architecture

- Project purpose: document a secure delivery pipeline with review gates, audit evidence, promotion controls, and rollback readiness.
- National importance angle: insecure software delivery paths can propagate secrets exposure, weak infrastructure changes, and vulnerable artifacts at scale.
- Technical contribution: links source review, secret scanning, SAST and IaC checks, build and test, artifact handling, container scanning, approval, deploy, and monitoring.
- Why this supports well positioned: demonstrates hands-on DevSecOps reasoning across release governance, scanning, policy gates, and operational feedback.
- Scalability / public benefit: reusable by technical teams seeking a practical release control model they can adapt.
- Non-commercial compliance statement: provided as independent public reference work, not as a client deliverable or operational claim.

## Portfolio-Level Note

These reference architectures are presented as educational and public-interest technical work intended for reviewable evidence, not as claims of exclusive methods, legal advice, or guaranteed security outcomes.
