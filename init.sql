CREATE TABLE schedule (
    id SERIAL PRIMARY KEY,
    gis_code VARCHAR(255) NOT NULL,
    full_name TEXT NOT NULL,
    grouping TEXT NOT NULL,
    dietary_requirement TEXT NOT NULL,
    day1_lunch TEXT NOT NULL,
    day1_keynote TEXT NOT NULL,
    day2_keynote TEXT NOT NULL,
    day2_lunch TEXT NOT NULL,
    day2_mentor TEXT NOT NULL,
    day3_critical TEXT NOT NULL,
    day3_lunch TEXT NOT NULL,
    day4_lunch TEXT NOT NULL,
    day5_presentation TEXT NOT NULL,
    day5_exhibition TEXT NOT NULL,
    day5_lunch TEXT NOT NULL,
    round1 TEXT NOT NULL,
    round2 TEXT NOT NULL,
    round3 TEXT NOT NULL,
    banquet TEXT NOT NULL
);

\COPY schedule FROM '/docker-entrypoint-initdb.d/schedule.csv' WITH (FORMAT csv, DELIMITER ',');
