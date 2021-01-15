use chrono::prelude::*;
use serde::{self, Deserialize, Deserializer};

const FORMAT: &'static str = "%Y-%m-%d %H:%M:%S";

#[derive(Debug, Deserialize)]
struct WrappedDateTime(#[serde(deserialize_with = "deserialize")] DateTime<Utc>);

pub fn deserialize_opt<'de, D>(deserializer: D) -> Result<Option<DateTime<Utc>>, D::Error>
where
    D: Deserializer<'de>,
{
    Option::<WrappedDateTime>::deserialize(deserializer).map(
        |opt_wrapped: Option<WrappedDateTime>| {
            opt_wrapped.map(|wrapped: WrappedDateTime| wrapped.0)
        },
    )
}

fn deserialize<'de, D>(deserializer: D) -> Result<DateTime<Utc>, D::Error>
where
    D: Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    Utc.datetime_from_str(&s, FORMAT)
        .map_err(serde::de::Error::custom)
}

pub fn empty() -> Option<DateTime<Utc>> {
    None
}
