# ⚡ The Token-Conscious Developer

[Visit the handbook](https://tokenhandbook.netlify.app/)

> A hyper-optimized, low-entropy engineering handbook designed to slash context decay, latency spikes, and accumulation bleed in AI-assisted workflows.

## 🛑 The Core Problem
Most developers treat AI context like an infinite resource. It isn’t. As chat sessions progress, background payloads grow exponentially rather than linearly, creating three systemic constraints:

- **Context Decay:** Threads get bloated, forcing models to forget early logic or hallucinate relative directory paths.
- **Latency Spikes:** Massive historical payloads force modern reasoning systems into 30–60 second completion delays.
- **The Accumulation Trap:** Every prompt, generated code snippet, and error log is systematically resent on *every single turn*.

> **Key Principle:** Token hygiene is not just about reducing an API bill. It is directly tied to accuracy, reasoning capability, and performance velocity in your development tools.

---

## 🛠️ Defensive Architecture

| Strategy | Framework Protocol | Target Metric |
| :--- | :--- | :--- |
| **Strategy 01** | **The Caveman Compression Rule**<br>Remove conversational politeness, hedging, and natural filler text from rule parameters. | **60%–80%** footprint reduction |
| **Strategy 02** | **The Lean Start Workflow**<br>Execute a two-stage index handshake (`@file`) to explicitly trigger server-side prompt caching. | **75%–90%** lower evaluation cost |
| **Strategy 03** | **Edit, Don't Append**<br>Modify previous prompt nodes directly to clear out dead, unoptimized code branches instantly. | Eliminates linear context stacking |
| **Strategy 07** | **The Markdown Checkpoint**<br>Extract structural parameters into a portable state map and migrate cleanly to fresh chat containers. | Resets memory debt to **0 tokens** |

---

## 🚀 Workspace Setup & Rules Integration

### 1. Prune Your System Parameters
Strip conversational noise out of your global `.cursorrules` or `CLAUDE.md` files. Refactor verbose instructions into imperative execution fragments.

#### ❌ Bloated Baseline
```text
"When creating a new UI component or layout, you should always style them using Tailwind CSS classes. Make sure to keep the design clean & strictly adhere to our custom color palette defined in the tailwind.config.js file."
```

#### ✅ Caveman Compressed
```text
UI: Tailwind CSS only. Follow tailwind.config.js values strictly.
```

### 2. Implement Local Instruction De-Siloing
Stop forcing the AI engine to read testing layers when building CSS components. Isolate target constraints where the files live:

- Move database schemas into `src/models/rules-db.md`
- Move testing assertions into `tests/rules-testing.md`
- Reference them via native `@` identifiers only when invoking those components

### 📋 Developer Checklist

- [ ] Audit Settings: Set your default IDE chat model to a lightning-fast, cost-efficient engine. Gate deep reasoning toggles behind highly complex algorithmic work.
- [ ] Refactor Rules: Purge natural language filler from global setup configurations.
- [ ] De-Silo Docs: Segment documentation maps into contextual directories.
- [ ] Enforce Verification: Leverage subagent loops and local terminal test hooks (Verification Over Claims) before declaring tasks complete.
