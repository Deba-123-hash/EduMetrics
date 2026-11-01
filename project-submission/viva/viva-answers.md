# Comprehensive Viva Examination Answers

### Q1: Why use layered architecture?
**Answer**: Layered architecture enforces the Single Responsibility Principle and Separation of Concerns. Routes handle endpoint mapping, Controllers manage HTTP status codes and parameters, Services execute business rules and calculations, and Repositories run database queries. This makes unit testing trivial, allows swapping database implementations without touching business logic, and ensures maintainability.

### Q2: Why PostgreSQL instead of MongoDB?
**Answer**: Educational record management is inherently relational with rigid referential integrity requirements. A student belongs to a class; classes have subjects; subjects have exams; exams have marks. Relational foreign key constraints (`ON DELETE RESTRICT`) prevent dangling records or accidental deletion of historical transcripts. PostgreSQL's ACID compliance guarantees data consistency during bulk marks and attendance updates, while JSONB provides flexibility where needed.

### Q3: Why UUIDs instead of auto-incrementing integers?
**Answer**: Auto-incrementing IDs are vulnerable to sequential enumeration attacks (e.g. browsing `/api/students/1`, `/2`, etc.). UUIDv4 generates cryptographically random 128-bit identifiers, enabling distributed ID generation without round-trips to the database and preventing unauthorized resource discovery.

### Q4: How do you prevent AI hallucinations?
**Answer**: We separate deterministic mathematics from linguistic reasoning. Marks averages, attendance percentages, and risk scores are calculated by verified JavaScript algorithms running on verified PostgreSQL records. The LLM only receives verified metrics in prompt templates and is instructed via strict system prompts to refuse speculation. Furthermore, all AI outputs are parsed and validated through Zod schemas before being presented to users.
