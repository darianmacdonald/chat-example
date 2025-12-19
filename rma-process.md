```mermaid
flowchart LR

%% Phase 1: Customer Resolution
subgraph Phase1["Phase 1: Customer Resolution"]
A[Customer reports issue]
B[Support troubleshoots]
C[Replacement approved]
end

%% Phase 2: RMA & Order Creation
subgraph Phase2["Phase 2: RMA & Order Creation"]
D[RMA created]
E[Replacement order created<br/>(Qty +1, Not invoiced)]
end

%% Phase 3: Fulfillment
subgraph Phase3["Phase 3: Fulfillment"]
F[Purchasing submits request]
G[Manufacturer ships replacement<br/>to customer]
end

%% Phase 4: Return Tracking
subgraph Phase4["Phase 4: Return Tracking"]
H[Customer receives replacement]
I[Customer ships failed part<br/>(using return label)]
J[Support verifies return tracking]
end

%% Decision Point
K{Return delivered to?}

%% Phase 5A: Manufacturer Return
subgraph Phase5A["Phase 5A: Manufacturer Return"]
L[Return received by manufacturer]
M[Customer cleared<br/>(Do not invoice)]
N[Manufacturer credit task created]
O[Accounting tracks credit]
P[RMA closed – Vendor resolved]
end

%% Phase 5B: Internal Testing Exception
subgraph Phase5B["Phase 5B: Internal Testing (Exception)"]
Q[Return received internally]
R[Customer cleared<br/>(Do not invoice)]
S[Under internal testing]
T{Test result?}
U[Return to inventory]
V[Ship to manufacturer]
end

%% Phase 6: Customer Non-Return
subgraph Phase6["Exception: Customer Non-Return"]
X[Return deadline passes]
Y[Convert replacement order to invoice]
Z[RMA closed – Customer billed]
end

%% Flow Connections
A --> B --> C --> D --> E --> F --> G --> H --> I --> J --> K

K -->|Manufacturer| L --> M --> N --> O --> P
K -->|Internal| Q --> R --> S --> T
T -->|Pass| U
T -->|Fail| V --> N

I --> X --> Y --> Z
```
