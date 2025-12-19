

Replacement Order Created

Allowed next status:
	•	➜ Replacement Shipped

⸻

Replacement Shipped

Allowed next statuses:
	•	➜ Customer Shipped Return
	•	➜ Closed – Customer Billed
(only if return deadline passes with no confirmed return)

⸻

Customer Shipped Return

Allowed next statuses:
	•	➜ Return Received by Manufacturer
	•	➜ Return Received – Internal Testing Required

⸻

Return Received by Manufacturer

Allowed next status:
	•	➜ Closed – Vendor Resolved

System behavior when this status is set:
	•	Customer billing is permanently blocked
	•	Manufacturer credit task is automatically created

⸻

Return Received – Internal Testing Required

Allowed next status:
	•	➜ Under Internal Testing

System behavior when this status is set:
	•	Customer billing is permanently blocked

⸻

Under Internal Testing

Allowed next statuses:
	•	➜ Closed – Returned to Inventory
(test passed / no fault found)
	•	➜ Replacement Shipped
(test failed; failed part sent to manufacturer)

Important note:
Transitioning back to Replacement Shipped here represents shipping the failed part to the manufacturer, not shipping a new replacement to the customer.

⸻

Closed – Vendor Resolved

Allowed next status:
	•	None (terminal state)

⸻

Closed – Returned to Inventory

Allowed next status:
	•	None (terminal state)

⸻

Closed – Customer Billed

Allowed next status:
	•	None (terminal state)

⸻

Global Rules
	•	All Closed statuses are terminal and cannot transition further
	•	Customer billing is allowed only on the path leading to Closed – Customer Billed
	•	Once a return is received (manufacturer or internal), customer billing is permanently blocked
	•	Any transition not listed above must be rejected by the system
