use chrono::{DateTime, TimeZone, Utc};
use serde::{self, Deserialize, Deserializer, Serializer};

const FORMAT: &'static str = "%Y-%m-%d %H:%M:%S";

pub fn serialize<S>(date: &Option<DateTime<Utc>>, serializer: S) -> Result<S::Ok, S::Error>
where
    S: Serializer,
{
    let s = format!("{}", date.unwrap().format(FORMAT));
    serializer.serialize_str(&s)
}

pub fn deserialize<'de, D>(deserializer: D) -> Result<Option<DateTime<Utc>>, D::Error>
where
    D: Deserializer<'de>,
{
    let s = String::deserialize(deserializer)?;
    if s.is_empty() {
        Ok(None)
    } else {
        Ok(Some(
            Utc.datetime_from_str(&s, FORMAT)
                .map_err(serde::de::Error::custom)?,
        ))
    }
}
