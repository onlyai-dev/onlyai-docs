# Dynamic Pricing System

The Dynamic Pricing System adjusts PPV strategy based on fan behavior, activity level, and payment signals.

## Scoring System

The system evaluates each fan on a 0–100 scale:

- 0–20 — very cold  
- 20–40 — cold  
- 40–60 — potential  
- 60–80 — paying  
- 80–100 — strong paying fan  

---

## Segment Logic

### 0–20 — Very Cold Fan

Low engagement and low payment potential.

**System behavior:**
- short, low-effort replies  
- no price increase  
- no aggressive PPV  
- can be moved to low-priority  

---

### 20–40 — Cold Fan

Some interest, but not stable.

**System behavior:**
- short dialogue  
- interest checking  
- soft warm-up  
- no aggressive selling  
- no price increase  

---

### 40–60 — Potential Fan

Shows interest but not yet confirmed as paying.

**System behavior:**
- active warm-up  
- reaction testing  
- leads toward PPV  
- slight price testing possible  
- no sharp increase  

---

### 60–80 — Paying Fan

Clear engagement and/or previous payments.

**System behavior:**
- confident selling  
- faster replies  
- personalization  
- price increase allowed  

---

### 80–100 — Strong Paying Fan

High monetization potential.

**System behavior:**
- maximum monetization focus  
- exclusive / personal content  
- higher pricing  
- fast response  
- custom offers possible  

---

## Payment & Confidence Signals

Score increases when:

- fan sends a tip → 90–100%  
- fan buys PPV immediately (no warm-up) → 80–90%  
- fan buys 2+ PPVs in a row → 90–100%  
- fan does not react negatively to price → 80–90%  
- fan stays active after purchase → 85–95%  
- fan asks for exclusive content → 80–90%  

---

## System Action (80%+)

If score > 80%:

- fan is marked as **paying**  
- price increases **x1.5 – x2**  

**Example:**

PPV = $30 → next PPV = $45–60  

---

## Potential Indicators

If fan:

- leads the conversation  
- asks personal or intimate questions  
- initiates flirting / sexting  
- replies quickly  
- shows interest in the model  
- asks for exclusive content  

**Estimated probability:** 50–75%

**System behavior:**
- no sharp price increase  
- slight price testing  
- faster PPV offer  
- payment check  

---

## Negative Indicators

If fan:

- ignores messages  
- does not open PPV  
- asks for free content  
- actively bargains  

**Estimated probability:** 0–40%

**System behavior:**
- no price increase  
- no sales acceleration  
- lower priority  

---

## General System Logic

### Step 1 — Evaluation
Fan behavior → probability score (%)

### Step 2 — Check
System tests via PPV or paid action

### Step 3 — Confirmation
If purchase or tip → fan becomes **paying (80–100%)**

### Step 4 — Monetization
- increase price  
- speed up sales  
- offer higher-value content  
