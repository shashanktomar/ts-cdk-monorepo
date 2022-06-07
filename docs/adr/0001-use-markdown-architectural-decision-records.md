# Use Markdown Architectural Decision Records

- Status: Accepted
- Deciders: Team
- Date: 2022-06-07

## Context and Problem Statement

We want to record architectural decisions made in this project. The architecture decision records give you a versioned trace of all the decisions made on the project and reasoning behind them.
Which format and structure should these records follow?

## Decision Drivers

- In long running big projects, it is very difficult to convey the reasoning behind decisions to the future team members and for external oversight. This will help in keeping a record and context of those decisions
- This will be a single place to look for architectural decisions along with their context and consequences

## Considered Options

- [MADR][madr] 2.1.0 - The Markdown Architectural Decision Records
- [Michael Nygard's template](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) - The first incarnation of the term "ADR"

## Decision Outcome

Chosen option: "MADR 2.1.0", because

- MADR format seems to have correct amount of details

## Links

- [examples repo](https://github.com/joelparkerhenderson/architecture_decision_record)
- [MADR][madr]
- ADR explained [here](https://www.thoughtworks.com/radar/techniques/lightweight-architecture-decision-records)

[madr]: https://adr.github.io/madr/
