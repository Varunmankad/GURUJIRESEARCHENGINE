// GURUJI Financial Astrology — 5-Year Nakshatra Occurrence Database
// Source: ManoharlalSuthar(3).xlsx | 27 Nakshatra sheets
const JplMasterDatabase = [
  {
    "nak": "Rohini",
    "start_date": "2026-01-01",
    "start_time_ist": "01:29",
    "end_date": "2026-01-01",
    "end_time_ist": "22:48",
    "state": "उदय (Rise)",
    "source_start": "01:29 ए एम, जनवरी 01",
    "source_end": "10:48 पी एम, जनवरी 01"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-01-01",
    "start_time_ist": "22:48",
    "end_date": "2026-01-02",
    "end_time_ist": "20:04",
    "state": "उदय (Rise)",
    "source_start": "10:48 पी एम, जनवरी 01",
    "source_end": "08:04 पी एम, जनवरी 02"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-01-02",
    "start_time_ist": "20:04",
    "end_date": "2026-01-03",
    "end_time_ist": "17:27",
    "state": "उदय (Rise)",
    "source_start": "08:04 पी एम, जनवरी 02",
    "source_end": "05:27 पी एम, जनवरी 03"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-01-03",
    "start_time_ist": "17:27",
    "end_date": "2026-01-04",
    "end_time_ist": "15:11",
    "state": "उदय (Rise)",
    "source_start": "05:27 पी एम, जनवरी 03",
    "source_end": "03:11 पी एम, जनवरी 04"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-01-04",
    "start_time_ist": "15:11",
    "end_date": "2026-01-05",
    "end_time_ist": "13:25",
    "state": "उदय (Rise)",
    "source_start": "03:11 पी एम, जनवरी 04",
    "source_end": "01:25 पी एम, जनवरी 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-01-04",
    "start_time_ist": "15:11",
    "end_date": "2026-01-05",
    "end_time_ist": "13:25",
    "state": "उदय (Rise)",
    "source_start": "03:11 पी एम, जनवरी 04",
    "source_end": "01:25 पी एम, जनवरी 05"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-01-05",
    "start_time_ist": "13:25",
    "end_date": "2026-01-06",
    "end_time_ist": "12:17",
    "state": "उदय (Rise)",
    "source_start": "01:25 पी एम, जनवरी 05",
    "source_end": "12:17 पी एम, जनवरी 06"
  },
  {
    "nak": "Magha",
    "start_date": "2026-01-06",
    "start_time_ist": "12:17",
    "end_date": "2026-01-07",
    "end_time_ist": "11:56",
    "state": "उदय (Rise)",
    "source_start": "12:17 पी एम, जनवरी 06",
    "source_end": "11:56 ए एम, जनवरी 07"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-01-07",
    "start_time_ist": "11:56",
    "end_date": "2026-01-08",
    "end_time_ist": "12:24",
    "state": "उदय (Rise)",
    "source_start": "11:56 ए एम, जनवरी 07",
    "source_end": "12:24 पी एम, जनवरी 08"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-01-08",
    "start_time_ist": "12:24",
    "end_date": "2026-01-09",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "12:24 पी एम, जनवरी 08",
    "source_end": "01:40 पी एम, जनवरी 09"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-01-09",
    "start_time_ist": "13:40",
    "end_date": "2026-01-10",
    "end_time_ist": "15:40",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, जनवरी 09",
    "source_end": "03:40 पी एम, जनवरी 10"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-01-10",
    "start_time_ist": "15:40",
    "end_date": "2026-01-11",
    "end_time_ist": "18:12",
    "state": "उदय (Rise)",
    "source_start": "03:40 पी एम, जनवरी 10",
    "source_end": "06:12 पी एम, जनवरी 11"
  },
  {
    "nak": "Swati",
    "start_date": "2026-01-11",
    "start_time_ist": "18:12",
    "end_date": "2026-01-12",
    "end_time_ist": "21:05",
    "state": "उदय (Rise)",
    "source_start": "06:12 पी एम, जनवरी 11",
    "source_end": "09:05 पी एम, जनवरी 12"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-01-12",
    "start_time_ist": "21:05",
    "end_date": "2026-01-14",
    "end_time_ist": "00:06",
    "state": "उदय (Rise)",
    "source_start": "09:05 पी एम, जनवरी 12",
    "source_end": "12:06 ए एम, जनवरी 14"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-01-14",
    "start_time_ist": "00:06",
    "end_date": "2026-01-15",
    "end_time_ist": "03:03",
    "state": "उदय (Rise)",
    "source_start": "12:06 ए एम, जनवरी 14",
    "source_end": "03:03 ए एम, जनवरी 15"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-01-15",
    "start_time_ist": "03:03",
    "end_date": "2026-01-16",
    "end_time_ist": "05:47",
    "state": "उदय (Rise)",
    "source_start": "03:03 ए एम, जनवरी 15",
    "source_end": "05:47 ए एम, जनवरी 16"
  },
  {
    "nak": "Mula",
    "start_date": "2026-01-16",
    "start_time_ist": "05:47",
    "end_date": "2026-01-17",
    "end_time_ist": "08:12",
    "state": "उदय (Rise)",
    "source_start": "05:47 ए एम, जनवरी 16",
    "source_end": "08:12 ए एम, जनवरी 17"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-01-17",
    "start_time_ist": "08:12",
    "end_date": "2026-01-18",
    "end_time_ist": "10:14",
    "state": "उदय (Rise)",
    "source_start": "08:12 ए एम, जनवरी 17",
    "source_end": "10:14 ए एम, जनवरी 18"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-01-18",
    "start_time_ist": "10:14",
    "end_date": "2026-01-19",
    "end_time_ist": "11:52",
    "state": "उदय (Rise)",
    "source_start": "10:14 ए एम, जनवरी 18",
    "source_end": "11:52 ए एम, जनवरी 19"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-01-19",
    "start_time_ist": "11:52",
    "end_date": "2026-01-20",
    "end_time_ist": "13:06",
    "state": "उदय (Rise)",
    "source_start": "11:52 ए एम, जनवरी 19",
    "source_end": "01:06 पी एम, जनवरी 20"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-01-20",
    "start_time_ist": "13:06",
    "end_date": "2026-01-21",
    "end_time_ist": "13:58",
    "state": "उदय (Rise)",
    "source_start": "01:06 पी एम, जनवरी 20",
    "source_end": "01:58 पी एम, जनवरी 21"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-01-21",
    "start_time_ist": "13:58",
    "end_date": "2026-01-22",
    "end_time_ist": "14:27",
    "state": "उदय (Rise)",
    "source_start": "01:58 पी एम, जनवरी 21",
    "source_end": "02:27 पी एम, जनवरी 22"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-01-22",
    "start_time_ist": "14:27",
    "end_date": "2026-01-23",
    "end_time_ist": "14:33",
    "state": "उदय (Rise)",
    "source_start": "02:27 पी एम, जनवरी 22",
    "source_end": "02:33 पी एम, जनवरी 23"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-01-23",
    "start_time_ist": "14:33",
    "end_date": "2026-01-24",
    "end_time_ist": "14:16",
    "state": "उदय (Rise)",
    "source_start": "02:33 पी एम, जनवरी 23",
    "source_end": "02:16 पी एम, जनवरी 24"
  },
  {
    "nak": "Revati",
    "start_date": "2026-01-24",
    "start_time_ist": "14:16",
    "end_date": "2026-01-25",
    "end_time_ist": "13:35",
    "state": "उदय (Rise)",
    "source_start": "02:16 पी एम, जनवरी 24",
    "source_end": "01:35 पी एम, जनवरी 25"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-01-25",
    "start_time_ist": "13:35",
    "end_date": "2026-01-26",
    "end_time_ist": "12:32",
    "state": "उदय (Rise)",
    "source_start": "01:35 पी एम, जनवरी 25",
    "source_end": "12:32 पी एम, जनवरी 26"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-01-26",
    "start_time_ist": "12:32",
    "end_date": "2026-01-27",
    "end_time_ist": "11:08",
    "state": "उदय (Rise)",
    "source_start": "12:32 पी एम, जनवरी 26",
    "source_end": "11:08 ए एम, जनवरी 27"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-01-27",
    "start_time_ist": "11:08",
    "end_date": "2026-01-28",
    "end_time_ist": "09:26",
    "state": "उदय (Rise)",
    "source_start": "11:08 ए एम, जनवरी 27",
    "source_end": "09:26 ए एम, जनवरी 28"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-01-28",
    "start_time_ist": "09:26",
    "end_date": "2026-01-29",
    "end_time_ist": "07:31",
    "state": "उदय (Rise)",
    "source_start": "09:26 ए एम, जनवरी 28",
    "source_end": "07:31 ए एम, जनवरी 29"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-01-29",
    "start_time_ist": "07:31",
    "end_date": "2026-01-30",
    "end_time_ist": "05:29",
    "state": "उदय (Rise)",
    "source_start": "07:31 ए एम, जनवरी 29",
    "source_end": "05:29 ए एम, जनवरी 30"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-01-30",
    "start_time_ist": "05:29",
    "end_date": "2026-01-31",
    "end_time_ist": "03:27",
    "state": "उदय (Rise)",
    "source_start": "05:29 ए एम, जनवरी 30",
    "source_end": "03:27 ए एम, जनवरी 31"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-01-31",
    "start_time_ist": "03:27",
    "end_date": "2026-02-01",
    "end_time_ist": "01:34",
    "state": "उदय (Rise)",
    "source_start": "03:27 ए एम, जनवरी 31",
    "source_end": "01:34 ए एम, फरवरी 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-02-01",
    "start_time_ist": "01:34",
    "end_date": "2026-02-01",
    "end_time_ist": "23:58",
    "state": "उदय (Rise)",
    "source_start": "01:34 ए एम, फरवरी 01",
    "source_end": "11:58 पी एम, फरवरी 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-02-01",
    "start_time_ist": "01:34",
    "end_date": "2026-02-01",
    "end_time_ist": "23:58",
    "state": "उदय (Rise)",
    "source_start": "01:34 ए एम, फरवरी 01",
    "source_end": "11:58 पी एम, फरवरी 01"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-02-01",
    "start_time_ist": "23:58",
    "end_date": "2026-02-02",
    "end_time_ist": "22:47",
    "state": "उदय (Rise)",
    "source_start": "11:58 पी एम, फरवरी 01",
    "source_end": "10:47 पी एम, फरवरी 02"
  },
  {
    "nak": "Magha",
    "start_date": "2026-02-02",
    "start_time_ist": "22:47",
    "end_date": "2026-02-03",
    "end_time_ist": "22:10",
    "state": "उदय (Rise)",
    "source_start": "10:47 पी एम, फरवरी 02",
    "source_end": "10:10 पी एम, फरवरी 03"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-02-03",
    "start_time_ist": "22:10",
    "end_date": "2026-02-04",
    "end_time_ist": "22:12",
    "state": "उदय (Rise)",
    "source_start": "10:10 पी एम, फरवरी 03",
    "source_end": "10:12 पी एम, फरवरी 04"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-02-04",
    "start_time_ist": "22:12",
    "end_date": "2026-02-05",
    "end_time_ist": "22:57",
    "state": "उदय (Rise)",
    "source_start": "10:12 पी एम, फरवरी 04",
    "source_end": "10:57 पी एम, फरवरी 05"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-02-05",
    "start_time_ist": "22:57",
    "end_date": "2026-02-07",
    "end_time_ist": "00:23",
    "state": "उदय (Rise)",
    "source_start": "10:57 पी एम, फरवरी 05",
    "source_end": "12:23 ए एम, फरवरी 07"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-02-07",
    "start_time_ist": "00:23",
    "end_date": "2026-02-08",
    "end_time_ist": "02:28",
    "state": "उदय (Rise)",
    "source_start": "12:23 ए एम, फरवरी 07",
    "source_end": "02:28 ए एम, फरवरी 08"
  },
  {
    "nak": "Swati",
    "start_date": "2026-02-08",
    "start_time_ist": "02:28",
    "end_date": "2026-02-09",
    "end_time_ist": "05:02",
    "state": "उदय (Rise)",
    "source_start": "02:28 ए एम, फरवरी 08",
    "source_end": "05:02 ए एम, फरवरी 09"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-02-09",
    "start_time_ist": "05:02",
    "end_date": "2026-02-10",
    "end_time_ist": "07:55",
    "state": "उदय (Rise)",
    "source_start": "05:02 ए एम, फरवरी 09",
    "source_end": "07:55 ए एम, फरवरी 10"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-02-10",
    "start_time_ist": "07:55",
    "end_date": "2026-02-11",
    "end_time_ist": "10:53",
    "state": "उदय (Rise)",
    "source_start": "07:55 ए एम, फरवरी 10",
    "source_end": "10:53 ए एम, फरवरी 11"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-02-11",
    "start_time_ist": "10:53",
    "end_date": "2026-02-12",
    "end_time_ist": "13:42",
    "state": "उदय (Rise)",
    "source_start": "10:53 ए एम, फरवरी 11",
    "source_end": "01:42 पी एम, फरवरी 12"
  },
  {
    "nak": "Mula",
    "start_date": "2026-02-12",
    "start_time_ist": "13:42",
    "end_date": "2026-02-13",
    "end_time_ist": "16:12",
    "state": "उदय (Rise)",
    "source_start": "01:42 पी एम, फरवरी 12",
    "source_end": "04:12 पी एम, फरवरी 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-02-13",
    "start_time_ist": "16:12",
    "end_date": "2026-02-14",
    "end_time_ist": "18:16",
    "state": "उदय (Rise)",
    "source_start": "04:12 पी एम, फरवरी 13",
    "source_end": "06:16 पी एम, फरवरी 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-02-14",
    "start_time_ist": "18:16",
    "end_date": "2026-02-15",
    "end_time_ist": "19:48",
    "state": "उदय (Rise)",
    "source_start": "06:16 पी एम, फरवरी 14",
    "source_end": "07:48 पी एम, फरवरी 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-02-15",
    "start_time_ist": "19:48",
    "end_date": "2026-02-16",
    "end_time_ist": "20:47",
    "state": "उदय (Rise)",
    "source_start": "07:48 पी एम, फरवरी 15",
    "source_end": "08:47 पी एम, फरवरी 16"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-02-16",
    "start_time_ist": "20:47",
    "end_date": "2026-02-17",
    "end_time_ist": "21:16",
    "state": "उदय (Rise)",
    "source_start": "08:47 पी एम, फरवरी 16",
    "source_end": "09:16 पी एम, फरवरी 17"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-02-17",
    "start_time_ist": "21:16",
    "end_date": "2026-02-18",
    "end_time_ist": "21:16",
    "state": "उदय (Rise)",
    "source_start": "09:16 पी एम, फरवरी 17",
    "source_end": "09:16 पी एम, फरवरी 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-02-18",
    "start_time_ist": "21:16",
    "end_date": "2026-02-19",
    "end_time_ist": "20:52",
    "state": "उदय (Rise)",
    "source_start": "09:16 पी एम, फरवरी 18",
    "source_end": "08:52 पी एम, फरवरी 19"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-02-19",
    "start_time_ist": "20:52",
    "end_date": "2026-02-20",
    "end_time_ist": "20:07",
    "state": "उदय (Rise)",
    "source_start": "08:52 पी एम, फरवरी 19",
    "source_end": "08:07 पी एम, फरवरी 20"
  },
  {
    "nak": "Revati",
    "start_date": "2026-02-20",
    "start_time_ist": "20:07",
    "end_date": "2026-02-21",
    "end_time_ist": "19:07",
    "state": "उदय (Rise)",
    "source_start": "08:07 पी एम, फरवरी 20",
    "source_end": "07:07 पी एम, फरवरी 21"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-02-21",
    "start_time_ist": "19:07",
    "end_date": "2026-02-22",
    "end_time_ist": "17:54",
    "state": "उदय (Rise)",
    "source_start": "07:07 पी एम, फरवरी 21",
    "source_end": "05:54 पी एम, फरवरी 22"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-02-22",
    "start_time_ist": "17:54",
    "end_date": "2026-02-23",
    "end_time_ist": "16:33",
    "state": "उदय (Rise)",
    "source_start": "05:54 पी एम, फरवरी 22",
    "source_end": "04:33 पी एम, फरवरी 23"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-02-23",
    "start_time_ist": "16:33",
    "end_date": "2026-02-24",
    "end_time_ist": "15:07",
    "state": "उदय (Rise)",
    "source_start": "04:33 पी एम, फरवरी 23",
    "source_end": "03:07 पी एम, फरवरी 24"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-02-24",
    "start_time_ist": "15:07",
    "end_date": "2026-02-25",
    "end_time_ist": "13:38",
    "state": "उदय (Rise)",
    "source_start": "03:07 पी एम, फरवरी 24",
    "source_end": "01:38 पी एम, फरवरी 25"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-02-25",
    "start_time_ist": "13:38",
    "end_date": "2026-02-26",
    "end_time_ist": "12:11",
    "state": "उदय (Rise)",
    "source_start": "01:38 पी एम, फरवरी 25",
    "source_end": "12:11 पी एम, फरवरी 26"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-02-26",
    "start_time_ist": "12:11",
    "end_date": "2026-02-27",
    "end_time_ist": "10:48",
    "state": "उदय (Rise)",
    "source_start": "12:11 पी एम, फरवरी 26",
    "source_end": "10:48 ए एम, फरवरी 27"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-02-27",
    "start_time_ist": "10:48",
    "end_date": "2026-02-28",
    "end_time_ist": "09:35",
    "state": "उदय (Rise)",
    "source_start": "10:48 ए एम, फरवरी 27",
    "source_end": "09:35 ए एम, फरवरी 28"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-02-28",
    "start_time_ist": "09:35",
    "end_date": "2026-03-01",
    "end_time_ist": "08:34",
    "state": "उदय (Rise)",
    "source_start": "09:35 ए एम, फरवरी 28",
    "source_end": "08:34 ए एम, मार्च 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-02-28",
    "start_time_ist": "09:35",
    "end_date": "2026-03-01",
    "end_time_ist": "08:34",
    "state": "उदय (Rise)",
    "source_start": "09:35 ए एम, फरवरी 28",
    "source_end": "08:34 ए एम, मार्च 01"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-03-01",
    "start_time_ist": "08:34",
    "end_date": "2026-03-02",
    "end_time_ist": "07:51",
    "state": "उदय (Rise)",
    "source_start": "08:34 ए एम, मार्च 01",
    "source_end": "07:51 ए एम, मार्च 02"
  },
  {
    "nak": "Magha",
    "start_date": "2026-03-02",
    "start_time_ist": "07:51",
    "end_date": "2026-03-03",
    "end_time_ist": "07:31",
    "state": "उदय (Rise)",
    "source_start": "07:51 ए एम, मार्च 02",
    "source_end": "07:31 ए एम, मार्च 03"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-03-03",
    "start_time_ist": "07:31",
    "end_date": "2026-03-04",
    "end_time_ist": "07:39",
    "state": "उदय (Rise)",
    "source_start": "07:31 ए एम, मार्च 03",
    "source_end": "07:39 ए एम, मार्च 04"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-03-04",
    "start_time_ist": "07:39",
    "end_date": "2026-03-05",
    "end_time_ist": "08:17",
    "state": "उदय (Rise)",
    "source_start": "07:39 ए एम, मार्च 04",
    "source_end": "08:17 ए एम, मार्च 05"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-03-05",
    "start_time_ist": "08:17",
    "end_date": "2026-03-06",
    "end_time_ist": "09:29",
    "state": "उदय (Rise)",
    "source_start": "08:17 ए एम, मार्च 05",
    "source_end": "09:29 ए एम, मार्च 06"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-03-06",
    "start_time_ist": "09:29",
    "end_date": "2026-03-07",
    "end_time_ist": "11:15",
    "state": "उदय (Rise)",
    "source_start": "09:29 ए एम, मार्च 06",
    "source_end": "11:15 ए एम, मार्च 07"
  },
  {
    "nak": "Swati",
    "start_date": "2026-03-07",
    "start_time_ist": "11:15",
    "end_date": "2026-03-08",
    "end_time_ist": "13:31",
    "state": "उदय (Rise)",
    "source_start": "11:15 ए एम, मार्च 07",
    "source_end": "01:31 पी एम, मार्च 08"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-03-08",
    "start_time_ist": "13:31",
    "end_date": "2026-03-09",
    "end_time_ist": "16:11",
    "state": "उदय (Rise)",
    "source_start": "01:31 पी एम, मार्च 08",
    "source_end": "04:11 पी एम, मार्च 09"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-03-09",
    "start_time_ist": "16:11",
    "end_date": "2026-03-10",
    "end_time_ist": "19:05",
    "state": "उदय (Rise)",
    "source_start": "04:11 पी एम, मार्च 09",
    "source_end": "07:05 पी एम, मार्च 10"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-03-10",
    "start_time_ist": "19:05",
    "end_date": "2026-03-11",
    "end_time_ist": "22:00",
    "state": "उदय (Rise)",
    "source_start": "07:05 पी एम, मार्च 10",
    "source_end": "10:00 पी एम, मार्च 11"
  },
  {
    "nak": "Mula",
    "start_date": "2026-03-11",
    "start_time_ist": "22:00",
    "end_date": "2026-03-13",
    "end_time_ist": "00:43",
    "state": "उदय (Rise)",
    "source_start": "10:00 पी एम, मार्च 11",
    "source_end": "12:43 ए एम, मार्च 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-03-13",
    "start_time_ist": "00:43",
    "end_date": "2026-03-14",
    "end_time_ist": "03:03",
    "state": "उदय (Rise)",
    "source_start": "12:43 ए एम, मार्च 13",
    "source_end": "03:03 ए एम, मार्च 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-03-14",
    "start_time_ist": "03:03",
    "end_date": "2026-03-15",
    "end_time_ist": "04:49",
    "state": "उदय (Rise)",
    "source_start": "03:03 ए एम, मार्च 14",
    "source_end": "04:49 ए एम, मार्च 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-03-15",
    "start_time_ist": "04:49",
    "end_date": "2026-03-16",
    "end_time_ist": "05:56",
    "state": "उदय (Rise)",
    "source_start": "04:49 ए एम, मार्च 15",
    "source_end": "05:56 ए एम, मार्च 16"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-03-16",
    "start_time_ist": "05:56",
    "end_date": "2026-03-17",
    "end_time_ist": "06:22",
    "state": "उदय (Rise)",
    "source_start": "05:56 ए एम, मार्च 16",
    "source_end": "06:22 ए एम, मार्च 17"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-03-17",
    "start_time_ist": "06:22",
    "end_date": "2026-03-18",
    "end_time_ist": "06:09",
    "state": "उदय (Rise)",
    "source_start": "06:22 ए एम, मार्च 17",
    "source_end": "06:09 ए एम, मार्च 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-03-18",
    "start_time_ist": "06:09",
    "end_date": "2026-03-19",
    "end_time_ist": "05:21",
    "state": "उदय (Rise)",
    "source_start": "06:09 ए एम, मार्च 18",
    "source_end": "05:21 ए एम, मार्च 19"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-03-19",
    "start_time_ist": "05:21",
    "end_date": "2026-03-20",
    "end_time_ist": "04:05",
    "state": "उदय (Rise)",
    "source_start": "05:21 ए एम, मार्च 19",
    "source_end": "04:05 ए एम, मार्च 20"
  },
  {
    "nak": "Revati",
    "start_date": "2026-03-20",
    "start_time_ist": "04:05",
    "end_date": "2026-03-21",
    "end_time_ist": "02:27",
    "state": "उदय (Rise)",
    "source_start": "04:05 ए एम, मार्च 20",
    "source_end": "02:27 ए एम, मार्च 21"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-03-21",
    "start_time_ist": "02:27",
    "end_date": "2026-03-22",
    "end_time_ist": "00:37",
    "state": "उदय (Rise)",
    "source_start": "02:27 ए एम, मार्च 21",
    "source_end": "12:37 ए एम, मार्च 22"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-03-22",
    "start_time_ist": "00:37",
    "end_date": "2026-03-22",
    "end_time_ist": "22:42",
    "state": "उदय (Rise)",
    "source_start": "12:37 ए एम, मार्च 22",
    "source_end": "10:42 पी एम, मार्च 22"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-03-22",
    "start_time_ist": "22:42",
    "end_date": "2026-03-23",
    "end_time_ist": "20:49",
    "state": "उदय (Rise)",
    "source_start": "10:42 पी एम, मार्च 22",
    "source_end": "08:49 पी एम, मार्च 23"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-03-23",
    "start_time_ist": "20:49",
    "end_date": "2026-03-24",
    "end_time_ist": "19:04",
    "state": "उदय (Rise)",
    "source_start": "08:49 पी एम, मार्च 23",
    "source_end": "07:04 पी एम, मार्च 24"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-03-24",
    "start_time_ist": "19:05",
    "end_date": "2026-03-25",
    "end_time_ist": "17:33",
    "state": "उदय (Rise)",
    "source_start": "07:05 पी एम, मार्च 24",
    "source_end": "05:33 पी एम, मार्च 25"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-03-25",
    "start_time_ist": "17:33",
    "end_date": "2026-03-26",
    "end_time_ist": "16:19",
    "state": "उदय (Rise)",
    "source_start": "05:33 पी एम, मार्च 25",
    "source_end": "04:19 पी एम, मार्च 26"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-03-26",
    "start_time_ist": "16:19",
    "end_date": "2026-03-27",
    "end_time_ist": "15:24",
    "state": "उदय (Rise)",
    "source_start": "04:19 पी एम, मार्च 26",
    "source_end": "03:24 पी एम, मार्च 27"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-03-27",
    "start_time_ist": "15:24",
    "end_date": "2026-03-28",
    "end_time_ist": "14:50",
    "state": "उदय (Rise)",
    "source_start": "03:24 पी एम, मार्च 27",
    "source_end": "02:50 पी एम, मार्च 28"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-03-27",
    "start_time_ist": "15:24",
    "end_date": "2026-03-28",
    "end_time_ist": "14:50",
    "state": "उदय (Rise)",
    "source_start": "03:24 पी एम, मार्च 27",
    "source_end": "02:50 पी एम, मार्च 28"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-03-28",
    "start_time_ist": "14:50",
    "end_date": "2026-03-29",
    "end_time_ist": "14:38",
    "state": "उदय (Rise)",
    "source_start": "02:50 पी एम, मार्च 28",
    "source_end": "02:38 पी एम, मार्च 29"
  },
  {
    "nak": "Magha",
    "start_date": "2026-03-29",
    "start_time_ist": "14:38",
    "end_date": "2026-03-30",
    "end_time_ist": "14:48",
    "state": "उदय (Rise)",
    "source_start": "02:38 पी एम, मार्च 29",
    "source_end": "02:48 पी एम, मार्च 30"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-03-30",
    "start_time_ist": "14:48",
    "end_date": "2026-03-31",
    "end_time_ist": "15:20",
    "state": "उदय (Rise)",
    "source_start": "02:48 पी एम, मार्च 30",
    "source_end": "03:20 पी एम, मार्च 31"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-03-31",
    "start_time_ist": "15:20",
    "end_date": "2026-04-01",
    "end_time_ist": "16:17",
    "state": "उदय (Rise)",
    "source_start": "03:20 पी एम, मार्च 31",
    "source_end": "04:17 पी एम, अप्रैल 01"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-04-01",
    "start_time_ist": "16:17",
    "end_date": "2026-04-02",
    "end_time_ist": "17:38",
    "state": "उदय (Rise)",
    "source_start": "04:17 पी एम, अप्रैल 01",
    "source_end": "05:38 पी एम, अप्रैल 02"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-04-02",
    "start_time_ist": "17:38",
    "end_date": "2026-04-03",
    "end_time_ist": "19:25",
    "state": "उदय (Rise)",
    "source_start": "05:38 पी एम, अप्रैल 02",
    "source_end": "07:25 पी एम, अप्रैल 03"
  },
  {
    "nak": "Swati",
    "start_date": "2026-04-03",
    "start_time_ist": "19:25",
    "end_date": "2026-04-04",
    "end_time_ist": "21:35",
    "state": "उदय (Rise)",
    "source_start": "07:25 पी एम, अप्रैल 03",
    "source_end": "09:35 पी एम, अप्रैल 04"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-04-04",
    "start_time_ist": "21:35",
    "end_date": "2026-04-06",
    "end_time_ist": "00:08",
    "state": "उदय (Rise)",
    "source_start": "09:35 पी एम, अप्रैल 04",
    "source_end": "12:08 ए एम, अप्रैल 06"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-04-06",
    "start_time_ist": "00:08",
    "end_date": "2026-04-07",
    "end_time_ist": "02:57",
    "state": "उदय (Rise)",
    "source_start": "12:08 ए एम, अप्रैल 06",
    "source_end": "02:57 ए एम, अप्रैल 07"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-04-07",
    "start_time_ist": "02:57",
    "end_date": "2026-04-08",
    "end_time_ist": "05:54",
    "state": "उदय (Rise)",
    "source_start": "02:57 ए एम, अप्रैल 07",
    "source_end": "05:54 ए एम, अप्रैल 08"
  },
  {
    "nak": "Mula",
    "start_date": "2026-04-08",
    "start_time_ist": "05:54",
    "end_date": "2026-04-09",
    "end_time_ist": "08:48",
    "state": "उदय (Rise)",
    "source_start": "05:54 ए एम, अप्रैल 08",
    "source_end": "08:48 ए एम, अप्रैल 09"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-04-09",
    "start_time_ist": "08:48",
    "end_date": "2026-04-10",
    "end_time_ist": "11:28",
    "state": "उदय (Rise)",
    "source_start": "08:48 ए एम, अप्रैल 09",
    "source_end": "11:28 ए एम, अप्रैल 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-04-10",
    "start_time_ist": "11:28",
    "end_date": "2026-04-11",
    "end_time_ist": "13:39",
    "state": "उदय (Rise)",
    "source_start": "11:28 ए एम, अप्रैल 10",
    "source_end": "01:39 पी एम, अप्रैल 11"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-04-11",
    "start_time_ist": "13:39",
    "end_date": "2026-04-12",
    "end_time_ist": "15:14",
    "state": "उदय (Rise)",
    "source_start": "01:39 पी एम, अप्रैल 11",
    "source_end": "03:14 पी एम, अप्रैल 12"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-04-12",
    "start_time_ist": "15:14",
    "end_date": "2026-04-13",
    "end_time_ist": "16:03",
    "state": "उदय (Rise)",
    "source_start": "03:14 पी एम, अप्रैल 12",
    "source_end": "04:03 पी एम, अप्रैल 13"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-04-13",
    "start_time_ist": "16:03",
    "end_date": "2026-04-14",
    "end_time_ist": "16:06",
    "state": "उदय (Rise)",
    "source_start": "04:03 पी एम, अप्रैल 13",
    "source_end": "04:06 पी एम, अप्रैल 14"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-04-14",
    "start_time_ist": "16:06",
    "end_date": "2026-04-15",
    "end_time_ist": "15:22",
    "state": "उदय (Rise)",
    "source_start": "04:06 पी एम, अप्रैल 14",
    "source_end": "03:22 पी एम, अप्रैल 15"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-04-15",
    "start_time_ist": "15:22",
    "end_date": "2026-04-16",
    "end_time_ist": "13:59",
    "state": "उदय (Rise)",
    "source_start": "03:22 पी एम, अप्रैल 15",
    "source_end": "01:59 पी एम, अप्रैल 16"
  },
  {
    "nak": "Revati",
    "start_date": "2026-04-16",
    "start_time_ist": "13:59",
    "end_date": "2026-04-17",
    "end_time_ist": "12:02",
    "state": "उदय (Rise)",
    "source_start": "01:59 पी एम, अप्रैल 16",
    "source_end": "12:02 पी एम, अप्रैल 17"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-04-17",
    "start_time_ist": "12:02",
    "end_date": "2026-04-18",
    "end_time_ist": "09:42",
    "state": "उदय (Rise)",
    "source_start": "12:02 पी एम, अप्रैल 17",
    "source_end": "09:42 ए एम, अप्रैल 18"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-04-18",
    "start_time_ist": "09:42",
    "end_date": "2026-04-19",
    "end_time_ist": "07:10",
    "state": "उदय (Rise)",
    "source_start": "09:42 ए एम, अप्रैल 18",
    "source_end": "07:10 ए एम, अप्रैल 19"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-04-19",
    "start_time_ist": "07:10",
    "end_date": "2026-04-20",
    "end_time_ist": "04:35",
    "state": "उदय (Rise)",
    "source_start": "07:10 ए एम, अप्रैल 19",
    "source_end": "04:35 ए एम, अप्रैल 20"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-04-20",
    "start_time_ist": "04:35",
    "end_date": "2026-04-21",
    "end_time_ist": "02:08",
    "state": "उदय (Rise)",
    "source_start": "04:35 ए एम, अप्रैल 20",
    "source_end": "02:08 ए एम, अप्रैल 21"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-04-21",
    "start_time_ist": "02:08",
    "end_date": "2026-04-21",
    "end_time_ist": "23:58",
    "state": "उदय (Rise)",
    "source_start": "02:08 ए एम, अप्रैल 21",
    "source_end": "11:58 पी एम, अप्रैल 21"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-04-21",
    "start_time_ist": "23:58",
    "end_date": "2026-04-22",
    "end_time_ist": "22:13",
    "state": "उदय (Rise)",
    "source_start": "11:58 पी एम, अप्रैल 21",
    "source_end": "10:13 पी एम, अप्रैल 22"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-04-22",
    "start_time_ist": "22:13",
    "end_date": "2026-04-23",
    "end_time_ist": "20:57",
    "state": "उदय (Rise)",
    "source_start": "10:13 पी एम, अप्रैल 22",
    "source_end": "08:57 पी एम, अप्रैल 23"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-04-23",
    "start_time_ist": "20:57",
    "end_date": "2026-04-24",
    "end_time_ist": "20:14",
    "state": "उदय (Rise)",
    "source_start": "08:57 पी एम, अप्रैल 23",
    "source_end": "08:14 पी एम, अप्रैल 24"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-04-23",
    "start_time_ist": "20:57",
    "end_date": "2026-04-24",
    "end_time_ist": "20:14",
    "state": "उदय (Rise)",
    "source_start": "08:57 पी एम, अप्रैल 23",
    "source_end": "08:14 पी एम, अप्रैल 24"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-04-24",
    "start_time_ist": "20:14",
    "end_date": "2026-04-25",
    "end_time_ist": "20:04",
    "state": "उदय (Rise)",
    "source_start": "08:14 पी एम, अप्रैल 24",
    "source_end": "08:04 पी एम, अप्रैल 25"
  },
  {
    "nak": "Magha",
    "start_date": "2026-04-25",
    "start_time_ist": "20:04",
    "end_date": "2026-04-26",
    "end_time_ist": "20:27",
    "state": "उदय (Rise)",
    "source_start": "08:04 पी एम, अप्रैल 25",
    "source_end": "08:27 पी एम, अप्रैल 26"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-04-26",
    "start_time_ist": "20:27",
    "end_date": "2026-04-27",
    "end_time_ist": "21:18",
    "state": "उदय (Rise)",
    "source_start": "08:27 पी एम, अप्रैल 26",
    "source_end": "09:18 पी एम, अप्रैल 27"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-04-27",
    "start_time_ist": "21:18",
    "end_date": "2026-04-28",
    "end_time_ist": "22:36",
    "state": "उदय (Rise)",
    "source_start": "09:18 पी एम, अप्रैल 27",
    "source_end": "10:36 पी एम, अप्रैल 28"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-04-28",
    "start_time_ist": "22:36",
    "end_date": "2026-04-30",
    "end_time_ist": "00:16",
    "state": "उदय (Rise)",
    "source_start": "10:36 पी एम, अप्रैल 28",
    "source_end": "12:16 ए एम, अप्रैल 30"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-04-30",
    "start_time_ist": "00:16",
    "end_date": "2026-05-01",
    "end_time_ist": "02:16",
    "state": "उदय (Rise)",
    "source_start": "12:16 ए एम, अप्रैल 30",
    "source_end": "02:16 ए एम, मई 01"
  },
  {
    "nak": "Swati",
    "start_date": "2026-05-01",
    "start_time_ist": "02:16",
    "end_date": "2026-05-02",
    "end_time_ist": "04:35",
    "state": "उदय (Rise)",
    "source_start": "02:16 ए एम, मई 01",
    "source_end": "04:35 ए एम, मई 02"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-05-02",
    "start_time_ist": "04:35",
    "end_date": "2026-05-03",
    "end_time_ist": "07:10",
    "state": "उदय (Rise)",
    "source_start": "04:35 ए एम, मई 02",
    "source_end": "07:10 ए एम, मई 03"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-05-03",
    "start_time_ist": "07:10",
    "end_date": "2026-05-04",
    "end_time_ist": "09:58",
    "state": "उदय (Rise)",
    "source_start": "07:10 ए एम, मई 03",
    "source_end": "09:58 ए एम, मई 04"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-05-04",
    "start_time_ist": "09:58",
    "end_date": "2026-05-05",
    "end_time_ist": "12:55",
    "state": "उदय (Rise)",
    "source_start": "09:58 ए एम, मई 04",
    "source_end": "12:55 पी एम, मई 05"
  },
  {
    "nak": "Mula",
    "start_date": "2026-05-05",
    "start_time_ist": "12:55",
    "end_date": "2026-05-06",
    "end_time_ist": "15:54",
    "state": "उदय (Rise)",
    "source_start": "12:55 पी एम, मई 05",
    "source_end": "03:54 पी एम, मई 06"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-05-06",
    "start_time_ist": "15:54",
    "end_date": "2026-05-07",
    "end_time_ist": "18:46",
    "state": "उदय (Rise)",
    "source_start": "03:54 पी एम, मई 06",
    "source_end": "06:46 पी एम, मई 07"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-05-07",
    "start_time_ist": "18:46",
    "end_date": "2026-05-08",
    "end_time_ist": "21:20",
    "state": "उदय (Rise)",
    "source_start": "06:46 पी एम, मई 07",
    "source_end": "09:20 पी एम, मई 08"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-05-08",
    "start_time_ist": "21:20",
    "end_date": "2026-05-09",
    "end_time_ist": "23:24",
    "state": "उदय (Rise)",
    "source_start": "09:20 पी एम, मई 08",
    "source_end": "11:24 पी एम, मई 09"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-05-09",
    "start_time_ist": "23:24",
    "end_date": "2026-05-11",
    "end_time_ist": "00:50",
    "state": "उदय (Rise)",
    "source_start": "11:24 पी एम, मई 09",
    "source_end": "12:50 ए एम, मई 11"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-05-11",
    "start_time_ist": "00:50",
    "end_date": "2026-05-12",
    "end_time_ist": "01:28",
    "state": "उदय (Rise)",
    "source_start": "12:50 ए एम, मई 11",
    "source_end": "01:28 ए एम, मई 12"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-05-12",
    "start_time_ist": "01:28",
    "end_date": "2026-05-13",
    "end_time_ist": "01:17",
    "state": "उदय (Rise)",
    "source_start": "01:28 ए एम, मई 12",
    "source_end": "01:17 ए एम, मई 13"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-05-13",
    "start_time_ist": "01:17",
    "end_date": "2026-05-14",
    "end_time_ist": "00:17",
    "state": "उदय (Rise)",
    "source_start": "01:17 ए एम, मई 13",
    "source_end": "12:17 ए एम, मई 14"
  },
  {
    "nak": "Revati",
    "start_date": "2026-05-14",
    "start_time_ist": "00:17",
    "end_date": "2026-05-14",
    "end_time_ist": "22:34",
    "state": "उदय (Rise)",
    "source_start": "12:17 ए एम, मई 14",
    "source_end": "10:34 पी एम, मई 14"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-05-14",
    "start_time_ist": "22:34",
    "end_date": "2026-05-15",
    "end_time_ist": "20:14",
    "state": "उदय (Rise)",
    "source_start": "10:34 पी एम, मई 14",
    "source_end": "08:14 पी एम, मई 15"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-05-15",
    "start_time_ist": "20:14",
    "end_date": "2026-05-16",
    "end_time_ist": "17:30",
    "state": "उदय (Rise)",
    "source_start": "08:14 पी एम, मई 15",
    "source_end": "05:30 पी एम, मई 16"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-05-16",
    "start_time_ist": "17:30",
    "end_date": "2026-05-17",
    "end_time_ist": "14:32",
    "state": "उदय (Rise)",
    "source_start": "05:30 पी एम, मई 16",
    "source_end": "02:32 पी एम, मई 17"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-05-17",
    "start_time_ist": "14:32",
    "end_date": "2026-05-18",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "02:32 पी एम, मई 17",
    "source_end": "11:32 ए एम, मई 18"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-05-18",
    "start_time_ist": "11:32",
    "end_date": "2026-05-19",
    "end_time_ist": "08:41",
    "state": "उदय (Rise)",
    "source_start": "11:32 ए एम, मई 18",
    "source_end": "08:41 ए एम, मई 19"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-05-19",
    "start_time_ist": "08:41",
    "end_date": "2026-05-20",
    "end_time_ist": "06:12",
    "state": "उदय (Rise)",
    "source_start": "08:41 ए एम, मई 19",
    "source_end": "06:12 ए एम, मई 20"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-05-20",
    "start_time_ist": "06:12",
    "end_date": "2026-05-21",
    "end_time_ist": "04:12",
    "state": "उदय (Rise)",
    "source_start": "06:12 ए एम, मई 20",
    "source_end": "04:12 ए एम, मई 21"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-05-21",
    "start_time_ist": "04:12",
    "end_date": "2026-05-22",
    "end_time_ist": "02:49",
    "state": "उदय (Rise)",
    "source_start": "04:12 ए एम, मई 21",
    "source_end": "02:49 ए एम, मई 22"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-05-21",
    "start_time_ist": "04:12",
    "end_date": "2026-05-22",
    "end_time_ist": "02:49",
    "state": "उदय (Rise)",
    "source_start": "04:12 ए एम, मई 21",
    "source_end": "02:49 ए एम, मई 22"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-05-22",
    "start_time_ist": "02:49",
    "end_date": "2026-05-23",
    "end_time_ist": "02:08",
    "state": "उदय (Rise)",
    "source_start": "02:49 ए एम, मई 22",
    "source_end": "02:08 ए एम, मई 23"
  },
  {
    "nak": "Magha",
    "start_date": "2026-05-23",
    "start_time_ist": "02:08",
    "end_date": "2026-05-24",
    "end_time_ist": "02:09",
    "state": "उदय (Rise)",
    "source_start": "02:08 ए एम, मई 23",
    "source_end": "02:09 ए एम, मई 24"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-05-24",
    "start_time_ist": "02:09",
    "end_date": "2026-05-25",
    "end_time_ist": "02:51",
    "state": "उदय (Rise)",
    "source_start": "02:09 ए एम, मई 24",
    "source_end": "02:51 ए एम, मई 25"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-05-25",
    "start_time_ist": "02:51",
    "end_date": "2026-05-26",
    "end_time_ist": "04:08",
    "state": "उदय (Rise)",
    "source_start": "02:51 ए एम, मई 25",
    "source_end": "04:08 ए एम, मई 26"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-05-26",
    "start_time_ist": "04:08",
    "end_date": "2026-05-27",
    "end_time_ist": "05:56",
    "state": "उदय (Rise)",
    "source_start": "04:08 ए एम, मई 26",
    "source_end": "05:56 ए एम, मई 27"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-05-27",
    "start_time_ist": "05:56",
    "end_date": "2026-05-28",
    "end_time_ist": "08:08",
    "state": "उदय (Rise)",
    "source_start": "05:56 ए एम, मई 27",
    "source_end": "08:08 ए एम, मई 28"
  },
  {
    "nak": "Swati",
    "start_date": "2026-05-28",
    "start_time_ist": "08:08",
    "end_date": "2026-05-29",
    "end_time_ist": "10:38",
    "state": "उदय (Rise)",
    "source_start": "08:08 ए एम, मई 28",
    "source_end": "10:38 ए एम, मई 29"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-05-29",
    "start_time_ist": "10:38",
    "end_date": "2026-05-30",
    "end_time_ist": "13:20",
    "state": "उदय (Rise)",
    "source_start": "10:38 ए एम, मई 29",
    "source_end": "01:20 पी एम, मई 30"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-05-30",
    "start_time_ist": "13:20",
    "end_date": "2026-05-31",
    "end_time_ist": "16:12",
    "state": "उदय (Rise)",
    "source_start": "01:20 पी एम, मई 30",
    "source_end": "04:12 पी एम, मई 31"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-05-31",
    "start_time_ist": "16:12",
    "end_date": "2026-06-01",
    "end_time_ist": "19:08",
    "state": "उदय (Rise)",
    "source_start": "04:12 पी एम, मई 31",
    "source_end": "07:08 पी एम, जून 01"
  },
  {
    "nak": "Mula",
    "start_date": "2026-06-01",
    "start_time_ist": "19:08",
    "end_date": "2026-06-02",
    "end_time_ist": "22:06",
    "state": "उदय (Rise)",
    "source_start": "07:08 पी एम, जून 01",
    "source_end": "10:06 पी एम, जून 02"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-06-02",
    "start_time_ist": "22:06",
    "end_date": "2026-06-04",
    "end_time_ist": "00:59",
    "state": "उदय (Rise)",
    "source_start": "10:06 पी एम, जून 02",
    "source_end": "12:59 ए एम, जून 04"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-06-04",
    "start_time_ist": "00:59",
    "end_date": "2026-06-05",
    "end_time_ist": "03:41",
    "state": "उदय (Rise)",
    "source_start": "12:59 ए एम, जून 04",
    "source_end": "03:41 ए एम, जून 05"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-06-05",
    "start_time_ist": "03:41",
    "end_date": "2026-06-06",
    "end_time_ist": "06:03",
    "state": "उदय (Rise)",
    "source_start": "03:41 ए एम, जून 05",
    "source_end": "06:03 ए एम, जून 06"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-06-06",
    "start_time_ist": "06:03",
    "end_date": "2026-06-07",
    "end_time_ist": "07:55",
    "state": "उदय (Rise)",
    "source_start": "06:03 ए एम, जून 06",
    "source_end": "07:55 ए एम, जून 07"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-06-07",
    "start_time_ist": "07:55",
    "end_date": "2026-06-08",
    "end_time_ist": "09:09",
    "state": "उदय (Rise)",
    "source_start": "07:55 ए एम, जून 07",
    "source_end": "09:09 ए एम, जून 08"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-06-08",
    "start_time_ist": "09:09",
    "end_date": "2026-06-09",
    "end_time_ist": "09:39",
    "state": "उदय (Rise)",
    "source_start": "09:09 ए एम, जून 08",
    "source_end": "09:39 ए एम, जून 09"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-06-09",
    "start_time_ist": "09:39",
    "end_date": "2026-06-10",
    "end_time_ist": "09:21",
    "state": "उदय (Rise)",
    "source_start": "09:39 ए एम, जून 09",
    "source_end": "09:21 ए एम, जून 10"
  },
  {
    "nak": "Revati",
    "start_date": "2026-06-10",
    "start_time_ist": "09:21",
    "end_date": "2026-06-11",
    "end_time_ist": "08:16",
    "state": "उदय (Rise)",
    "source_start": "09:21 ए एम, जून 10",
    "source_end": "08:16 ए एम, जून 11"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-06-11",
    "start_time_ist": "08:16",
    "end_date": "2026-06-12",
    "end_time_ist": "06:28",
    "state": "उदय (Rise)",
    "source_start": "08:16 ए एम, जून 11",
    "source_end": "06:28 ए एम, जून 12"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-06-12",
    "start_time_ist": "06:28",
    "end_date": "2026-06-13",
    "end_time_ist": "04:05",
    "state": "उदय (Rise)",
    "source_start": "06:28 ए एम, जून 12",
    "source_end": "04:05 ए एम, जून 13"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-06-13",
    "start_time_ist": "04:05",
    "end_date": "2026-06-14",
    "end_time_ist": "01:16",
    "state": "उदय (Rise)",
    "source_start": "04:05 ए एम, जून 13",
    "source_end": "01:16 ए एम, जून 14"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-06-14",
    "start_time_ist": "01:16",
    "end_date": "2026-06-14",
    "end_time_ist": "22:13",
    "state": "उदय (Rise)",
    "source_start": "01:16 ए एम, जून 14",
    "source_end": "10:13 पी एम, जून 14"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-06-14",
    "start_time_ist": "22:14",
    "end_date": "2026-06-15",
    "end_time_ist": "19:08",
    "state": "उदय (Rise)",
    "source_start": "10:14 पी एम, जून 14",
    "source_end": "07:08 पी एम, जून 15"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-06-15",
    "start_time_ist": "19:08",
    "end_date": "2026-06-16",
    "end_time_ist": "16:12",
    "state": "उदय (Rise)",
    "source_start": "07:08 पी एम, जून 15",
    "source_end": "04:12 पी एम, जून 16"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-06-16",
    "start_time_ist": "16:12",
    "end_date": "2026-06-17",
    "end_time_ist": "13:37",
    "state": "उदय (Rise)",
    "source_start": "04:12 पी एम, जून 16",
    "source_end": "01:37 पी एम, जून 17"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-06-17",
    "start_time_ist": "13:37",
    "end_date": "2026-06-18",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "01:37 पी एम, जून 17",
    "source_end": "11:32 ए एम, जून 18"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-06-17",
    "start_time_ist": "13:37",
    "end_date": "2026-06-18",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "01:37 पी एम, जून 17",
    "source_end": "11:32 ए एम, जून 18"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-06-18",
    "start_time_ist": "11:32",
    "end_date": "2026-06-19",
    "end_time_ist": "10:06",
    "state": "उदय (Rise)",
    "source_start": "11:32 ए एम, जून 18",
    "source_end": "10:06 ए एम, जून 19"
  },
  {
    "nak": "Magha",
    "start_date": "2026-06-19",
    "start_time_ist": "10:06",
    "end_date": "2026-06-20",
    "end_time_ist": "09:25",
    "state": "उदय (Rise)",
    "source_start": "10:06 ए एम, जून 19",
    "source_end": "09:25 ए एम, जून 20"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-06-20",
    "start_time_ist": "09:25",
    "end_date": "2026-06-21",
    "end_time_ist": "09:31",
    "state": "उदय (Rise)",
    "source_start": "09:25 ए एम, जून 20",
    "source_end": "09:31 ए एम, जून 21"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-06-21",
    "start_time_ist": "09:31",
    "end_date": "2026-06-22",
    "end_time_ist": "10:22",
    "state": "उदय (Rise)",
    "source_start": "09:31 ए एम, जून 21",
    "source_end": "10:22 ए एम, जून 22"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-06-22",
    "start_time_ist": "10:22",
    "end_date": "2026-06-23",
    "end_time_ist": "11:54",
    "state": "उदय (Rise)",
    "source_start": "10:22 ए एम, जून 22",
    "source_end": "11:54 ए एम, जून 23"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-06-23",
    "start_time_ist": "11:54",
    "end_date": "2026-06-24",
    "end_time_ist": "13:59",
    "state": "उदय (Rise)",
    "source_start": "11:54 ए एम, जून 23",
    "source_end": "01:59 पी एम, जून 24"
  },
  {
    "nak": "Swati",
    "start_date": "2026-06-24",
    "start_time_ist": "13:59",
    "end_date": "2026-06-25",
    "end_time_ist": "16:29",
    "state": "उदय (Rise)",
    "source_start": "01:59 पी एम, जून 24",
    "source_end": "04:29 पी एम, जून 25"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-06-25",
    "start_time_ist": "16:29",
    "end_date": "2026-06-26",
    "end_time_ist": "19:16",
    "state": "उदय (Rise)",
    "source_start": "04:29 पी एम, जून 25",
    "source_end": "07:16 पी एम, जून 26"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-06-26",
    "start_time_ist": "19:16",
    "end_date": "2026-06-27",
    "end_time_ist": "22:11",
    "state": "उदय (Rise)",
    "source_start": "07:16 पी एम, जून 26",
    "source_end": "10:11 पी एम, जून 27"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-06-27",
    "start_time_ist": "22:11",
    "end_date": "2026-06-29",
    "end_time_ist": "01:08",
    "state": "उदय (Rise)",
    "source_start": "10:11 पी एम, जून 27",
    "source_end": "01:08 ए एम, जून 29"
  },
  {
    "nak": "Mula",
    "start_date": "2026-06-29",
    "start_time_ist": "01:08",
    "end_date": "2026-06-30",
    "end_time_ist": "04:03",
    "state": "उदय (Rise)",
    "source_start": "01:08 ए एम, जून 29",
    "source_end": "04:03 ए एम, जून 30"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-06-30",
    "start_time_ist": "04:03",
    "end_date": "2026-07-01",
    "end_time_ist": "06:51",
    "state": "उदय (Rise)",
    "source_start": "04:03 ए एम, जून 30",
    "source_end": "06:51 ए एम, जुलाई 01"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-07-01",
    "start_time_ist": "06:51",
    "end_date": "2026-07-02",
    "end_time_ist": "09:27",
    "state": "उदय (Rise)",
    "source_start": "06:51 ए एम, जुलाई 01",
    "source_end": "09:27 ए एम, जुलाई 02"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-07-02",
    "start_time_ist": "09:27",
    "end_date": "2026-07-03",
    "end_time_ist": "11:46",
    "state": "उदय (Rise)",
    "source_start": "09:27 ए एम, जुलाई 02",
    "source_end": "11:46 ए एम, जुलाई 03"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-07-03",
    "start_time_ist": "11:46",
    "end_date": "2026-07-04",
    "end_time_ist": "13:43",
    "state": "उदय (Rise)",
    "source_start": "11:46 ए एम, जुलाई 03",
    "source_end": "01:43 पी एम, जुलाई 04"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-07-04",
    "start_time_ist": "13:43",
    "end_date": "2026-07-05",
    "end_time_ist": "15:12",
    "state": "उदय (Rise)",
    "source_start": "01:43 पी एम, जुलाई 04",
    "source_end": "03:12 पी एम, जुलाई 05"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-07-05",
    "start_time_ist": "15:12",
    "end_date": "2026-07-06",
    "end_time_ist": "16:07",
    "state": "उदय (Rise)",
    "source_start": "03:12 पी एम, जुलाई 05",
    "source_end": "04:07 पी एम, जुलाई 06"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-07-06",
    "start_time_ist": "16:07",
    "end_date": "2026-07-07",
    "end_time_ist": "16:24",
    "state": "उदय (Rise)",
    "source_start": "04:07 पी एम, जुलाई 06",
    "source_end": "04:24 पी एम, जुलाई 07"
  },
  {
    "nak": "Revati",
    "start_date": "2026-07-07",
    "start_time_ist": "16:24",
    "end_date": "2026-07-08",
    "end_time_ist": "16:00",
    "state": "उदय (Rise)",
    "source_start": "04:24 पी एम, जुलाई 07",
    "source_end": "04:00 पी एम, जुलाई 08"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-07-08",
    "start_time_ist": "16:00",
    "end_date": "2026-07-09",
    "end_time_ist": "14:56",
    "state": "उदय (Rise)",
    "source_start": "04:00 पी एम, जुलाई 08",
    "source_end": "02:56 पी एम, जुलाई 09"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-07-09",
    "start_time_ist": "14:56",
    "end_date": "2026-07-10",
    "end_time_ist": "13:15",
    "state": "उदय (Rise)",
    "source_start": "02:56 पी एम, जुलाई 09",
    "source_end": "01:15 पी एम, जुलाई 10"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-07-10",
    "start_time_ist": "13:15",
    "end_date": "2026-07-11",
    "end_time_ist": "11:03",
    "state": "उदय (Rise)",
    "source_start": "01:15 पी एम, जुलाई 10",
    "source_end": "11:03 ए एम, जुलाई 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-07-11",
    "start_time_ist": "11:03",
    "end_date": "2026-07-12",
    "end_time_ist": "08:29",
    "state": "उदय (Rise)",
    "source_start": "11:03 ए एम, जुलाई 11",
    "source_end": "08:29 ए एम, जुलाई 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-07-12",
    "start_time_ist": "08:29",
    "end_date": "2026-07-13",
    "end_time_ist": "05:41",
    "state": "उदय (Rise)",
    "source_start": "08:29 ए एम, जुलाई 12",
    "source_end": "05:41 ए एम, जुलाई 13"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-07-13",
    "start_time_ist": "05:41",
    "end_date": "2026-07-14",
    "end_time_ist": "02:51",
    "state": "उदय (Rise)",
    "source_start": "05:41 ए एम, जुलाई 13",
    "source_end": "02:51 ए एम, जुलाई 14"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-07-14",
    "start_time_ist": "02:51",
    "end_date": "2026-07-15",
    "end_time_ist": "00:09",
    "state": "उदय (Rise)",
    "source_start": "02:51 ए एम, जुलाई 14",
    "source_end": "12:09 ए एम, जुलाई 15"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-07-15",
    "start_time_ist": "00:09",
    "end_date": "2026-07-15",
    "end_time_ist": "21:46",
    "state": "उदय (Rise)",
    "source_start": "12:09 ए एम, जुलाई 15",
    "source_end": "09:46 पी एम, जुलाई 15"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-07-15",
    "start_time_ist": "00:09",
    "end_date": "2026-07-15",
    "end_time_ist": "21:46",
    "state": "उदय (Rise)",
    "source_start": "12:09 ए एम, जुलाई 15",
    "source_end": "09:46 पी एम, जुलाई 15"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-07-15",
    "start_time_ist": "21:46",
    "end_date": "2026-07-16",
    "end_time_ist": "19:52",
    "state": "उदय (Rise)",
    "source_start": "09:46 पी एम, जुलाई 15",
    "source_end": "07:52 पी एम, जुलाई 16"
  },
  {
    "nak": "Magha",
    "start_date": "2026-07-16",
    "start_time_ist": "19:52",
    "end_date": "2026-07-17",
    "end_time_ist": "18:34",
    "state": "उदय (Rise)",
    "source_start": "07:52 पी एम, जुलाई 16",
    "source_end": "06:34 पी एम, जुलाई 17"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-07-17",
    "start_time_ist": "18:34",
    "end_date": "2026-07-18",
    "end_time_ist": "18:00",
    "state": "उदय (Rise)",
    "source_start": "06:34 पी एम, जुलाई 17",
    "source_end": "06:00 पी एम, जुलाई 18"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-07-18",
    "start_time_ist": "18:00",
    "end_date": "2026-07-19",
    "end_time_ist": "18:12",
    "state": "उदय (Rise)",
    "source_start": "06:00 पी एम, जुलाई 18",
    "source_end": "06:12 पी एम, जुलाई 19"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-07-19",
    "start_time_ist": "18:12",
    "end_date": "2026-07-20",
    "end_time_ist": "19:09",
    "state": "उदय (Rise)",
    "source_start": "06:12 पी एम, जुलाई 19",
    "source_end": "07:09 पी एम, जुलाई 20"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-07-20",
    "start_time_ist": "19:09",
    "end_date": "2026-07-21",
    "end_time_ist": "20:49",
    "state": "उदय (Rise)",
    "source_start": "07:09 पी एम, जुलाई 20",
    "source_end": "08:49 पी एम, जुलाई 21"
  },
  {
    "nak": "Swati",
    "start_date": "2026-07-21",
    "start_time_ist": "20:49",
    "end_date": "2026-07-22",
    "end_time_ist": "23:03",
    "state": "उदय (Rise)",
    "source_start": "08:49 पी एम, जुलाई 21",
    "source_end": "11:03 पी एम, जुलाई 22"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-07-22",
    "start_time_ist": "23:03",
    "end_date": "2026-07-24",
    "end_time_ist": "01:42",
    "state": "उदय (Rise)",
    "source_start": "11:03 पी एम, जुलाई 22",
    "source_end": "01:42 ए एम, जुलाई 24"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-07-24",
    "start_time_ist": "01:42",
    "end_date": "2026-07-25",
    "end_time_ist": "04:36",
    "state": "उदय (Rise)",
    "source_start": "01:42 ए एम, जुलाई 24",
    "source_end": "04:36 ए एम, जुलाई 25"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-07-25",
    "start_time_ist": "04:36",
    "end_date": "2026-07-26",
    "end_time_ist": "07:34",
    "state": "उदय (Rise)",
    "source_start": "04:36 ए एम, जुलाई 25",
    "source_end": "07:34 ए एम, जुलाई 26"
  },
  {
    "nak": "Mula",
    "start_date": "2026-07-26",
    "start_time_ist": "07:34",
    "end_date": "2026-07-27",
    "end_time_ist": "10:28",
    "state": "उदय (Rise)",
    "source_start": "07:34 ए एम, जुलाई 26",
    "source_end": "10:28 ए एम, जुलाई 27"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-07-27",
    "start_time_ist": "10:28",
    "end_date": "2026-07-28",
    "end_time_ist": "13:11",
    "state": "उदय (Rise)",
    "source_start": "10:28 ए एम, जुलाई 27",
    "source_end": "01:11 पी एम, जुलाई 28"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-07-28",
    "start_time_ist": "13:11",
    "end_date": "2026-07-29",
    "end_time_ist": "15:37",
    "state": "उदय (Rise)",
    "source_start": "01:11 पी एम, जुलाई 28",
    "source_end": "03:37 पी एम, जुलाई 29"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-07-29",
    "start_time_ist": "15:37",
    "end_date": "2026-07-30",
    "end_time_ist": "17:43",
    "state": "उदय (Rise)",
    "source_start": "03:37 पी एम, जुलाई 29",
    "source_end": "05:43 पी एम, जुलाई 30"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-07-30",
    "start_time_ist": "17:43",
    "end_date": "2026-07-31",
    "end_time_ist": "19:26",
    "state": "उदय (Rise)",
    "source_start": "05:43 पी एम, जुलाई 30",
    "source_end": "07:26 पी एम, जुलाई 31"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-07-31",
    "start_time_ist": "19:26",
    "end_date": "2026-08-01",
    "end_time_ist": "20:45",
    "state": "उदय (Rise)",
    "source_start": "07:26 पी एम, जुलाई 31",
    "source_end": "08:45 पी एम, अगस्त 01"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-08-01",
    "start_time_ist": "20:45",
    "end_date": "2026-08-02",
    "end_time_ist": "21:37",
    "state": "उदय (Rise)",
    "source_start": "08:45 पी एम, अगस्त 01",
    "source_end": "09:37 पी एम, अगस्त 02"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-08-02",
    "start_time_ist": "21:37",
    "end_date": "2026-08-03",
    "end_time_ist": "22:00",
    "state": "उदय (Rise)",
    "source_start": "09:37 पी एम, अगस्त 02",
    "source_end": "10:00 पी एम, अगस्त 03"
  },
  {
    "nak": "Revati",
    "start_date": "2026-08-03",
    "start_time_ist": "22:00",
    "end_date": "2026-08-04",
    "end_time_ist": "21:54",
    "state": "उदय (Rise)",
    "source_start": "10:00 पी एम, अगस्त 03",
    "source_end": "09:54 पी एम, अगस्त 04"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-08-04",
    "start_time_ist": "21:54",
    "end_date": "2026-08-05",
    "end_time_ist": "21:18",
    "state": "उदय (Rise)",
    "source_start": "09:54 पी एम, अगस्त 04",
    "source_end": "09:18 पी एम, अगस्त 05"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-08-05",
    "start_time_ist": "21:18",
    "end_date": "2026-08-06",
    "end_time_ist": "20:13",
    "state": "उदय (Rise)",
    "source_start": "09:18 पी एम, अगस्त 05",
    "source_end": "08:13 पी एम, अगस्त 06"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-08-06",
    "start_time_ist": "20:13",
    "end_date": "2026-08-07",
    "end_time_ist": "18:43",
    "state": "उदय (Rise)",
    "source_start": "08:13 पी एम, अगस्त 06",
    "source_end": "06:43 पी एम, अगस्त 07"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-08-07",
    "start_time_ist": "18:43",
    "end_date": "2026-08-08",
    "end_time_ist": "16:51",
    "state": "उदय (Rise)",
    "source_start": "06:43 पी एम, अगस्त 07",
    "source_end": "04:51 पी एम, अगस्त 08"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-08-08",
    "start_time_ist": "16:51",
    "end_date": "2026-08-09",
    "end_time_ist": "14:43",
    "state": "उदय (Rise)",
    "source_start": "04:51 पी एम, अगस्त 08",
    "source_end": "02:43 पी एम, अगस्त 09"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-08-09",
    "start_time_ist": "14:43",
    "end_date": "2026-08-10",
    "end_time_ist": "12:26",
    "state": "उदय (Rise)",
    "source_start": "02:43 पी एम, अगस्त 09",
    "source_end": "12:26 पी एम, अगस्त 10"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-08-10",
    "start_time_ist": "12:26",
    "end_date": "2026-08-11",
    "end_time_ist": "10:09",
    "state": "उदय (Rise)",
    "source_start": "12:26 पी एम, अगस्त 10",
    "source_end": "10:09 ए एम, अगस्त 11"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-08-11",
    "start_time_ist": "10:09",
    "end_date": "2026-08-12",
    "end_time_ist": "07:59",
    "state": "उदय (Rise)",
    "source_start": "10:09 ए एम, अगस्त 11",
    "source_end": "07:59 ए एम, अगस्त 12"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-08-11",
    "start_time_ist": "10:09",
    "end_date": "2026-08-12",
    "end_time_ist": "07:59",
    "state": "उदय (Rise)",
    "source_start": "10:09 ए एम, अगस्त 11",
    "source_end": "07:59 ए एम, अगस्त 12"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-08-12",
    "start_time_ist": "07:59",
    "end_date": "2026-08-13",
    "end_time_ist": "06:06",
    "state": "उदय (Rise)",
    "source_start": "07:59 ए एम, अगस्त 12",
    "source_end": "06:06 ए एम, अगस्त 13"
  },
  {
    "nak": "Magha",
    "start_date": "2026-08-13",
    "start_time_ist": "06:06",
    "end_date": "2026-08-14",
    "end_time_ist": "04:38",
    "state": "उदय (Rise)",
    "source_start": "06:06 ए एम, अगस्त 13",
    "source_end": "04:38 ए एम, अगस्त 14"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-08-14",
    "start_time_ist": "04:38",
    "end_date": "2026-08-15",
    "end_time_ist": "03:42",
    "state": "उदय (Rise)",
    "source_start": "04:38 ए एम, अगस्त 14",
    "source_end": "03:42 ए एम, अगस्त 15"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-08-15",
    "start_time_ist": "03:42",
    "end_date": "2026-08-16",
    "end_time_ist": "03:25",
    "state": "उदय (Rise)",
    "source_start": "03:42 ए एम, अगस्त 15",
    "source_end": "03:25 ए एम, अगस्त 16"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-08-16",
    "start_time_ist": "03:25",
    "end_date": "2026-08-17",
    "end_time_ist": "03:50",
    "state": "उदय (Rise)",
    "source_start": "03:25 ए एम, अगस्त 16",
    "source_end": "03:50 ए एम, अगस्त 17"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-08-17",
    "start_time_ist": "03:50",
    "end_date": "2026-08-18",
    "end_time_ist": "04:58",
    "state": "उदय (Rise)",
    "source_start": "03:50 ए एम, अगस्त 17",
    "source_end": "04:58 ए एम, अगस्त 18"
  },
  {
    "nak": "Swati",
    "start_date": "2026-08-18",
    "start_time_ist": "04:58",
    "end_date": "2026-08-19",
    "end_time_ist": "06:46",
    "state": "उदय (Rise)",
    "source_start": "04:58 ए एम, अगस्त 18",
    "source_end": "06:46 ए एम, अगस्त 19"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-08-19",
    "start_time_ist": "06:46",
    "end_date": "2026-08-20",
    "end_time_ist": "09:08",
    "state": "उदय (Rise)",
    "source_start": "06:46 ए एम, अगस्त 19",
    "source_end": "09:08 ए एम, अगस्त 20"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-08-20",
    "start_time_ist": "09:08",
    "end_date": "2026-08-21",
    "end_time_ist": "11:53",
    "state": "उदय (Rise)",
    "source_start": "09:08 ए एम, अगस्त 20",
    "source_end": "11:53 ए एम, अगस्त 21"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-08-21",
    "start_time_ist": "11:53",
    "end_date": "2026-08-22",
    "end_time_ist": "14:49",
    "state": "उदय (Rise)",
    "source_start": "11:53 ए एम, अगस्त 21",
    "source_end": "02:49 पी एम, अगस्त 22"
  },
  {
    "nak": "Mula",
    "start_date": "2026-08-22",
    "start_time_ist": "14:49",
    "end_date": "2026-08-23",
    "end_time_ist": "17:44",
    "state": "उदय (Rise)",
    "source_start": "02:49 पी एम, अगस्त 22",
    "source_end": "05:44 पी एम, अगस्त 23"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-08-23",
    "start_time_ist": "17:44",
    "end_date": "2026-08-24",
    "end_time_ist": "20:28",
    "state": "उदय (Rise)",
    "source_start": "05:44 पी एम, अगस्त 23",
    "source_end": "08:28 पी एम, अगस्त 24"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-08-24",
    "start_time_ist": "20:28",
    "end_date": "2026-08-25",
    "end_time_ist": "22:51",
    "state": "उदय (Rise)",
    "source_start": "08:28 पी एम, अगस्त 24",
    "source_end": "10:51 पी एम, अगस्त 25"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-08-25",
    "start_time_ist": "22:51",
    "end_date": "2026-08-27",
    "end_time_ist": "00:48",
    "state": "उदय (Rise)",
    "source_start": "10:51 पी एम, अगस्त 25",
    "source_end": "12:48 ए एम, अगस्त 27"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-08-27",
    "start_time_ist": "00:48",
    "end_date": "2026-08-28",
    "end_time_ist": "02:15",
    "state": "उदय (Rise)",
    "source_start": "12:48 ए एम, अगस्त 27",
    "source_end": "02:15 ए एम, अगस्त 28"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-08-28",
    "start_time_ist": "02:15",
    "end_date": "2026-08-29",
    "end_time_ist": "03:13",
    "state": "उदय (Rise)",
    "source_start": "02:15 ए एम, अगस्त 28",
    "source_end": "03:13 ए एम, अगस्त 29"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-08-29",
    "start_time_ist": "03:13",
    "end_date": "2026-08-30",
    "end_time_ist": "03:42",
    "state": "उदय (Rise)",
    "source_start": "03:13 ए एम, अगस्त 29",
    "source_end": "03:42 ए एम, अगस्त 30"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-08-30",
    "start_time_ist": "03:42",
    "end_date": "2026-08-31",
    "end_time_ist": "03:44",
    "state": "उदय (Rise)",
    "source_start": "03:42 ए एम, अगस्त 30",
    "source_end": "03:44 ए एम, अगस्त 31"
  },
  {
    "nak": "Revati",
    "start_date": "2026-08-31",
    "start_time_ist": "03:44",
    "end_date": "2026-09-01",
    "end_time_ist": "03:23",
    "state": "उदय (Rise)",
    "source_start": "03:44 ए एम, अगस्त 31",
    "source_end": "03:23 ए एम, सितम्बर 01"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-09-01",
    "start_time_ist": "03:23",
    "end_date": "2026-09-02",
    "end_time_ist": "02:42",
    "state": "उदय (Rise)",
    "source_start": "03:23 ए एम, सितम्बर 01",
    "source_end": "02:42 ए एम, सितम्बर 02"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-09-02",
    "start_time_ist": "02:42",
    "end_date": "2026-09-03",
    "end_time_ist": "01:43",
    "state": "उदय (Rise)",
    "source_start": "02:42 ए एम, सितम्बर 02",
    "source_end": "01:43 ए एम, सितम्बर 03"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-09-03",
    "start_time_ist": "01:43",
    "end_date": "2026-09-04",
    "end_time_ist": "00:29",
    "state": "उदय (Rise)",
    "source_start": "01:43 ए एम, सितम्बर 03",
    "source_end": "12:29 ए एम, सितम्बर 04"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-09-04",
    "start_time_ist": "00:29",
    "end_date": "2026-09-04",
    "end_time_ist": "23:04",
    "state": "उदय (Rise)",
    "source_start": "12:29 ए एम, सितम्बर 04",
    "source_end": "11:04 पी एम, सितम्बर 04"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-09-04",
    "start_time_ist": "23:04",
    "end_date": "2026-09-05",
    "end_time_ist": "21:30",
    "state": "उदय (Rise)",
    "source_start": "11:04 पी एम, सितम्बर 04",
    "source_end": "09:30 पी एम, सितम्बर 05"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-09-05",
    "start_time_ist": "21:30",
    "end_date": "2026-09-06",
    "end_time_ist": "19:52",
    "state": "उदय (Rise)",
    "source_start": "09:30 पी एम, सितम्बर 05",
    "source_end": "07:52 पी एम, सितम्बर 06"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-09-06",
    "start_time_ist": "19:52",
    "end_date": "2026-09-07",
    "end_time_ist": "18:14",
    "state": "उदय (Rise)",
    "source_start": "07:52 पी एम, सितम्बर 06",
    "source_end": "06:14 पी एम, सितम्बर 07"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-09-07",
    "start_time_ist": "18:14",
    "end_date": "2026-09-08",
    "end_time_ist": "16:39",
    "state": "उदय (Rise)",
    "source_start": "06:14 पी एम, सितम्बर 07",
    "source_end": "04:39 पी एम, सितम्बर 08"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-09-07",
    "start_time_ist": "18:14",
    "end_date": "2026-09-08",
    "end_time_ist": "16:39",
    "state": "उदय (Rise)",
    "source_start": "06:14 पी एम, सितम्बर 07",
    "source_end": "04:39 पी एम, सितम्बर 08"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-09-08",
    "start_time_ist": "16:39",
    "end_date": "2026-09-09",
    "end_time_ist": "15:14",
    "state": "उदय (Rise)",
    "source_start": "04:39 पी एम, सितम्बर 08",
    "source_end": "03:14 पी एम, सितम्बर 09"
  },
  {
    "nak": "Magha",
    "start_date": "2026-09-09",
    "start_time_ist": "15:14",
    "end_date": "2026-09-10",
    "end_time_ist": "14:04",
    "state": "उदय (Rise)",
    "source_start": "03:14 पी एम, सितम्बर 09",
    "source_end": "02:04 पी एम, सितम्बर 10"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-09-10",
    "start_time_ist": "14:04",
    "end_date": "2026-09-11",
    "end_time_ist": "13:16",
    "state": "उदय (Rise)",
    "source_start": "02:04 पी एम, सितम्बर 10",
    "source_end": "01:16 पी एम, सितम्बर 11"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-09-11",
    "start_time_ist": "13:16",
    "end_date": "2026-09-12",
    "end_time_ist": "12:55",
    "state": "उदय (Rise)",
    "source_start": "01:16 पी एम, सितम्बर 11",
    "source_end": "12:55 पी एम, सितम्बर 12"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-09-12",
    "start_time_ist": "12:55",
    "end_date": "2026-09-13",
    "end_time_ist": "13:07",
    "state": "उदय (Rise)",
    "source_start": "12:55 पी एम, सितम्बर 12",
    "source_end": "01:07 पी एम, सितम्बर 13"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-09-13",
    "start_time_ist": "13:07",
    "end_date": "2026-09-14",
    "end_time_ist": "13:55",
    "state": "उदय (Rise)",
    "source_start": "01:07 पी एम, सितम्बर 13",
    "source_end": "01:55 पी एम, सितम्बर 14"
  },
  {
    "nak": "Swati",
    "start_date": "2026-09-14",
    "start_time_ist": "13:55",
    "end_date": "2026-09-15",
    "end_time_ist": "15:21",
    "state": "उदय (Rise)",
    "source_start": "01:55 पी एम, सितम्बर 14",
    "source_end": "03:21 पी एम, सितम्बर 15"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-09-15",
    "start_time_ist": "15:21",
    "end_date": "2026-09-16",
    "end_time_ist": "17:22",
    "state": "उदय (Rise)",
    "source_start": "03:21 पी एम, सितम्बर 15",
    "source_end": "05:22 पी एम, सितम्बर 16"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-09-16",
    "start_time_ist": "17:22",
    "end_date": "2026-09-17",
    "end_time_ist": "19:53",
    "state": "उदय (Rise)",
    "source_start": "05:22 पी एम, सितम्बर 16",
    "source_end": "07:53 पी एम, सितम्बर 17"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-09-17",
    "start_time_ist": "19:53",
    "end_date": "2026-09-18",
    "end_time_ist": "22:44",
    "state": "उदय (Rise)",
    "source_start": "07:53 पी एम, सितम्बर 17",
    "source_end": "10:44 पी एम, सितम्बर 18"
  },
  {
    "nak": "Mula",
    "start_date": "2026-09-18",
    "start_time_ist": "22:44",
    "end_date": "2026-09-20",
    "end_time_ist": "01:43",
    "state": "उदय (Rise)",
    "source_start": "10:44 पी एम, सितम्बर 18",
    "source_end": "01:43 ए एम, सितम्बर 20"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-09-20",
    "start_time_ist": "01:43",
    "end_date": "2026-09-21",
    "end_time_ist": "04:34",
    "state": "उदय (Rise)",
    "source_start": "01:43 ए एम, सितम्बर 20",
    "source_end": "04:34 ए एम, सितम्बर 21"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-09-21",
    "start_time_ist": "04:34",
    "end_date": "2026-09-22",
    "end_time_ist": "07:06",
    "state": "उदय (Rise)",
    "source_start": "04:34 ए एम, सितम्बर 21",
    "source_end": "07:06 ए एम, सितम्बर 22"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-09-22",
    "start_time_ist": "07:06",
    "end_date": "2026-09-23",
    "end_time_ist": "09:09",
    "state": "उदय (Rise)",
    "source_start": "07:06 ए एम, सितम्बर 22",
    "source_end": "09:09 ए एम, सितम्बर 23"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-09-23",
    "start_time_ist": "09:09",
    "end_date": "2026-09-24",
    "end_time_ist": "10:35",
    "state": "उदय (Rise)",
    "source_start": "09:09 ए एम, सितम्बर 23",
    "source_end": "10:35 ए एम, सितम्बर 24"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-09-24",
    "start_time_ist": "10:35",
    "end_date": "2026-09-25",
    "end_time_ist": "11:22",
    "state": "उदय (Rise)",
    "source_start": "10:35 ए एम, सितम्बर 24",
    "source_end": "11:22 ए एम, सितम्बर 25"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-09-25",
    "start_time_ist": "11:22",
    "end_date": "2026-09-26",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "11:22 ए एम, सितम्बर 25",
    "source_end": "11:32 ए एम, सितम्बर 26"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-09-26",
    "start_time_ist": "11:32",
    "end_date": "2026-09-27",
    "end_time_ist": "11:08",
    "state": "उदय (Rise)",
    "source_start": "11:32 ए एम, सितम्बर 26",
    "source_end": "11:08 ए एम, सितम्बर 27"
  },
  {
    "nak": "Revati",
    "start_date": "2026-09-27",
    "start_time_ist": "11:08",
    "end_date": "2026-09-28",
    "end_time_ist": "10:16",
    "state": "उदय (Rise)",
    "source_start": "11:08 ए एम, सितम्बर 27",
    "source_end": "10:16 ए एम, सितम्बर 28"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-09-28",
    "start_time_ist": "10:16",
    "end_date": "2026-09-29",
    "end_time_ist": "09:03",
    "state": "उदय (Rise)",
    "source_start": "10:16 ए एम, सितम्बर 28",
    "source_end": "09:03 ए एम, सितम्बर 29"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-09-29",
    "start_time_ist": "09:03",
    "end_date": "2026-09-30",
    "end_time_ist": "07:36",
    "state": "उदय (Rise)",
    "source_start": "09:03 ए एम, सितम्बर 29",
    "source_end": "07:36 ए एम, सितम्बर 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-09-30",
    "start_time_ist": "07:36",
    "end_date": "2026-10-01",
    "end_time_ist": "06:02",
    "state": "उदय (Rise)",
    "source_start": "07:36 ए एम, सितम्बर 30",
    "source_end": "06:02 ए एम, अक्टूबर 01"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-10-01",
    "start_time_ist": "06:02",
    "end_date": "2026-10-02",
    "end_time_ist": "04:27",
    "state": "उदय (Rise)",
    "source_start": "06:02 ए एम, अक्टूबर 01",
    "source_end": "04:27 ए एम, अक्टूबर 02"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-10-02",
    "start_time_ist": "04:27",
    "end_date": "2026-10-03",
    "end_time_ist": "02:55",
    "state": "उदय (Rise)",
    "source_start": "04:27 ए एम, अक्टूबर 02",
    "source_end": "02:55 ए एम, अक्टूबर 03"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-10-03",
    "start_time_ist": "02:55",
    "end_date": "2026-10-04",
    "end_time_ist": "01:29",
    "state": "उदय (Rise)",
    "source_start": "02:55 ए एम, अक्टूबर 03",
    "source_end": "01:29 ए एम, अक्टूबर 04"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-10-04",
    "start_time_ist": "01:29",
    "end_date": "2026-10-05",
    "end_time_ist": "00:13",
    "state": "उदय (Rise)",
    "source_start": "01:29 ए एम, अक्टूबर 04",
    "source_end": "12:13 ए एम, अक्टूबर 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-10-05",
    "start_time_ist": "00:13",
    "end_date": "2026-10-05",
    "end_time_ist": "23:09",
    "state": "उदय (Rise)",
    "source_start": "12:13 ए एम, अक्टूबर 05",
    "source_end": "11:09 पी एम, अक्टूबर 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-10-05",
    "start_time_ist": "00:13",
    "end_date": "2026-10-05",
    "end_time_ist": "23:09",
    "state": "उदय (Rise)",
    "source_start": "12:13 ए एम, अक्टूबर 05",
    "source_end": "11:09 पी एम, अक्टूबर 05"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-10-05",
    "start_time_ist": "23:09",
    "end_date": "2026-10-06",
    "end_time_ist": "22:17",
    "state": "उदय (Rise)",
    "source_start": "11:09 पी एम, अक्टूबर 05",
    "source_end": "10:17 पी एम, अक्टूबर 06"
  },
  {
    "nak": "Magha",
    "start_date": "2026-10-06",
    "start_time_ist": "22:17",
    "end_date": "2026-10-07",
    "end_time_ist": "21:40",
    "state": "उदय (Rise)",
    "source_start": "10:17 पी एम, अक्टूबर 06",
    "source_end": "09:40 पी एम, अक्टूबर 07"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-10-07",
    "start_time_ist": "21:40",
    "end_date": "2026-10-08",
    "end_time_ist": "21:20",
    "state": "उदय (Rise)",
    "source_start": "09:40 पी एम, अक्टूबर 07",
    "source_end": "09:20 पी एम, अक्टूबर 08"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-10-08",
    "start_time_ist": "21:20",
    "end_date": "2026-10-09",
    "end_time_ist": "21:19",
    "state": "उदय (Rise)",
    "source_start": "09:20 पी एम, अक्टूबर 08",
    "source_end": "09:19 पी एम, अक्टूबर 09"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-10-09",
    "start_time_ist": "21:19",
    "end_date": "2026-10-10",
    "end_time_ist": "21:42",
    "state": "उदय (Rise)",
    "source_start": "09:19 पी एम, अक्टूबर 09",
    "source_end": "09:42 पी एम, अक्टूबर 10"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-10-10",
    "start_time_ist": "21:42",
    "end_date": "2026-10-11",
    "end_time_ist": "22:32",
    "state": "उदय (Rise)",
    "source_start": "09:42 पी एम, अक्टूबर 10",
    "source_end": "10:32 पी एम, अक्टूबर 11"
  },
  {
    "nak": "Swati",
    "start_date": "2026-10-11",
    "start_time_ist": "22:32",
    "end_date": "2026-10-12",
    "end_time_ist": "23:52",
    "state": "उदय (Rise)",
    "source_start": "10:32 पी एम, अक्टूबर 11",
    "source_end": "11:52 पी एम, अक्टूबर 12"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-10-12",
    "start_time_ist": "23:52",
    "end_date": "2026-10-14",
    "end_time_ist": "01:43",
    "state": "उदय (Rise)",
    "source_start": "11:52 पी एम, अक्टूबर 12",
    "source_end": "01:43 ए एम, अक्टूबर 14"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-10-14",
    "start_time_ist": "01:43",
    "end_date": "2026-10-15",
    "end_time_ist": "04:03",
    "state": "उदय (Rise)",
    "source_start": "01:43 ए एम, अक्टूबर 14",
    "source_end": "04:03 ए एम, अक्टूबर 15"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-10-15",
    "start_time_ist": "04:03",
    "end_date": "2026-10-16",
    "end_time_ist": "06:47",
    "state": "उदय (Rise)",
    "source_start": "04:03 ए एम, अक्टूबर 15",
    "source_end": "06:47 ए एम, अक्टूबर 16"
  },
  {
    "nak": "Mula",
    "start_date": "2026-10-16",
    "start_time_ist": "06:47",
    "end_date": "2026-10-17",
    "end_time_ist": "09:47",
    "state": "उदय (Rise)",
    "source_start": "06:47 ए एम, अक्टूबर 16",
    "source_end": "09:47 ए एम, अक्टूबर 17"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-10-17",
    "start_time_ist": "09:47",
    "end_date": "2026-10-18",
    "end_time_ist": "12:49",
    "state": "उदय (Rise)",
    "source_start": "09:47 ए एम, अक्टूबर 17",
    "source_end": "12:49 पी एम, अक्टूबर 18"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-10-18",
    "start_time_ist": "12:49",
    "end_date": "2026-10-19",
    "end_time_ist": "15:38",
    "state": "उदय (Rise)",
    "source_start": "12:49 पी एम, अक्टूबर 18",
    "source_end": "03:38 पी एम, अक्टूबर 19"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-10-19",
    "start_time_ist": "15:38",
    "end_date": "2026-10-20",
    "end_time_ist": "18:02",
    "state": "उदय (Rise)",
    "source_start": "03:38 पी एम, अक्टूबर 19",
    "source_end": "06:02 पी एम, अक्टूबर 20"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-10-20",
    "start_time_ist": "18:02",
    "end_date": "2026-10-21",
    "end_time_ist": "19:47",
    "state": "उदय (Rise)",
    "source_start": "06:02 पी एम, अक्टूबर 20",
    "source_end": "07:47 पी एम, अक्टूबर 21"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-10-21",
    "start_time_ist": "19:47",
    "end_date": "2026-10-22",
    "end_time_ist": "20:49",
    "state": "उदय (Rise)",
    "source_start": "07:47 पी एम, अक्टूबर 21",
    "source_end": "08:49 पी एम, अक्टूबर 22"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-10-22",
    "start_time_ist": "20:49",
    "end_date": "2026-10-23",
    "end_time_ist": "21:02",
    "state": "उदय (Rise)",
    "source_start": "08:49 पी एम, अक्टूबर 22",
    "source_end": "09:02 पी एम, अक्टूबर 23"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-10-23",
    "start_time_ist": "21:03",
    "end_date": "2026-10-24",
    "end_time_ist": "20:32",
    "state": "उदय (Rise)",
    "source_start": "09:03 पी एम, अक्टूबर 23",
    "source_end": "08:32 पी एम, अक्टूबर 24"
  },
  {
    "nak": "Revati",
    "start_date": "2026-10-24",
    "start_time_ist": "20:32",
    "end_date": "2026-10-25",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "08:32 पी एम, अक्टूबर 24",
    "source_end": "07:22 पी एम, अक्टूबर 25"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-10-25",
    "start_time_ist": "19:22",
    "end_date": "2026-10-26",
    "end_time_ist": "17:41",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, अक्टूबर 25",
    "source_end": "05:41 पी एम, अक्टूबर 26"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-10-26",
    "start_time_ist": "17:41",
    "end_date": "2026-10-27",
    "end_time_ist": "15:39",
    "state": "उदय (Rise)",
    "source_start": "05:41 पी एम, अक्टूबर 26",
    "source_end": "03:39 पी एम, अक्टूबर 27"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-10-27",
    "start_time_ist": "15:39",
    "end_date": "2026-10-28",
    "end_time_ist": "13:26",
    "state": "उदय (Rise)",
    "source_start": "03:39 पी एम, अक्टूबर 27",
    "source_end": "01:26 पी एम, अक्टूबर 28"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-10-28",
    "start_time_ist": "13:26",
    "end_date": "2026-10-29",
    "end_time_ist": "11:11",
    "state": "उदय (Rise)",
    "source_start": "01:26 पी एम, अक्टूबर 28",
    "source_end": "11:11 ए एम, अक्टूबर 29"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-10-29",
    "start_time_ist": "11:11",
    "end_date": "2026-10-30",
    "end_time_ist": "09:04",
    "state": "उदय (Rise)",
    "source_start": "11:11 ए एम, अक्टूबर 29",
    "source_end": "09:04 ए एम, अक्टूबर 30"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-10-30",
    "start_time_ist": "09:04",
    "end_date": "2026-10-31",
    "end_time_ist": "07:12",
    "state": "उदय (Rise)",
    "source_start": "09:04 ए एम, अक्टूबर 30",
    "source_end": "07:12 ए एम, अक्टूबर 31"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-10-31",
    "start_time_ist": "07:12",
    "end_date": "2026-11-01",
    "end_time_ist": "05:39",
    "state": "उदय (Rise)",
    "source_start": "07:12 ए एम, अक्टूबर 31",
    "source_end": "05:39 ए एम, नवम्बर 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-11-01",
    "start_time_ist": "05:39",
    "end_date": "2026-11-02",
    "end_time_ist": "04:30",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, नवम्बर 01",
    "source_end": "04:30 ए एम, नवम्बर 02"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-11-01",
    "start_time_ist": "05:39",
    "end_date": "2026-11-02",
    "end_time_ist": "04:30",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, नवम्बर 01",
    "source_end": "04:30 ए एम, नव",
    "end_date_recovered": true
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-11-02",
    "start_time_ist": "04:30",
    "end_date": "2026-11-03",
    "end_time_ist": "03:46",
    "state": "उदय (Rise)",
    "source_start": "04:30 ए एम, नवम्बर 02",
    "source_end": "03:46 ए एम, नवम्बर 03"
  },
  {
    "nak": "Magha",
    "start_date": "2026-11-03",
    "start_time_ist": "03:46",
    "end_date": "2026-11-04",
    "end_time_ist": "03:26",
    "state": "उदय (Rise)",
    "source_start": "03:46 ए एम, नवम्बर 03",
    "source_end": "03:26 ए एम, नवम्बर 04"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-11-04",
    "start_time_ist": "03:26",
    "end_date": "2026-11-05",
    "end_time_ist": "03:30",
    "state": "उदय (Rise)",
    "source_start": "03:26 ए एम, नवम्बर 04",
    "source_end": "03:30 ए एम, नवम्बर 05"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-11-05",
    "start_time_ist": "03:30",
    "end_date": "2026-11-06",
    "end_time_ist": "03:55",
    "state": "उदय (Rise)",
    "source_start": "03:30 ए एम, नवम्बर 05",
    "source_end": "03:55 ए एम, नवम्बर 06"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-11-06",
    "start_time_ist": "03:55",
    "end_date": "2026-11-07",
    "end_time_ist": "04:43",
    "state": "उदय (Rise)",
    "source_start": "03:55 ए एम, नवम्बर 06",
    "source_end": "04:43 ए एम, नवम्बर 07"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-11-07",
    "start_time_ist": "04:43",
    "end_date": "2026-11-08",
    "end_time_ist": "05:52",
    "state": "उदय (Rise)",
    "source_start": "04:43 ए एम, नवम्बर 07",
    "source_end": "05:52 ए एम, नवम्बर 08"
  },
  {
    "nak": "Swati",
    "start_date": "2026-11-08",
    "start_time_ist": "05:52",
    "end_date": "2026-11-09",
    "end_time_ist": "07:24",
    "state": "उदय (Rise)",
    "source_start": "05:52 ए एम, नवम्बर 08",
    "source_end": "07:24 ए एम, नवम्बर 09"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-11-09",
    "start_time_ist": "07:24",
    "end_date": "2026-11-10",
    "end_time_ist": "09:19",
    "state": "उदय (Rise)",
    "source_start": "07:24 ए एम, नवम्बर 09",
    "source_end": "09:19 ए एम, नवम्बर 10"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-11-10",
    "start_time_ist": "09:19",
    "end_date": "2026-11-11",
    "end_time_ist": "11:38",
    "state": "उदय (Rise)",
    "source_start": "09:19 ए एम, नवम्बर 10",
    "source_end": "11:38 ए एम, नवम्बर 11"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-11-11",
    "start_time_ist": "11:38",
    "end_date": "2026-11-12",
    "end_time_ist": "14:19",
    "state": "उदय (Rise)",
    "source_start": "11:38 ए एम, नवम्बर 11",
    "source_end": "02:19 पी एम, नवम्बर 12"
  },
  {
    "nak": "Mula",
    "start_date": "2026-11-12",
    "start_time_ist": "14:19",
    "end_date": "2026-11-13",
    "end_time_ist": "17:17",
    "state": "उदय (Rise)",
    "source_start": "02:19 पी एम, नवम्बर 12",
    "source_end": "05:17 पी एम, नवम्बर 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-11-13",
    "start_time_ist": "17:17",
    "end_date": "2026-11-14",
    "end_time_ist": "20:24",
    "state": "उदय (Rise)",
    "source_start": "05:17 पी एम, नवम्बर 13",
    "source_end": "08:24 पी एम, नवम्बर 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-11-14",
    "start_time_ist": "20:24",
    "end_date": "2026-11-15",
    "end_time_ist": "23:28",
    "state": "उदय (Rise)",
    "source_start": "08:24 पी एम, नवम्बर 14",
    "source_end": "11:28 पी एम, नवम्बर 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-11-15",
    "start_time_ist": "23:28",
    "end_date": "2026-11-17",
    "end_time_ist": "02:17",
    "state": "उदय (Rise)",
    "source_start": "11:28 पी एम, नवम्बर 15",
    "source_end": "02:17 ए एम, नवम्बर 17"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-11-17",
    "start_time_ist": "02:16",
    "end_date": "2026-11-18",
    "end_time_ist": "04:34",
    "state": "उदय (Rise)",
    "source_start": "02:16 ए एम, नवम्बर 17",
    "source_end": "04:34 ए एम, नवम्बर 18"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-11-18",
    "start_time_ist": "04:34",
    "end_date": "2026-11-19",
    "end_time_ist": "06:10",
    "state": "उदय (Rise)",
    "source_start": "04:34 ए एम, नवम्बर 18",
    "source_end": "06:10 ए एम, नवम्बर 19"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-11-19",
    "start_time_ist": "06:10",
    "end_date": "2026-11-20",
    "end_time_ist": "06:56",
    "state": "उदय (Rise)",
    "source_start": "06:10 ए एम, नवम्बर 19",
    "source_end": "06:56 ए एम, नवम्बर 20"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-11-20",
    "start_time_ist": "06:56",
    "end_date": "2026-11-21",
    "end_time_ist": "06:50",
    "state": "उदय (Rise)",
    "source_start": "06:56 ए एम, नवम्बर 20",
    "source_end": "06:50 ए एम, नवम्बर 21"
  },
  {
    "nak": "Revati",
    "start_date": "2026-11-21",
    "start_time_ist": "06:50",
    "end_date": "2026-11-22",
    "end_time_ist": "05:54",
    "state": "उदय (Rise)",
    "source_start": "06:50 ए एम, नवम्बर 21",
    "source_end": "05:54 ए एम, नवम्बर 22"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-11-22",
    "start_time_ist": "05:54",
    "end_date": "2026-11-23",
    "end_time_ist": "04:15",
    "state": "उदय (Rise)",
    "source_start": "05:54 ए एम, नवम्बर 22",
    "source_end": "04:15 ए एम, नवम्बर 23"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-11-23",
    "start_time_ist": "04:15",
    "end_date": "2026-11-24",
    "end_time_ist": "02:02",
    "state": "उदय (Rise)",
    "source_start": "04:15 ए एम, नवम्बर 23",
    "source_end": "02:02 ए एम, नवम्बर 24"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-11-24",
    "start_time_ist": "02:02",
    "end_date": "2026-11-24",
    "end_time_ist": "23:25",
    "state": "उदय (Rise)",
    "source_start": "02:02 ए एम, नवम्बर 24",
    "source_end": "11:25 पी एम, नवम्बर 24"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-11-24",
    "start_time_ist": "23:25",
    "end_date": "2026-11-25",
    "end_time_ist": "20:36",
    "state": "उदय (Rise)",
    "source_start": "11:25 पी एम, नवम्बर 24",
    "source_end": "08:36 पी एम, नवम्बर 25"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-11-25",
    "start_time_ist": "20:36",
    "end_date": "2026-11-26",
    "end_time_ist": "17:47",
    "state": "उदय (Rise)",
    "source_start": "08:36 पी एम, नवम्बर 25",
    "source_end": "05:47 पी एम, नवम्बर 26"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-11-26",
    "start_time_ist": "17:47",
    "end_date": "2026-11-27",
    "end_time_ist": "15:08",
    "state": "उदय (Rise)",
    "source_start": "05:47 पी एम, नवम्बर 26",
    "source_end": "03:08 पी एम, नवम्बर 27"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-11-27",
    "start_time_ist": "15:08",
    "end_date": "2026-11-28",
    "end_time_ist": "12:50",
    "state": "उदय (Rise)",
    "source_start": "03:08 पी एम, नवम्बर 27",
    "source_end": "12:50 पी एम, नवम्बर 28"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-11-28",
    "start_time_ist": "12:50",
    "end_date": "2026-11-29",
    "end_time_ist": "10:59",
    "state": "उदय (Rise)",
    "source_start": "12:50 पी एम, नवम्बर 28",
    "source_end": "10:59 ए एम, नवम्बर 29"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-11-28",
    "start_time_ist": "12:50",
    "end_date": "2026-11-29",
    "end_time_ist": "10:59",
    "state": "उदय (Rise)",
    "source_start": "12:50 पी एम, नवम्बर 28",
    "source_end": "10:59 ए एम, नवम्बर 29"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-11-29",
    "start_time_ist": "10:59",
    "end_date": "2026-11-30",
    "end_time_ist": "09:42",
    "state": "उदय (Rise)",
    "source_start": "10:59 ए एम, नवम्बर 29",
    "source_end": "09:42 ए एम, नवम्बर 30"
  },
  {
    "nak": "Magha",
    "start_date": "2026-11-30",
    "start_time_ist": "09:42",
    "end_date": "2026-12-01",
    "end_time_ist": "09:00",
    "state": "उदय (Rise)",
    "source_start": "09:42 ए एम, नवम्बर 30",
    "source_end": "09:00 ए एम, दिसम्बर 01"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-12-01",
    "start_time_ist": "09:00",
    "end_date": "2026-12-02",
    "end_time_ist": "08:55",
    "state": "उदय (Rise)",
    "source_start": "09:00 ए एम, दिसम्बर 01",
    "source_end": "08:55 ए एम, दिसम्बर 02"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-12-02",
    "start_time_ist": "08:55",
    "end_date": "2026-12-03",
    "end_time_ist": "09:23",
    "state": "उदय (Rise)",
    "source_start": "08:55 ए एम, दिसम्बर 02",
    "source_end": "09:23 ए एम, दिसम्बर 03"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-12-03",
    "start_time_ist": "09:23",
    "end_date": "2026-12-04",
    "end_time_ist": "10:22",
    "state": "उदय (Rise)",
    "source_start": "09:23 ए एम, दिसम्बर 03",
    "source_end": "10:22 ए एम, दिसम्बर 04"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-12-04",
    "start_time_ist": "10:22",
    "end_date": "2026-12-05",
    "end_time_ist": "11:48",
    "state": "उदय (Rise)",
    "source_start": "10:22 ए एम, दिसम्बर 04",
    "source_end": "11:48 ए एम, दिसम्बर 05"
  },
  {
    "nak": "Swati",
    "start_date": "2026-12-05",
    "start_time_ist": "11:48",
    "end_date": "2026-12-06",
    "end_time_ist": "13:38",
    "state": "उदय (Rise)",
    "source_start": "11:48 ए एम, दिसम्बर 05",
    "source_end": "01:38 पी एम, दिसम्बर 06"
  },
  {
    "nak": "Vishakha",
    "start_date": "2026-12-06",
    "start_time_ist": "13:38",
    "end_date": "2026-12-07",
    "end_time_ist": "15:48",
    "state": "उदय (Rise)",
    "source_start": "01:38 पी एम, दिसम्बर 06",
    "source_end": "03:48 पी एम, दिसम्बर 07"
  },
  {
    "nak": "Anuradha",
    "start_date": "2026-12-07",
    "start_time_ist": "15:48",
    "end_date": "2026-12-08",
    "end_time_ist": "18:16",
    "state": "उदय (Rise)",
    "source_start": "03:48 पी एम, दिसम्बर 07",
    "source_end": "06:16 पी एम, दिसम्बर 08"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2026-12-08",
    "start_time_ist": "18:16",
    "end_date": "2026-12-09",
    "end_time_ist": "21:00",
    "state": "उदय (Rise)",
    "source_start": "06:16 पी एम, दिसम्बर 08",
    "source_end": "09:00 पी एम, दिसम्बर 09"
  },
  {
    "nak": "Mula",
    "start_date": "2026-12-09",
    "start_time_ist": "21:00",
    "end_date": "2026-12-10",
    "end_time_ist": "23:58",
    "state": "उदय (Rise)",
    "source_start": "09:00 पी एम, दिसम्बर 09",
    "source_end": "11:58 पी एम, दिसम्बर 10"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2026-12-10",
    "start_time_ist": "23:58",
    "end_date": "2026-12-12",
    "end_time_ist": "03:04",
    "state": "उदय (Rise)",
    "source_start": "11:58 पी एम, दिसम्बर 10",
    "source_end": "03:04 ए एम, दिसम्बर 12"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2026-12-12",
    "start_time_ist": "03:04",
    "end_date": "2026-12-13",
    "end_time_ist": "06:12",
    "state": "उदय (Rise)",
    "source_start": "03:04 ए एम, दिसम्बर 12",
    "source_end": "06:12 ए एम, दिसम्बर 13"
  },
  {
    "nak": "Shravana",
    "start_date": "2026-12-13",
    "start_time_ist": "06:12",
    "end_date": "2026-12-14",
    "end_time_ist": "09:12",
    "state": "उदय (Rise)",
    "source_start": "06:12 ए एम, दिसम्बर 13",
    "source_end": "09:12 ए एम, दिसम्बर 14"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2026-12-14",
    "start_time_ist": "09:12",
    "end_date": "2026-12-15",
    "end_time_ist": "11:52",
    "state": "उदय (Rise)",
    "source_start": "09:12 ए एम, दिसम्बर 14",
    "source_end": "11:52 ए एम, दिसम्बर 15"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2026-12-15",
    "start_time_ist": "11:52",
    "end_date": "2026-12-16",
    "end_time_ist": "14:02",
    "state": "उदय (Rise)",
    "source_start": "11:52 ए एम, दिसम्बर 15",
    "source_end": "02:02 पी एम, दिसम्बर 16"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2026-12-16",
    "start_time_ist": "14:02",
    "end_date": "2026-12-17",
    "end_time_ist": "15:30",
    "state": "उदय (Rise)",
    "source_start": "02:02 पी एम, दिसम्बर 16",
    "source_end": "03:30 पी एम, दिसम्बर 17"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2026-12-17",
    "start_time_ist": "15:30",
    "end_date": "2026-12-18",
    "end_time_ist": "16:10",
    "state": "उदय (Rise)",
    "source_start": "03:30 पी एम, दिसम्बर 17",
    "source_end": "04:10 पी एम, दिसम्बर 18"
  },
  {
    "nak": "Revati",
    "start_date": "2026-12-18",
    "start_time_ist": "16:10",
    "end_date": "2026-12-19",
    "end_time_ist": "15:58",
    "state": "उदय (Rise)",
    "source_start": "04:10 पी एम, दिसम्बर 18",
    "source_end": "03:58 पी एम, दिसम्बर 19"
  },
  {
    "nak": "Ashwini",
    "start_date": "2026-12-19",
    "start_time_ist": "15:58",
    "end_date": "2026-12-20",
    "end_time_ist": "14:55",
    "state": "उदय (Rise)",
    "source_start": "03:58 पी एम, दिसम्बर 19",
    "source_end": "02:55 पी एम, दिसम्बर 20"
  },
  {
    "nak": "Bharani",
    "start_date": "2026-12-20",
    "start_time_ist": "14:55",
    "end_date": "2026-12-21",
    "end_time_ist": "13:08",
    "state": "उदय (Rise)",
    "source_start": "02:55 पी एम, दिसम्बर 20",
    "source_end": "01:08 पी एम, दिसम्बर 21"
  },
  {
    "nak": "Krittika",
    "start_date": "2026-12-21",
    "start_time_ist": "13:08",
    "end_date": "2026-12-22",
    "end_time_ist": "10:45",
    "state": "उदय (Rise)",
    "source_start": "01:08 पी एम, दिसम्बर 21",
    "source_end": "10:45 ए एम, दिसम्बर 22"
  },
  {
    "nak": "Rohini",
    "start_date": "2026-12-22",
    "start_time_ist": "10:45",
    "end_date": "2026-12-23",
    "end_time_ist": "07:56",
    "state": "उदय (Rise)",
    "source_start": "10:45 ए एम, दिसम्बर 22",
    "source_end": "07:56 ए एम, दिसम्बर 23"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2026-12-23",
    "start_time_ist": "07:56",
    "end_date": "2026-12-24",
    "end_time_ist": "04:53",
    "state": "उदय (Rise)",
    "source_start": "07:56 ए एम, दिसम्बर 23",
    "source_end": "04:53 ए एम, दिसम्बर 24"
  },
  {
    "nak": "Ardra",
    "start_date": "2026-12-24",
    "start_time_ist": "04:53",
    "end_date": "2026-12-25",
    "end_time_ist": "01:47",
    "state": "उदय (Rise)",
    "source_start": "04:53 ए एम, दिसम्बर 24",
    "source_end": "01:47 ए एम, दिसम्बर 25"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2026-12-25",
    "start_time_ist": "01:47",
    "end_date": "2026-12-25",
    "end_time_ist": "22:50",
    "state": "उदय (Rise)",
    "source_start": "01:47 ए एम, दिसम्बर 25",
    "source_end": "10:50 पी एम, दिसम्बर 25"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-12-25",
    "start_time_ist": "22:50",
    "end_date": "2026-12-26",
    "end_time_ist": "20:12",
    "state": "उदय (Rise)",
    "source_start": "10:50 पी एम, दिसम्बर 25",
    "source_end": "08:12 पी एम, दिसम्बर 26"
  },
  {
    "nak": "Pushya",
    "start_date": "2026-12-25",
    "start_time_ist": "22:50",
    "end_date": "2026-12-26",
    "end_time_ist": "20:12",
    "state": "उदय (Rise)",
    "source_start": "10:50 पी एम, दिसम्बर 25",
    "source_end": "08:12 पी एम, दिसम्बर 26"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2026-12-26",
    "start_time_ist": "20:12",
    "end_date": "2026-12-27",
    "end_time_ist": "18:04",
    "state": "उदय (Rise)",
    "source_start": "08:12 पी एम, दिसम्बर 26",
    "source_end": "06:04 पी एम, दिसम्बर 27"
  },
  {
    "nak": "Magha",
    "start_date": "2026-12-27",
    "start_time_ist": "18:04",
    "end_date": "2026-12-28",
    "end_time_ist": "16:32",
    "state": "उदय (Rise)",
    "source_start": "06:04 पी एम, दिसम्बर 27",
    "source_end": "04:32 पी एम, दिसम्बर 28"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2026-12-28",
    "start_time_ist": "16:32",
    "end_date": "2026-12-29",
    "end_time_ist": "15:43",
    "state": "उदय (Rise)",
    "source_start": "04:32 पी एम, दिसम्बर 28",
    "source_end": "03:43 पी एम, दिसम्बर 29"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2026-12-29",
    "start_time_ist": "15:43",
    "end_date": "2026-12-30",
    "end_time_ist": "15:36",
    "state": "उदय (Rise)",
    "source_start": "03:43 पी एम, दिसम्बर 29",
    "source_end": "03:36 पी एम, दिसम्बर 30"
  },
  {
    "nak": "Hasta",
    "start_date": "2026-12-30",
    "start_time_ist": "15:36",
    "end_date": "2026-12-31",
    "end_time_ist": "16:13",
    "state": "उदय (Rise)",
    "source_start": "03:36 पी एम, दिसम्बर 30",
    "source_end": "04:13 पी एम, दिसम्बर 31"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-12-31",
    "start_time_ist": "16:13",
    "end_date": "2027-01-01",
    "end_time_ist": "17:29",
    "state": "उदय (Rise)",
    "source_start": "04:13 पी एम, दिसम्बर 31",
    "source_end": "05:29 पी एम, जनवरी 01"
  },
  {
    "nak": "Chitra",
    "start_date": "2026-12-31",
    "start_time_ist": "16:13",
    "end_date": "2027-01-01",
    "end_time_ist": "17:29",
    "state": "उदय (Rise)",
    "source_start": "04:13 पी एम, दिसम्बर 31",
    "source_end": "05:29 पी एम, जनवरी 01"
  },
  {
    "nak": "Swati",
    "start_date": "2027-01-01",
    "start_time_ist": "17:29",
    "end_date": "2027-01-02",
    "end_time_ist": "19:19",
    "state": "उदय (Rise)",
    "source_start": "05:29 पी एम, जनवरी 01",
    "source_end": "07:19 पी एम, जनवरी 02"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-01-02",
    "start_time_ist": "19:19",
    "end_date": "2027-01-03",
    "end_time_ist": "21:37",
    "state": "उदय (Rise)",
    "source_start": "07:19 पी एम, जनवरी 02",
    "source_end": "09:37 पी एम, जनवरी 03"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-01-03",
    "start_time_ist": "21:37",
    "end_date": "2027-01-05",
    "end_time_ist": "00:14",
    "state": "उदय (Rise)",
    "source_start": "09:37 पी एम, जनवरी 03",
    "source_end": "12:14 ए एम, जनवरी 05"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-01-05",
    "start_time_ist": "00:14",
    "end_date": "2027-01-06",
    "end_time_ist": "03:07",
    "state": "उदय (Rise)",
    "source_start": "12:14 ए एम, जनवरी 05",
    "source_end": "03:07 ए एम, जनवरी 06"
  },
  {
    "nak": "Mula",
    "start_date": "2027-01-06",
    "start_time_ist": "03:07",
    "end_date": "2027-01-07",
    "end_time_ist": "06:08",
    "state": "उदय (Rise)",
    "source_start": "03:07 ए एम, जनवरी 06",
    "source_end": "06:08 ए एम, जनवरी 07"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-01-07",
    "start_time_ist": "06:08",
    "end_date": "2027-01-08",
    "end_time_ist": "09:12",
    "state": "उदय (Rise)",
    "source_start": "06:08 ए एम, जनवरी 07",
    "source_end": "09:12 ए एम, जनवरी 08"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-01-08",
    "start_time_ist": "09:12",
    "end_date": "2027-01-09",
    "end_time_ist": "12:15",
    "state": "उदय (Rise)",
    "source_start": "09:12 ए एम, जनवरी 08",
    "source_end": "12:15 पी एम, जनवरी 09"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-01-09",
    "start_time_ist": "12:15",
    "end_date": "2027-01-10",
    "end_time_ist": "15:11",
    "state": "उदय (Rise)",
    "source_start": "12:15 पी एम, जनवरी 09",
    "source_end": "03:11 पी एम, जनवरी 10"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-01-10",
    "start_time_ist": "15:11",
    "end_date": "2027-01-11",
    "end_time_ist": "17:53",
    "state": "उदय (Rise)",
    "source_start": "03:11 पी एम, जनवरी 10",
    "source_end": "05:53 पी एम, जनवरी 11"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-01-11",
    "start_time_ist": "17:53",
    "end_date": "2027-01-12",
    "end_time_ist": "20:13",
    "state": "उदय (Rise)",
    "source_start": "05:53 पी एम, जनवरी 11",
    "source_end": "08:13 पी एम, जनवरी 12"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-01-12",
    "start_time_ist": "20:13",
    "end_date": "2027-01-13",
    "end_time_ist": "22:04",
    "state": "उदय (Rise)",
    "source_start": "08:13 पी एम, जनवरी 12",
    "source_end": "10:04 पी एम, जनवरी 13"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-01-13",
    "start_time_ist": "22:04",
    "end_date": "2027-01-14",
    "end_time_ist": "23:18",
    "state": "उदय (Rise)",
    "source_start": "10:04 पी एम, जनवरी 13",
    "source_end": "11:18 पी एम, जनवरी 14"
  },
  {
    "nak": "Revati",
    "start_date": "2027-01-14",
    "start_time_ist": "23:18",
    "end_date": "2027-01-15",
    "end_time_ist": "23:51",
    "state": "उदय (Rise)",
    "source_start": "11:18 पी एम, जनवरी 14",
    "source_end": "11:51 पी एम, जनवरी 15"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-01-15",
    "start_time_ist": "23:51",
    "end_date": "2027-01-16",
    "end_time_ist": "23:38",
    "state": "उदय (Rise)",
    "source_start": "11:51 पी एम, जनवरी 15",
    "source_end": "11:38 पी एम, जनवरी 16"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-01-16",
    "start_time_ist": "23:38",
    "end_date": "2027-01-17",
    "end_time_ist": "22:42",
    "state": "उदय (Rise)",
    "source_start": "11:38 पी एम, जनवरी 16",
    "source_end": "10:42 पी एम, जनवरी 17"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-01-17",
    "start_time_ist": "22:42",
    "end_date": "2027-01-18",
    "end_time_ist": "21:05",
    "state": "उदय (Rise)",
    "source_start": "10:42 पी एम, जनवरी 17",
    "source_end": "09:05 पी एम, जनवरी 18"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-01-18",
    "start_time_ist": "21:05",
    "end_date": "2027-01-19",
    "end_time_ist": "18:54",
    "state": "उदय (Rise)",
    "source_start": "09:05 पी एम, जनवरी 18",
    "source_end": "06:54 पी एम, जनवरी 19"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-01-19",
    "start_time_ist": "18:54",
    "end_date": "2027-01-20",
    "end_time_ist": "16:17",
    "state": "उदय (Rise)",
    "source_start": "06:54 पी एम, जनवरी 19",
    "source_end": "04:17 पी एम, जनवरी 20"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-01-20",
    "start_time_ist": "16:17",
    "end_date": "2027-01-21",
    "end_time_ist": "13:23",
    "state": "उदय (Rise)",
    "source_start": "04:17 पी एम, जनवरी 20",
    "source_end": "01:23 पी एम, जनवरी 21"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-01-21",
    "start_time_ist": "13:23",
    "end_date": "2027-01-22",
    "end_time_ist": "10:24",
    "state": "उदय (Rise)",
    "source_start": "01:23 पी एम, जनवरी 21",
    "source_end": "10:24 ए एम, जनवरी 22"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-01-22",
    "start_time_ist": "10:24",
    "end_date": "2027-01-23",
    "end_time_ist": "07:31",
    "state": "उदय (Rise)",
    "source_start": "10:24 ए एम, जनवरी 22",
    "source_end": "07:31 ए एम, जनवरी 23"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-01-23",
    "start_time_ist": "07:31",
    "end_date": "2027-01-24",
    "end_time_ist": "04:53",
    "state": "उदय (Rise)",
    "source_start": "07:31 ए एम, जनवरी 23",
    "source_end": "04:53 ए एम, जनवरी 24"
  },
  {
    "nak": "Magha",
    "start_date": "2027-01-24",
    "start_time_ist": "04:53",
    "end_date": "2027-01-25",
    "end_time_ist": "02:40",
    "state": "उदय (Rise)",
    "source_start": "04:53 ए एम, जनवरी 24",
    "source_end": "02:40 ए एम, जनवरी 25"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-01-25",
    "start_time_ist": "02:40",
    "end_date": "2027-01-26",
    "end_time_ist": "01:03",
    "state": "उदय (Rise)",
    "source_start": "02:40 ए एम, जनवरी 25",
    "source_end": "01:03 ए एम, जनवरी 26"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-01-26",
    "start_time_ist": "01:03",
    "end_date": "2027-01-27",
    "end_time_ist": "00:06",
    "state": "उदय (Rise)",
    "source_start": "01:03 ए एम, जनवरी 26",
    "source_end": "12:06 ए एम, जनवरी 27"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-01-27",
    "start_time_ist": "00:06",
    "end_date": "2027-01-27",
    "end_time_ist": "23:56",
    "state": "उदय (Rise)",
    "source_start": "12:06 ए एम, जनवरी 27",
    "source_end": "11:56 पी एम, जनवरी 27"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-01-27",
    "start_time_ist": "23:56",
    "end_date": "2027-01-29",
    "end_time_ist": "00:32",
    "state": "उदय (Rise)",
    "source_start": "11:56 पी एम, जनवरी 27",
    "source_end": "12:32 ए एम, जनवरी 29"
  },
  {
    "nak": "Swati",
    "start_date": "2027-01-29",
    "start_time_ist": "00:32",
    "end_date": "2027-01-30",
    "end_time_ist": "01:54",
    "state": "उदय (Rise)",
    "source_start": "12:32 ए एम, जनवरी 29",
    "source_end": "01:54 ए एम, जनवरी 30"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-01-30",
    "start_time_ist": "01:54",
    "end_date": "2027-01-31",
    "end_time_ist": "03:55",
    "state": "उदय (Rise)",
    "source_start": "01:54 ए एम, जनवरी 30",
    "source_end": "03:55 ए एम, जनवरी 31"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-01-31",
    "start_time_ist": "03:55",
    "end_date": "2027-02-01",
    "end_time_ist": "06:27",
    "state": "उदय (Rise)",
    "source_start": "03:55 ए एम, जनवरी 31",
    "source_end": "06:27 ए एम, फरवरी 01"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-02-01",
    "start_time_ist": "06:27",
    "end_date": "2027-02-02",
    "end_time_ist": "09:21",
    "state": "उदय (Rise)",
    "source_start": "06:27 ए एम, फरवरी 01",
    "source_end": "09:21 ए एम, फरवरी 02"
  },
  {
    "nak": "Mula",
    "start_date": "2027-02-02",
    "start_time_ist": "09:21",
    "end_date": "2027-02-03",
    "end_time_ist": "12:26",
    "state": "उदय (Rise)",
    "source_start": "09:21 ए एम, फरवरी 02",
    "source_end": "12:26 पी एम, फरवरी 03"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-02-03",
    "start_time_ist": "12:26",
    "end_date": "2027-02-04",
    "end_time_ist": "15:32",
    "state": "उदय (Rise)",
    "source_start": "12:26 पी एम, फरवरी 03",
    "source_end": "03:32 पी एम, फरवरी 04"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-02-04",
    "start_time_ist": "15:32",
    "end_date": "2027-02-05",
    "end_time_ist": "18:32",
    "state": "उदय (Rise)",
    "source_start": "03:32 पी एम, फरवरी 04",
    "source_end": "06:32 पी एम, फरवरी 05"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-02-05",
    "start_time_ist": "18:32",
    "end_date": "2027-02-06",
    "end_time_ist": "21:19",
    "state": "उदय (Rise)",
    "source_start": "06:32 पी एम, फरवरी 05",
    "source_end": "09:19 पी एम, फरवरी 06"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-02-06",
    "start_time_ist": "21:19",
    "end_date": "2027-02-07",
    "end_time_ist": "23:48",
    "state": "उदय (Rise)",
    "source_start": "09:19 पी एम, फरवरी 06",
    "source_end": "11:48 पी एम, फरवरी 07"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-02-07",
    "start_time_ist": "23:48",
    "end_date": "2027-02-09",
    "end_time_ist": "01:56",
    "state": "उदय (Rise)",
    "source_start": "11:48 पी एम, फरवरी 07",
    "source_end": "01:56 ए एम, फरवरी 09"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-02-09",
    "start_time_ist": "01:56",
    "end_date": "2027-02-10",
    "end_time_ist": "03:40",
    "state": "उदय (Rise)",
    "source_start": "01:56 ए एम, फरवरी 09",
    "source_end": "03:40 ए एम, फरवरी 10"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-02-10",
    "start_time_ist": "03:40",
    "end_date": "2027-02-11",
    "end_time_ist": "04:56",
    "state": "उदय (Rise)",
    "source_start": "03:40 ए एम, फरवरी 10",
    "source_end": "04:56 ए एम, फरवरी 11"
  },
  {
    "nak": "Revati",
    "start_date": "2027-02-11",
    "start_time_ist": "04:56",
    "end_date": "2027-02-12",
    "end_time_ist": "05:42",
    "state": "उदय (Rise)",
    "source_start": "04:56 ए एम, फरवरी 11",
    "source_end": "05:42 ए एम, फरवरी 12"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-02-12",
    "start_time_ist": "05:42",
    "end_date": "2027-02-13",
    "end_time_ist": "05:56",
    "state": "उदय (Rise)",
    "source_start": "05:42 ए एम, फरवरी 12",
    "source_end": "05:56 ए एम, फरवरी 13"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-02-13",
    "start_time_ist": "05:56",
    "end_date": "2027-02-14",
    "end_time_ist": "05:37",
    "state": "उदय (Rise)",
    "source_start": "05:56 ए एम, फरवरी 13",
    "source_end": "05:37 ए एम, फरवरी 14"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-02-14",
    "start_time_ist": "05:37",
    "end_date": "2027-02-15",
    "end_time_ist": "04:46",
    "state": "उदय (Rise)",
    "source_start": "05:37 ए एम, फरवरी 14",
    "source_end": "04:46 ए एम, फरवरी 15"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-02-15",
    "start_time_ist": "04:46",
    "end_date": "2027-02-16",
    "end_time_ist": "03:25",
    "state": "उदय (Rise)",
    "source_start": "04:46 ए एम, फरवरी 15",
    "source_end": "03:25 ए एम, फरवरी 16"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-02-16",
    "start_time_ist": "03:25",
    "end_date": "2027-02-17",
    "end_time_ist": "01:37",
    "state": "उदय (Rise)",
    "source_start": "03:25 ए एम, फरवरी 16",
    "source_end": "01:37 ए एम, फरवरी 17"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-02-17",
    "start_time_ist": "01:37",
    "end_date": "2027-02-17",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "01:37 ए एम, फरवरी 17",
    "source_end": "11:29 पी एम, फरवरी 17"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-02-17",
    "start_time_ist": "23:29",
    "end_date": "2027-02-18",
    "end_time_ist": "21:05",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, फरवरी 17",
    "source_end": "09:05 पी एम, फरवरी 18"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-02-18",
    "start_time_ist": "21:05",
    "end_date": "2027-02-19",
    "end_time_ist": "18:35",
    "state": "उदय (Rise)",
    "source_start": "09:05 पी एम, फरवरी 18",
    "source_end": "06:35 पी एम, फरवरी 19"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-02-19",
    "start_time_ist": "18:35",
    "end_date": "2027-02-20",
    "end_time_ist": "16:07",
    "state": "उदय (Rise)",
    "source_start": "06:35 पी एम, फरवरी 19",
    "source_end": "04:07 पी एम, फरवरी 20"
  },
  {
    "nak": "Magha",
    "start_date": "2027-02-20",
    "start_time_ist": "16:07",
    "end_date": "2027-02-21",
    "end_time_ist": "13:50",
    "state": "उदय (Rise)",
    "source_start": "04:07 पी एम, फरवरी 20",
    "source_end": "01:50 पी एम, फरवरी 21"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-02-21",
    "start_time_ist": "13:50",
    "end_date": "2027-02-22",
    "end_time_ist": "11:54",
    "state": "उदय (Rise)",
    "source_start": "01:50 पी एम, फरवरी 21",
    "source_end": "11:54 ए एम, फरवरी 22"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-02-22",
    "start_time_ist": "11:54",
    "end_date": "2027-02-23",
    "end_time_ist": "10:28",
    "state": "उदय (Rise)",
    "source_start": "11:54 ए एम, फरवरी 22",
    "source_end": "10:28 ए एम, फरवरी 23"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-02-23",
    "start_time_ist": "10:28",
    "end_date": "2027-02-24",
    "end_time_ist": "09:38",
    "state": "उदय (Rise)",
    "source_start": "10:28 ए एम, फरवरी 23",
    "source_end": "09:38 ए एम, फरवरी 24"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-02-24",
    "start_time_ist": "09:38",
    "end_date": "2027-02-25",
    "end_time_ist": "09:32",
    "state": "उदय (Rise)",
    "source_start": "09:38 ए एम, फरवरी 24",
    "source_end": "09:32 ए एम, फरवरी 25"
  },
  {
    "nak": "Swati",
    "start_date": "2027-02-25",
    "start_time_ist": "09:32",
    "end_date": "2027-02-26",
    "end_time_ist": "10:13",
    "state": "उदय (Rise)",
    "source_start": "09:32 ए एम, फरवरी 25",
    "source_end": "10:13 ए एम, फरवरी 26"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-02-26",
    "start_time_ist": "10:13",
    "end_date": "2027-02-27",
    "end_time_ist": "11:39",
    "state": "उदय (Rise)",
    "source_start": "10:13 ए एम, फरवरी 26",
    "source_end": "11:39 ए एम, फरवरी 27"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-02-27",
    "start_time_ist": "11:39",
    "end_date": "2027-02-28",
    "end_time_ist": "13:47",
    "state": "उदय (Rise)",
    "source_start": "11:39 ए एम, फरवरी 27",
    "source_end": "01:47 पी एम, फरवरी 28"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-02-28",
    "start_time_ist": "13:47",
    "end_date": "2027-03-01",
    "end_time_ist": "16:27",
    "state": "उदय (Rise)",
    "source_start": "01:47 पी एम, फरवरी 28",
    "source_end": "04:27 पी एम, मार्च 01"
  },
  {
    "nak": "Mula",
    "start_date": "2027-03-01",
    "start_time_ist": "16:27",
    "end_date": "2027-03-02",
    "end_time_ist": "19:27",
    "state": "उदय (Rise)",
    "source_start": "04:27 पी एम, मार्च 01",
    "source_end": "07:27 पी एम, मार्च 02"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-03-02",
    "start_time_ist": "19:27",
    "end_date": "2027-03-03",
    "end_time_ist": "22:34",
    "state": "उदय (Rise)",
    "source_start": "07:27 पी एम, मार्च 02",
    "source_end": "10:34 पी एम, मार्च 03"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-03-03",
    "start_time_ist": "22:34",
    "end_date": "2027-03-05",
    "end_time_ist": "01:35",
    "state": "उदय (Rise)",
    "source_start": "10:34 पी एम, मार्च 03",
    "source_end": "01:35 ए एम, मार्च 05"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-03-05",
    "start_time_ist": "01:35",
    "end_date": "2027-03-06",
    "end_time_ist": "04:20",
    "state": "उदय (Rise)",
    "source_start": "01:35 ए एम, मार्च 05",
    "source_end": "04:20 ए एम, मार्च 06"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-03-06",
    "start_time_ist": "04:20",
    "end_date": "2027-03-07",
    "end_time_ist": "06:41",
    "state": "उदय (Rise)",
    "source_start": "04:20 ए एम, मार्च 06",
    "source_end": "06:41 ए एम, मार्च 07"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-03-07",
    "start_time_ist": "06:41",
    "end_date": "2027-03-08",
    "end_time_ist": "08:34",
    "state": "उदय (Rise)",
    "source_start": "06:41 ए एम, मार्च 07",
    "source_end": "08:34 ए एम, मार्च 08"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-03-08",
    "start_time_ist": "08:34",
    "end_date": "2027-03-09",
    "end_time_ist": "09:58",
    "state": "उदय (Rise)",
    "source_start": "08:34 ए एम, मार्च 08",
    "source_end": "09:58 ए एम, मार्च 09"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-03-09",
    "start_time_ist": "09:58",
    "end_date": "2027-03-10",
    "end_time_ist": "10:52",
    "state": "उदय (Rise)",
    "source_start": "09:58 ए एम, मार्च 09",
    "source_end": "10:52 ए एम, मार्च 10"
  },
  {
    "nak": "Revati",
    "start_date": "2027-03-10",
    "start_time_ist": "10:52",
    "end_date": "2027-03-11",
    "end_time_ist": "11:19",
    "state": "उदय (Rise)",
    "source_start": "10:52 ए एम, मार्च 10",
    "source_end": "11:19 ए एम, मार्च 11"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-03-11",
    "start_time_ist": "11:19",
    "end_date": "2027-03-12",
    "end_time_ist": "11:22",
    "state": "उदय (Rise)",
    "source_start": "11:19 ए एम, मार्च 11",
    "source_end": "11:22 ए एम, मार्च 12"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-03-12",
    "start_time_ist": "11:22",
    "end_date": "2027-03-13",
    "end_time_ist": "11:02",
    "state": "उदय (Rise)",
    "source_start": "11:22 ए एम, मार्च 12",
    "source_end": "11:02 ए एम, मार्च 13"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-03-13",
    "start_time_ist": "11:02",
    "end_date": "2027-03-14",
    "end_time_ist": "10:23",
    "state": "उदय (Rise)",
    "source_start": "11:02 ए एम, मार्च 13",
    "source_end": "10:23 ए एम, मार्च 14"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-03-14",
    "start_time_ist": "10:23",
    "end_date": "2027-03-15",
    "end_time_ist": "09:26",
    "state": "उदय (Rise)",
    "source_start": "10:23 ए एम, मार्च 14",
    "source_end": "09:26 ए एम, मार्च 15"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-03-15",
    "start_time_ist": "09:26",
    "end_date": "2027-03-16",
    "end_time_ist": "08:12",
    "state": "उदय (Rise)",
    "source_start": "09:26 ए एम, मार्च 15",
    "source_end": "08:12 ए एम, मार्च 16"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-03-16",
    "start_time_ist": "08:12",
    "end_date": "2027-03-17",
    "end_time_ist": "06:45",
    "state": "उदय (Rise)",
    "source_start": "08:12 ए एम, मार्च 16",
    "source_end": "06:45 ए एम, मार्च 17"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-03-17",
    "start_time_ist": "06:45",
    "end_date": "2027-03-18",
    "end_time_ist": "05:07",
    "state": "उदय (Rise)",
    "source_start": "06:45 ए एम, मार्च 17",
    "source_end": "05:07 ए एम, मार्च 18"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-03-18",
    "start_time_ist": "05:07",
    "end_date": "2027-03-19",
    "end_time_ist": "03:21",
    "state": "उदय (Rise)",
    "source_start": "05:07 ए एम, मार्च 18",
    "source_end": "03:21 ए एम, मार्च 19"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-03-19",
    "start_time_ist": "03:21",
    "end_date": "2027-03-20",
    "end_time_ist": "01:31",
    "state": "उदय (Rise)",
    "source_start": "03:21 ए एम, मार्च 19",
    "source_end": "01:31 ए एम, मार्च 20"
  },
  {
    "nak": "Magha",
    "start_date": "2027-03-20",
    "start_time_ist": "01:31",
    "end_date": "2027-03-20",
    "end_time_ist": "23:44",
    "state": "उदय (Rise)",
    "source_start": "01:31 ए एम, मार्च 20",
    "source_end": "11:44 पी एम, मार्च 20"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-03-20",
    "start_time_ist": "23:44",
    "end_date": "2027-03-21",
    "end_time_ist": "22:06",
    "state": "उदय (Rise)",
    "source_start": "11:44 पी एम, मार्च 20",
    "source_end": "10:06 पी एम, मार्च 21"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-03-21",
    "start_time_ist": "22:06",
    "end_date": "2027-03-22",
    "end_time_ist": "20:45",
    "state": "उदय (Rise)",
    "source_start": "10:06 पी एम, मार्च 21",
    "source_end": "08:45 पी एम, मार्च 22"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-03-22",
    "start_time_ist": "20:45",
    "end_date": "2027-03-23",
    "end_time_ist": "19:49",
    "state": "उदय (Rise)",
    "source_start": "08:45 पी एम, मार्च 22",
    "source_end": "07:49 पी एम, मार्च 23"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-03-23",
    "start_time_ist": "19:49",
    "end_date": "2027-03-24",
    "end_time_ist": "19:25",
    "state": "उदय (Rise)",
    "source_start": "07:49 पी एम, मार्च 23",
    "source_end": "07:25 पी एम, मार्च 24"
  },
  {
    "nak": "Swati",
    "start_date": "2027-03-24",
    "start_time_ist": "19:25",
    "end_date": "2027-03-25",
    "end_time_ist": "19:39",
    "state": "उदय (Rise)",
    "source_start": "07:25 पी एम, मार्च 24",
    "source_end": "07:39 पी एम, मार्च 25"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-03-25",
    "start_time_ist": "19:39",
    "end_date": "2027-03-26",
    "end_time_ist": "20:35",
    "state": "उदय (Rise)",
    "source_start": "07:39 पी एम, मार्च 25",
    "source_end": "08:35 पी एम, मार्च 26"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-03-26",
    "start_time_ist": "20:35",
    "end_date": "2027-03-27",
    "end_time_ist": "22:14",
    "state": "उदय (Rise)",
    "source_start": "08:35 पी एम, मार्च 26",
    "source_end": "10:14 पी एम, मार्च 27"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-03-27",
    "start_time_ist": "22:14",
    "end_date": "2027-03-29",
    "end_time_ist": "00:31",
    "state": "उदय (Rise)",
    "source_start": "10:14 पी एम, मार्च 27",
    "source_end": "12:31 ए एम, मार्च 29"
  },
  {
    "nak": "Mula",
    "start_date": "2027-03-29",
    "start_time_ist": "00:31",
    "end_date": "2027-03-30",
    "end_time_ist": "03:18",
    "state": "उदय (Rise)",
    "source_start": "12:31 ए एम, मार्च 29",
    "source_end": "03:18 ए एम, मार्च 30"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-03-30",
    "start_time_ist": "03:18",
    "end_date": "2027-03-31",
    "end_time_ist": "06:21",
    "state": "उदय (Rise)",
    "source_start": "03:18 ए एम, मार्च 30",
    "source_end": "06:21 ए एम, मार्च 31"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-03-31",
    "start_time_ist": "06:21",
    "end_date": "2027-04-01",
    "end_time_ist": "09:25",
    "state": "उदय (Rise)",
    "source_start": "06:21 ए एम, मार्च 31",
    "source_end": "09:25 ए एम, अप्रैल 01"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-04-01",
    "start_time_ist": "09:25",
    "end_date": "2027-04-02",
    "end_time_ist": "12:16",
    "state": "उदय (Rise)",
    "source_start": "09:25 ए एम, अप्रैल 01",
    "source_end": "12:16 पी एम, अप्रैल 02"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-04-02",
    "start_time_ist": "12:16",
    "end_date": "2027-04-03",
    "end_time_ist": "14:41",
    "state": "उदय (Rise)",
    "source_start": "12:16 पी एम, अप्रैल 02",
    "source_end": "02:41 पी एम, अप्रैल 03"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-04-03",
    "start_time_ist": "14:41",
    "end_date": "2027-04-04",
    "end_time_ist": "16:33",
    "state": "उदय (Rise)",
    "source_start": "02:41 पी एम, अप्रैल 03",
    "source_end": "04:33 पी एम, अप्रैल 04"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-04-04",
    "start_time_ist": "16:33",
    "end_date": "2027-04-05",
    "end_time_ist": "17:46",
    "state": "उदय (Rise)",
    "source_start": "04:33 पी एम, अप्रैल 04",
    "source_end": "05:46 पी एम, अप्रैल 05"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-04-05",
    "start_time_ist": "17:46",
    "end_date": "2027-04-06",
    "end_time_ist": "18:23",
    "state": "उदय (Rise)",
    "source_start": "05:46 पी एम, अप्रैल 05",
    "source_end": "06:23 पी एम, अप्रैल 06"
  },
  {
    "nak": "Revati",
    "start_date": "2027-04-06",
    "start_time_ist": "18:23",
    "end_date": "2027-04-07",
    "end_time_ist": "18:25",
    "state": "उदय (Rise)",
    "source_start": "06:23 पी एम, अप्रैल 06",
    "source_end": "06:25 पी एम, अप्रैल 07"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-04-07",
    "start_time_ist": "18:25",
    "end_date": "2027-04-08",
    "end_time_ist": "17:59",
    "state": "उदय (Rise)",
    "source_start": "06:25 पी एम, अप्रैल 07",
    "source_end": "05:59 पी एम, अप्रैल 08"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-04-08",
    "start_time_ist": "17:59",
    "end_date": "2027-04-09",
    "end_time_ist": "17:11",
    "state": "उदय (Rise)",
    "source_start": "05:59 पी एम, अप्रैल 08",
    "source_end": "05:11 पी एम, अप्रैल 09"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-04-09",
    "start_time_ist": "17:11",
    "end_date": "2027-04-10",
    "end_time_ist": "16:07",
    "state": "उदय (Rise)",
    "source_start": "05:11 पी एम, अप्रैल 09",
    "source_end": "04:07 पी एम, अप्रैल 10"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-04-10",
    "start_time_ist": "16:07",
    "end_date": "2027-04-11",
    "end_time_ist": "14:53",
    "state": "उदय (Rise)",
    "source_start": "04:07 पी एम, अप्रैल 10",
    "source_end": "02:53 पी एम, अप्रैल 11"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-04-11",
    "start_time_ist": "14:53",
    "end_date": "2027-04-12",
    "end_time_ist": "13:34",
    "state": "उदय (Rise)",
    "source_start": "02:53 पी एम, अप्रैल 11",
    "source_end": "01:34 पी एम, अप्रैल 12"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-04-12",
    "start_time_ist": "13:34",
    "end_date": "2027-04-13",
    "end_time_ist": "12:12",
    "state": "उदय (Rise)",
    "source_start": "01:34 पी एम, अप्रैल 12",
    "source_end": "12:12 पी एम, अप्रैल 13"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-04-13",
    "start_time_ist": "12:12",
    "end_date": "2027-04-14",
    "end_time_ist": "10:52",
    "state": "उदय (Rise)",
    "source_start": "12:12 पी एम, अप्रैल 13",
    "source_end": "10:52 ए एम, अप्रैल 14"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-04-14",
    "start_time_ist": "10:52",
    "end_date": "2027-04-15",
    "end_time_ist": "09:33",
    "state": "उदय (Rise)",
    "source_start": "10:52 ए एम, अप्रैल 14",
    "source_end": "09:33 ए एम, अप्रैल 15"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-04-15",
    "start_time_ist": "09:33",
    "end_date": "2027-04-16",
    "end_time_ist": "08:18",
    "state": "उदय (Rise)",
    "source_start": "09:33 ए एम, अप्रैल 15",
    "source_end": "08:18 ए एम, अप्रैल 16"
  },
  {
    "nak": "Magha",
    "start_date": "2027-04-16",
    "start_time_ist": "08:18",
    "end_date": "2027-04-17",
    "end_time_ist": "07:08",
    "state": "उदय (Rise)",
    "source_start": "08:18 ए एम, अप्रैल 16",
    "source_end": "07:08 ए एम, अप्रैल 17"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-04-17",
    "start_time_ist": "07:08",
    "end_date": "2027-04-18",
    "end_time_ist": "06:05",
    "state": "उदय (Rise)",
    "source_start": "07:08 ए एम, अप्रैल 17",
    "source_end": "06:05 ए एम, अप्रैल 18"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-04-18",
    "start_time_ist": "06:05",
    "end_date": "2027-04-19",
    "end_time_ist": "05:15",
    "state": "उदय (Rise)",
    "source_start": "06:05 ए एम, अप्रैल 18",
    "source_end": "05:15 ए एम, अप्रैल 19"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-04-19",
    "start_time_ist": "05:15",
    "end_date": "2027-04-20",
    "end_time_ist": "04:40",
    "state": "उदय (Rise)",
    "source_start": "05:15 ए एम, अप्रैल 19",
    "source_end": "04:40 ए एम, अप्रैल 20"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-04-20",
    "start_time_ist": "04:40",
    "end_date": "2027-04-21",
    "end_time_ist": "04:28",
    "state": "उदय (Rise)",
    "source_start": "04:40 ए एम, अप्रैल 20",
    "source_end": "04:28 ए एम, अप्रैल 21"
  },
  {
    "nak": "Swati",
    "start_date": "2027-04-21",
    "start_time_ist": "04:28",
    "end_date": "2027-04-22",
    "end_time_ist": "04:43",
    "state": "उदय (Rise)",
    "source_start": "04:28 ए एम, अप्रैल 21",
    "source_end": "04:43 ए एम, अप्रैल 22"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-04-22",
    "start_time_ist": "04:43",
    "end_date": "2027-04-23",
    "end_time_ist": "05:32",
    "state": "उदय (Rise)",
    "source_start": "04:43 ए एम, अप्रैल 22",
    "source_end": "05:32 ए एम, अप्रैल 23"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-04-23",
    "start_time_ist": "05:32",
    "end_date": "2027-04-24",
    "end_time_ist": "06:56",
    "state": "उदय (Rise)",
    "source_start": "05:32 ए एम, अप्रैल 23",
    "source_end": "06:56 ए एम, अप्रैल 24"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-04-24",
    "start_time_ist": "06:56",
    "end_date": "2027-04-25",
    "end_time_ist": "08:57",
    "state": "उदय (Rise)",
    "source_start": "06:56 ए एम, अप्रैल 24",
    "source_end": "08:57 ए एम, अप्रैल 25"
  },
  {
    "nak": "Mula",
    "start_date": "2027-04-25",
    "start_time_ist": "08:57",
    "end_date": "2027-04-26",
    "end_time_ist": "11:29",
    "state": "उदय (Rise)",
    "source_start": "08:57 ए एम, अप्रैल 25",
    "source_end": "11:29 ए एम, अप्रैल 26"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-04-26",
    "start_time_ist": "11:29",
    "end_date": "2027-04-27",
    "end_time_ist": "14:25",
    "state": "उदय (Rise)",
    "source_start": "11:29 ए एम, अप्रैल 26",
    "source_end": "02:25 पी एम, अप्रैल 27"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-04-27",
    "start_time_ist": "14:25",
    "end_date": "2027-04-28",
    "end_time_ist": "17:30",
    "state": "उदय (Rise)",
    "source_start": "02:25 पी एम, अप्रैल 27",
    "source_end": "05:30 पी एम, अप्रैल 28"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-04-28",
    "start_time_ist": "17:30",
    "end_date": "2027-04-29",
    "end_time_ist": "20:30",
    "state": "उदय (Rise)",
    "source_start": "05:30 पी एम, अप्रैल 28",
    "source_end": "08:30 पी एम, अप्रैल 29"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-04-29",
    "start_time_ist": "20:30",
    "end_date": "2027-04-30",
    "end_time_ist": "23:10",
    "state": "उदय (Rise)",
    "source_start": "08:30 पी एम, अप्रैल 29",
    "source_end": "11:10 पी एम, अप्रैल 30"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-04-30",
    "start_time_ist": "23:10",
    "end_date": "2027-05-02",
    "end_time_ist": "01:16",
    "state": "उदय (Rise)",
    "source_start": "11:10 पी एम, अप्रैल 30",
    "source_end": "01:16 ए एम, मई 02"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-05-02",
    "start_time_ist": "01:16",
    "end_date": "2027-05-03",
    "end_time_ist": "02:40",
    "state": "उदय (Rise)",
    "source_start": "01:16 ए एम, मई 02",
    "source_end": "02:40 ए एम, मई 03"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-05-03",
    "start_time_ist": "02:40",
    "end_date": "2027-05-04",
    "end_time_ist": "03:19",
    "state": "उदय (Rise)",
    "source_start": "02:40 ए एम, मई 03",
    "source_end": "03:19 ए एम, मई 04"
  },
  {
    "nak": "Revati",
    "start_date": "2027-05-04",
    "start_time_ist": "03:19",
    "end_date": "2027-05-05",
    "end_time_ist": "03:14",
    "state": "उदय (Rise)",
    "source_start": "03:19 ए एम, मई 04",
    "source_end": "03:14 ए एम, मई 05"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-05-05",
    "start_time_ist": "03:14",
    "end_date": "2027-05-06",
    "end_time_ist": "02:31",
    "state": "उदय (Rise)",
    "source_start": "03:14 ए एम, मई 05",
    "source_end": "02:31 ए एम, मई 06"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-05-06",
    "start_time_ist": "02:31",
    "end_date": "2027-05-07",
    "end_time_ist": "01:18",
    "state": "उदय (Rise)",
    "source_start": "02:31 ए एम, मई 06",
    "source_end": "01:18 ए एम, मई 07"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-05-07",
    "start_time_ist": "01:18",
    "end_date": "2027-05-07",
    "end_time_ist": "23:42",
    "state": "उदय (Rise)",
    "source_start": "01:18 ए एम, मई 07",
    "source_end": "11:42 पी एम, मई 07"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-05-07",
    "start_time_ist": "23:42",
    "end_date": "2027-05-08",
    "end_time_ist": "21:52",
    "state": "उदय (Rise)",
    "source_start": "11:42 पी एम, मई 07",
    "source_end": "09:52 पी एम, मई 08"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-05-08",
    "start_time_ist": "21:52",
    "end_date": "2027-05-09",
    "end_time_ist": "19:59",
    "state": "उदय (Rise)",
    "source_start": "09:52 पी एम, मई 08",
    "source_end": "07:59 पी एम, मई 09"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-05-09",
    "start_time_ist": "19:59",
    "end_date": "2027-05-10",
    "end_time_ist": "18:08",
    "state": "उदय (Rise)",
    "source_start": "07:59 पी एम, मई 09",
    "source_end": "06:08 पी एम, मई 10"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-05-10",
    "start_time_ist": "18:08",
    "end_date": "2027-05-11",
    "end_time_ist": "16:25",
    "state": "उदय (Rise)",
    "source_start": "06:08 पी एम, मई 10",
    "source_end": "04:25 पी एम, मई 11"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-05-11",
    "start_time_ist": "16:25",
    "end_date": "2027-05-12",
    "end_time_ist": "14:55",
    "state": "उदय (Rise)",
    "source_start": "04:25 पी एम, मई 11",
    "source_end": "02:55 पी एम, मई 12"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-05-12",
    "start_time_ist": "14:55",
    "end_date": "2027-05-13",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "02:55 पी एम, मई 12",
    "source_end": "01:40 पी एम, मई 13"
  },
  {
    "nak": "Magha",
    "start_date": "2027-05-13",
    "start_time_ist": "13:40",
    "end_date": "2027-05-14",
    "end_time_ist": "12:42",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, मई 13",
    "source_end": "12:42 पी एम, मई 14"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-05-14",
    "start_time_ist": "12:42",
    "end_date": "2027-05-15",
    "end_time_ist": "12:00",
    "state": "उदय (Rise)",
    "source_start": "12:42 पी एम, मई 14",
    "source_end": "12:00 पी एम, मई 15"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-05-15",
    "start_time_ist": "12:00",
    "end_date": "2027-05-16",
    "end_time_ist": "11:35",
    "state": "उदय (Rise)",
    "source_start": "12:00 पी एम, मई 15",
    "source_end": "11:35 ए एम, मई 16"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-05-16",
    "start_time_ist": "11:35",
    "end_date": "2027-05-17",
    "end_time_ist": "11:29",
    "state": "उदय (Rise)",
    "source_start": "11:35 ए एम, मई 16",
    "source_end": "11:29 ए एम, मई 17"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-05-17",
    "start_time_ist": "11:29",
    "end_date": "2027-05-18",
    "end_time_ist": "11:42",
    "state": "उदय (Rise)",
    "source_start": "11:29 ए एम, मई 17",
    "source_end": "11:42 ए एम, मई 18"
  },
  {
    "nak": "Swati",
    "start_date": "2027-05-18",
    "start_time_ist": "11:42",
    "end_date": "2027-05-19",
    "end_time_ist": "12:19",
    "state": "उदय (Rise)",
    "source_start": "11:42 ए एम, मई 18",
    "source_end": "12:19 पी एम, मई 19"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-05-19",
    "start_time_ist": "12:19",
    "end_date": "2027-05-20",
    "end_time_ist": "13:21",
    "state": "उदय (Rise)",
    "source_start": "12:19 पी एम, मई 19",
    "source_end": "01:21 पी एम, मई 20"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-05-20",
    "start_time_ist": "13:21",
    "end_date": "2027-05-21",
    "end_time_ist": "14:51",
    "state": "उदय (Rise)",
    "source_start": "01:21 पी एम, मई 20",
    "source_end": "02:51 पी एम, मई 21"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-05-21",
    "start_time_ist": "14:51",
    "end_date": "2027-05-22",
    "end_time_ist": "16:50",
    "state": "उदय (Rise)",
    "source_start": "02:51 पी एम, मई 21",
    "source_end": "04:50 पी एम, मई 22"
  },
  {
    "nak": "Mula",
    "start_date": "2027-05-22",
    "start_time_ist": "16:50",
    "end_date": "2027-05-23",
    "end_time_ist": "19:17",
    "state": "उदय (Rise)",
    "source_start": "04:50 पी एम, मई 22",
    "source_end": "07:17 पी एम, मई 23"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-05-23",
    "start_time_ist": "19:17",
    "end_date": "2027-05-24",
    "end_time_ist": "22:07",
    "state": "उदय (Rise)",
    "source_start": "07:17 पी एम, मई 23",
    "source_end": "10:07 पी एम, मई 24"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-05-24",
    "start_time_ist": "22:07",
    "end_date": "2027-05-26",
    "end_time_ist": "01:12",
    "state": "उदय (Rise)",
    "source_start": "10:07 पी एम, मई 24",
    "source_end": "01:12 ए एम, मई 26"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-05-26",
    "start_time_ist": "01:12",
    "end_date": "2027-05-27",
    "end_time_ist": "04:19",
    "state": "उदय (Rise)",
    "source_start": "01:12 ए एम, मई 26",
    "source_end": "04:19 ए एम, मई 27"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-05-27",
    "start_time_ist": "04:19",
    "end_date": "2027-05-28",
    "end_time_ist": "07:14",
    "state": "उदय (Rise)",
    "source_start": "04:19 ए एम, मई 27",
    "source_end": "07:14 ए एम, मई 28"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-05-28",
    "start_time_ist": "07:14",
    "end_date": "2027-05-29",
    "end_time_ist": "09:42",
    "state": "उदय (Rise)",
    "source_start": "07:14 ए एम, मई 28",
    "source_end": "09:42 ए एम, मई 29"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-05-29",
    "start_time_ist": "09:42",
    "end_date": "2027-05-30",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "09:42 ए एम, मई 29",
    "source_end": "11:32 ए एम, मई 30"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-05-30",
    "start_time_ist": "11:32",
    "end_date": "2027-05-31",
    "end_time_ist": "12:35",
    "state": "उदय (Rise)",
    "source_start": "11:32 ए एम, मई 30",
    "source_end": "12:35 पी एम, मई 31"
  },
  {
    "nak": "Revati",
    "start_date": "2027-05-31",
    "start_time_ist": "12:35",
    "end_date": "2027-06-01",
    "end_time_ist": "12:49",
    "state": "उदय (Rise)",
    "source_start": "12:35 पी एम, मई 31",
    "source_end": "12:49 पी एम, जून 01"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-06-01",
    "start_time_ist": "12:49",
    "end_date": "2027-06-02",
    "end_time_ist": "12:16",
    "state": "उदय (Rise)",
    "source_start": "12:49 पी एम, जून 01",
    "source_end": "12:16 पी एम, जून 02"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-06-02",
    "start_time_ist": "12:16",
    "end_date": "2027-06-03",
    "end_time_ist": "11:01",
    "state": "उदय (Rise)",
    "source_start": "12:16 पी एम, जून 02",
    "source_end": "11:01 ए एम, जून 03"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-06-03",
    "start_time_ist": "11:01",
    "end_date": "2027-06-04",
    "end_time_ist": "09:13",
    "state": "उदय (Rise)",
    "source_start": "11:01 ए एम, जून 03",
    "source_end": "09:13 ए एम, जून 04"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-06-04",
    "start_time_ist": "09:13",
    "end_date": "2027-06-05",
    "end_time_ist": "07:02",
    "state": "उदय (Rise)",
    "source_start": "09:13 ए एम, जून 04",
    "source_end": "07:02 ए एम, जून 05"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-06-05",
    "start_time_ist": "07:02",
    "end_date": "2027-06-06",
    "end_time_ist": "04:36",
    "state": "उदय (Rise)",
    "source_start": "07:02 ए एम, जून 05",
    "source_end": "04:36 ए एम, जून 06"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-06-06",
    "start_time_ist": "04:36",
    "end_date": "2027-06-07",
    "end_time_ist": "02:08",
    "state": "उदय (Rise)",
    "source_start": "04:36 ए एम, जून 06",
    "source_end": "02:08 ए एम, जून 07"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-06-07",
    "start_time_ist": "02:08",
    "end_date": "2027-06-07",
    "end_time_ist": "23:45",
    "state": "उदय (Rise)",
    "source_start": "02:08 ए एम, जून 07",
    "source_end": "11:45 पी एम, जून 07"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-06-07",
    "start_time_ist": "23:45",
    "end_date": "2027-06-08",
    "end_time_ist": "21:36",
    "state": "उदय (Rise)",
    "source_start": "11:45 पी एम, जून 07",
    "source_end": "09:36 पी एम, जून 08"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-06-08",
    "start_time_ist": "21:36",
    "end_date": "2027-06-09",
    "end_time_ist": "19:47",
    "state": "उदय (Rise)",
    "source_start": "09:36 पी एम, जून 08",
    "source_end": "07:47 पी एम, जून 09"
  },
  {
    "nak": "Magha",
    "start_date": "2027-06-09",
    "start_time_ist": "19:47",
    "end_date": "2027-06-10",
    "end_time_ist": "18:23",
    "state": "उदय (Rise)",
    "source_start": "07:47 पी एम, जून 09",
    "source_end": "06:23 पी एम, जून 10"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-06-10",
    "start_time_ist": "18:23",
    "end_date": "2027-06-11",
    "end_time_ist": "17:27",
    "state": "उदय (Rise)",
    "source_start": "06:23 पी एम, जून 10",
    "source_end": "05:27 पी एम, जून 11"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-06-11",
    "start_time_ist": "17:27",
    "end_date": "2027-06-12",
    "end_time_ist": "16:59",
    "state": "उदय (Rise)",
    "source_start": "05:27 पी एम, जून 11",
    "source_end": "04:59 पी एम, जून 12"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-06-12",
    "start_time_ist": "16:59",
    "end_date": "2027-06-13",
    "end_time_ist": "16:59",
    "state": "उदय (Rise)",
    "source_start": "04:59 पी एम, जून 12",
    "source_end": "04:59 पी एम, जून 13"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-06-13",
    "start_time_ist": "16:59",
    "end_date": "2027-06-14",
    "end_time_ist": "17:28",
    "state": "उदय (Rise)",
    "source_start": "04:59 पी एम, जून 13",
    "source_end": "05:28 पी एम, जून 14"
  },
  {
    "nak": "Swati",
    "start_date": "2027-06-14",
    "start_time_ist": "17:28",
    "end_date": "2027-06-15",
    "end_time_ist": "18:23",
    "state": "उदय (Rise)",
    "source_start": "05:28 पी एम, जून 14",
    "source_end": "06:23 पी एम, जून 15"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-06-15",
    "start_time_ist": "18:23",
    "end_date": "2027-06-16",
    "end_time_ist": "19:44",
    "state": "उदय (Rise)",
    "source_start": "06:23 पी एम, जून 15",
    "source_end": "07:44 पी एम, जून 16"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-06-16",
    "start_time_ist": "19:44",
    "end_date": "2027-06-17",
    "end_time_ist": "21:30",
    "state": "उदय (Rise)",
    "source_start": "07:44 पी एम, जून 16",
    "source_end": "09:30 पी एम, जून 17"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-06-17",
    "start_time_ist": "21:30",
    "end_date": "2027-06-18",
    "end_time_ist": "23:40",
    "state": "उदय (Rise)",
    "source_start": "09:30 पी एम, जून 17",
    "source_end": "11:40 पी एम, जून 18"
  },
  {
    "nak": "Mula",
    "start_date": "2027-06-18",
    "start_time_ist": "23:40",
    "end_date": "2027-06-20",
    "end_time_ist": "02:12",
    "state": "उदय (Rise)",
    "source_start": "11:40 पी एम, जून 18",
    "source_end": "02:12 ए एम, जून 20"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-06-20",
    "start_time_ist": "02:12",
    "end_date": "2027-06-21",
    "end_time_ist": "05:03",
    "state": "उदय (Rise)",
    "source_start": "02:12 ए एम, जून 20",
    "source_end": "05:03 ए एम, जून 21"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-06-21",
    "start_time_ist": "05:03",
    "end_date": "2027-06-22",
    "end_time_ist": "08:08",
    "state": "उदय (Rise)",
    "source_start": "05:03 ए एम, जून 21",
    "source_end": "08:08 ए एम, जून 22"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-06-22",
    "start_time_ist": "08:08",
    "end_date": "2027-06-23",
    "end_time_ist": "11:17",
    "state": "उदय (Rise)",
    "source_start": "08:08 ए एम, जून 22",
    "source_end": "11:17 ए एम, जून 23"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-06-23",
    "start_time_ist": "11:17",
    "end_date": "2027-06-24",
    "end_time_ist": "14:21",
    "state": "उदय (Rise)",
    "source_start": "11:17 ए एम, जून 23",
    "source_end": "02:21 पी एम, जून 24"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-06-24",
    "start_time_ist": "14:21",
    "end_date": "2027-06-25",
    "end_time_ist": "17:06",
    "state": "उदय (Rise)",
    "source_start": "02:21 पी एम, जून 24",
    "source_end": "05:06 पी एम, जून 25"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-06-25",
    "start_time_ist": "17:06",
    "end_date": "2027-06-26",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "05:06 पी एम, जून 25",
    "source_end": "07:22 पी एम, जून 26"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-06-26",
    "start_time_ist": "19:22",
    "end_date": "2027-06-27",
    "end_time_ist": "20:58",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, जून 26",
    "source_end": "08:58 पी एम, जून 27"
  },
  {
    "nak": "Revati",
    "start_date": "2027-06-27",
    "start_time_ist": "20:58",
    "end_date": "2027-06-28",
    "end_time_ist": "21:48",
    "state": "उदय (Rise)",
    "source_start": "08:58 पी एम, जून 27",
    "source_end": "09:48 पी एम, जून 28"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-06-28",
    "start_time_ist": "21:48",
    "end_date": "2027-06-29",
    "end_time_ist": "21:48",
    "state": "उदय (Rise)",
    "source_start": "09:48 पी एम, जून 28",
    "source_end": "09:48 पी एम, जून 29"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-06-29",
    "start_time_ist": "21:48",
    "end_date": "2027-06-30",
    "end_time_ist": "21:01",
    "state": "उदय (Rise)",
    "source_start": "09:48 पी एम, जून 29",
    "source_end": "09:01 पी एम, जून 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-06-30",
    "start_time_ist": "21:01",
    "end_date": "2027-07-01",
    "end_time_ist": "19:31",
    "state": "उदय (Rise)",
    "source_start": "09:01 पी एम, जून 30",
    "source_end": "07:31 पी एम, जुलाई 01"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-07-01",
    "start_time_ist": "19:31",
    "end_date": "2027-07-02",
    "end_time_ist": "17:26",
    "state": "उदय (Rise)",
    "source_start": "07:31 पी एम, जुलाई 01",
    "source_end": "05:26 पी एम, जुलाई 02"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-07-02",
    "start_time_ist": "17:26",
    "end_date": "2027-07-03",
    "end_time_ist": "14:55",
    "state": "उदय (Rise)",
    "source_start": "05:26 पी एम, जुलाई 02",
    "source_end": "02:55 पी एम, जुलाई 03"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-07-03",
    "start_time_ist": "14:55",
    "end_date": "2027-07-04",
    "end_time_ist": "12:09",
    "state": "उदय (Rise)",
    "source_start": "02:55 पी एम, जुलाई 03",
    "source_end": "12:09 पी एम, जुलाई 04"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-07-04",
    "start_time_ist": "12:09",
    "end_date": "2027-07-05",
    "end_time_ist": "09:19",
    "state": "उदय (Rise)",
    "source_start": "12:09 पी एम, जुलाई 04",
    "source_end": "09:19 ए एम, जुलाई 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-07-05",
    "start_time_ist": "09:19",
    "end_date": "2027-07-06",
    "end_time_ist": "06:33",
    "state": "उदय (Rise)",
    "source_start": "09:19 ए एम, जुलाई 05",
    "source_end": "06:33 ए एम, जुलाई 06"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-07-06",
    "start_time_ist": "06:33",
    "end_date": "2027-07-07",
    "end_time_ist": "04:03",
    "state": "उदय (Rise)",
    "source_start": "06:33 ए एम, जुलाई 06",
    "source_end": "04:03 ए एम, जुलाई 07"
  },
  {
    "nak": "Magha",
    "start_date": "2027-07-07",
    "start_time_ist": "04:03",
    "end_date": "2027-07-08",
    "end_time_ist": "01:55",
    "state": "उदय (Rise)",
    "source_start": "04:03 ए एम, जुलाई 07",
    "source_end": "01:55 ए एम, जुलाई 08"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-07-08",
    "start_time_ist": "01:55",
    "end_date": "2027-07-09",
    "end_time_ist": "00:18",
    "state": "उदय (Rise)",
    "source_start": "01:55 ए एम, जुलाई 08",
    "source_end": "12:18 ए एम, जुलाई 09"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-07-09",
    "start_time_ist": "00:18",
    "end_date": "2027-07-09",
    "end_time_ist": "23:15",
    "state": "उदय (Rise)",
    "source_start": "12:18 ए एम, जुलाई 09",
    "source_end": "11:15 पी एम, जुलाई 09"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-07-09",
    "start_time_ist": "23:15",
    "end_date": "2027-07-10",
    "end_time_ist": "22:51",
    "state": "उदय (Rise)",
    "source_start": "11:15 पी एम, जुलाई 09",
    "source_end": "10:51 पी एम, जुलाई 10"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-07-10",
    "start_time_ist": "22:51",
    "end_date": "2027-07-11",
    "end_time_ist": "23:05",
    "state": "उदय (Rise)",
    "source_start": "10:51 पी एम, जुलाई 10",
    "source_end": "11:05 पी एम, जुलाई 11"
  },
  {
    "nak": "Swati",
    "start_date": "2027-07-11",
    "start_time_ist": "23:04",
    "end_date": "2027-07-12",
    "end_time_ist": "23:56",
    "state": "उदय (Rise)",
    "source_start": "11:04 पी एम, जुलाई 11",
    "source_end": "11:56 पी एम, जुलाई 12"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-07-12",
    "start_time_ist": "23:56",
    "end_date": "2027-07-14",
    "end_time_ist": "01:22",
    "state": "उदय (Rise)",
    "source_start": "11:56 पी एम, जुलाई 12",
    "source_end": "01:22 ए एम, जुलाई 14"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-07-14",
    "start_time_ist": "01:22",
    "end_date": "2027-07-15",
    "end_time_ist": "03:18",
    "state": "उदय (Rise)",
    "source_start": "01:22 ए एम, जुलाई 14",
    "source_end": "03:18 ए एम, जुलाई 15"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-07-15",
    "start_time_ist": "03:18",
    "end_date": "2027-07-16",
    "end_time_ist": "05:39",
    "state": "उदय (Rise)",
    "source_start": "03:18 ए एम, जुलाई 15",
    "source_end": "05:39 ए एम, जुलाई 16"
  },
  {
    "nak": "Mula",
    "start_date": "2027-07-16",
    "start_time_ist": "05:39",
    "end_date": "2027-07-17",
    "end_time_ist": "08:21",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, जुलाई 16",
    "source_end": "08:21 ए एम, जुलाई 17"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-07-17",
    "start_time_ist": "08:21",
    "end_date": "2027-07-18",
    "end_time_ist": "11:17",
    "state": "उदय (Rise)",
    "source_start": "08:21 ए एम, जुलाई 17",
    "source_end": "11:17 ए एम, जुलाई 18"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-07-18",
    "start_time_ist": "11:17",
    "end_date": "2027-07-19",
    "end_time_ist": "14:23",
    "state": "उदय (Rise)",
    "source_start": "11:17 ए एम, जुलाई 18",
    "source_end": "02:23 पी एम, जुलाई 19"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-07-19",
    "start_time_ist": "14:23",
    "end_date": "2027-07-20",
    "end_time_ist": "17:31",
    "state": "उदय (Rise)",
    "source_start": "02:23 पी एम, जुलाई 19",
    "source_end": "05:31 पी एम, जुलाई 20"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-07-20",
    "start_time_ist": "17:31",
    "end_date": "2027-07-21",
    "end_time_ist": "20:34",
    "state": "उदय (Rise)",
    "source_start": "05:31 पी एम, जुलाई 20",
    "source_end": "08:34 पी एम, जुलाई 21"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-07-21",
    "start_time_ist": "20:34",
    "end_date": "2027-07-22",
    "end_time_ist": "23:24",
    "state": "उदय (Rise)",
    "source_start": "08:34 पी एम, जुलाई 21",
    "source_end": "11:24 पी एम, जुलाई 22"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-07-22",
    "start_time_ist": "23:24",
    "end_date": "2027-07-24",
    "end_time_ist": "01:53",
    "state": "उदय (Rise)",
    "source_start": "11:24 पी एम, जुलाई 22",
    "source_end": "01:53 ए एम, जुलाई 24"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-07-24",
    "start_time_ist": "01:53",
    "end_date": "2027-07-25",
    "end_time_ist": "03:52",
    "state": "उदय (Rise)",
    "source_start": "01:53 ए एम, जुलाई 24",
    "source_end": "03:52 ए एम, जुलाई 25"
  },
  {
    "nak": "Revati",
    "start_date": "2027-07-25",
    "start_time_ist": "03:52",
    "end_date": "2027-07-26",
    "end_time_ist": "05:13",
    "state": "उदय (Rise)",
    "source_start": "03:52 ए एम, जुलाई 25",
    "source_end": "05:13 ए एम, जुलाई 26"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-07-26",
    "start_time_ist": "05:13",
    "end_date": "2027-07-27",
    "end_time_ist": "05:53",
    "state": "उदय (Rise)",
    "source_start": "05:13 ए एम, जुलाई 26",
    "source_end": "05:53 ए एम, जुलाई 27"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-07-27",
    "start_time_ist": "05:53",
    "end_date": "2027-07-28",
    "end_time_ist": "05:47",
    "state": "उदय (Rise)",
    "source_start": "05:53 ए एम, जुलाई 27",
    "source_end": "05:47 ए एम, जुलाई 28"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-07-28",
    "start_time_ist": "05:47",
    "end_date": "2027-07-29",
    "end_time_ist": "04:57",
    "state": "उदय (Rise)",
    "source_start": "05:47 ए एम, जुलाई 28",
    "source_end": "04:57 ए एम, जुलाई 29"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-07-29",
    "start_time_ist": "04:57",
    "end_date": "2027-07-30",
    "end_time_ist": "03:27",
    "state": "उदय (Rise)",
    "source_start": "04:57 ए एम, जुलाई 29",
    "source_end": "03:27 ए एम, जुलाई 30"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-07-30",
    "start_time_ist": "03:27",
    "end_date": "2027-07-31",
    "end_time_ist": "01:23",
    "state": "उदय (Rise)",
    "source_start": "03:27 ए एम, जुलाई 30",
    "source_end": "01:23 ए एम, जुलाई 31"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-07-31",
    "start_time_ist": "01:23",
    "end_date": "2027-07-31",
    "end_time_ist": "22:52",
    "state": "उदय (Rise)",
    "source_start": "01:23 ए एम, जुलाई 31",
    "source_end": "10:52 पी एम, जुलाई 31"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-07-31",
    "start_time_ist": "22:52",
    "end_date": "2027-08-01",
    "end_time_ist": "20:04",
    "state": "उदय (Rise)",
    "source_start": "10:52 पी एम, जुलाई 31",
    "source_end": "08:04 पी एम, अगस्त 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-08-01",
    "start_time_ist": "20:04",
    "end_date": "2027-08-02",
    "end_time_ist": "17:09",
    "state": "उदय (Rise)",
    "source_start": "08:04 पी एम, अगस्त 01",
    "source_end": "05:09 पी एम, अगस्त 02"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-08-02",
    "start_time_ist": "17:09",
    "end_date": "2027-08-03",
    "end_time_ist": "14:16",
    "state": "उदय (Rise)",
    "source_start": "05:09 पी एम, अगस्त 02",
    "source_end": "02:16 पी एम, अगस्त 03"
  },
  {
    "nak": "Magha",
    "start_date": "2027-08-03",
    "start_time_ist": "14:16",
    "end_date": "2027-08-04",
    "end_time_ist": "11:36",
    "state": "उदय (Rise)",
    "source_start": "02:16 पी एम, अगस्त 03",
    "source_end": "11:36 ए एम, अगस्त 04"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-08-04",
    "start_time_ist": "11:36",
    "end_date": "2027-08-05",
    "end_time_ist": "09:19",
    "state": "उदय (Rise)",
    "source_start": "11:36 ए एम, अगस्त 04",
    "source_end": "09:19 ए एम, अगस्त 05"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-08-05",
    "start_time_ist": "09:19",
    "end_date": "2027-08-06",
    "end_time_ist": "07:33",
    "state": "उदय (Rise)",
    "source_start": "09:19 ए एम, अगस्त 05",
    "source_end": "07:33 ए एम, अगस्त 06"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-08-06",
    "start_time_ist": "07:33",
    "end_date": "2027-08-07",
    "end_time_ist": "06:25",
    "state": "उदय (Rise)",
    "source_start": "07:33 ए एम, अगस्त 06",
    "source_end": "06:25 ए एम, अगस्त 07"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-08-07",
    "start_time_ist": "06:25",
    "end_date": "2027-08-08",
    "end_time_ist": "06:00",
    "state": "उदय (Rise)",
    "source_start": "06:25 ए एम, अगस्त 07",
    "source_end": "06:00 ए एम, अगस्त 08"
  },
  {
    "nak": "Swati",
    "start_date": "2027-08-08",
    "start_time_ist": "06:00",
    "end_date": "2027-08-09",
    "end_time_ist": "06:21",
    "state": "उदय (Rise)",
    "source_start": "06:00 ए एम, अगस्त 08",
    "source_end": "06:21 ए एम, अगस्त 09"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-08-09",
    "start_time_ist": "06:21",
    "end_date": "2027-08-10",
    "end_time_ist": "07:27",
    "state": "उदय (Rise)",
    "source_start": "06:21 ए एम, अगस्त 09",
    "source_end": "07:27 ए एम, अगस्त 10"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-08-10",
    "start_time_ist": "07:27",
    "end_date": "2027-08-11",
    "end_time_ist": "09:13",
    "state": "उदय (Rise)",
    "source_start": "07:27 ए एम, अगस्त 10",
    "source_end": "09:13 ए एम, अगस्त 11"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-08-11",
    "start_time_ist": "09:13",
    "end_date": "2027-08-12",
    "end_time_ist": "11:34",
    "state": "उदय (Rise)",
    "source_start": "09:13 ए एम, अगस्त 11",
    "source_end": "11:34 ए एम, अगस्त 12"
  },
  {
    "nak": "Mula",
    "start_date": "2027-08-12",
    "start_time_ist": "11:34",
    "end_date": "2027-08-13",
    "end_time_ist": "14:19",
    "state": "उदय (Rise)",
    "source_start": "11:34 ए एम, अगस्त 12",
    "source_end": "02:19 पी एम, अगस्त 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-08-13",
    "start_time_ist": "14:19",
    "end_date": "2027-08-14",
    "end_time_ist": "17:20",
    "state": "उदय (Rise)",
    "source_start": "02:19 पी एम, अगस्त 13",
    "source_end": "05:20 पी एम, अगस्त 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-08-14",
    "start_time_ist": "17:20",
    "end_date": "2027-08-15",
    "end_time_ist": "20:27",
    "state": "उदय (Rise)",
    "source_start": "05:20 पी एम, अगस्त 14",
    "source_end": "08:27 पी एम, अगस्त 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-08-15",
    "start_time_ist": "20:27",
    "end_date": "2027-08-16",
    "end_time_ist": "23:34",
    "state": "उदय (Rise)",
    "source_start": "08:27 पी एम, अगस्त 15",
    "source_end": "11:34 पी एम, अगस्त 16"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-08-16",
    "start_time_ist": "23:34",
    "end_date": "2027-08-18",
    "end_time_ist": "02:31",
    "state": "उदय (Rise)",
    "source_start": "11:34 पी एम, अगस्त 16",
    "source_end": "02:31 ए एम, अगस्त 18"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-08-18",
    "start_time_ist": "02:31",
    "end_date": "2027-08-19",
    "end_time_ist": "05:15",
    "state": "उदय (Rise)",
    "source_start": "02:31 ए एम, अगस्त 18",
    "source_end": "05:15 ए एम, अगस्त 19"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-08-19",
    "start_time_ist": "05:15",
    "end_date": "2027-08-20",
    "end_time_ist": "07:38",
    "state": "उदय (Rise)",
    "source_start": "05:15 ए एम, अगस्त 19",
    "source_end": "07:38 ए एम, अगस्त 20"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-08-20",
    "start_time_ist": "07:38",
    "end_date": "2027-08-21",
    "end_time_ist": "09:38",
    "state": "उदय (Rise)",
    "source_start": "07:38 ए एम, अगस्त 20",
    "source_end": "09:38 ए एम, अगस्त 21"
  },
  {
    "nak": "Revati",
    "start_date": "2027-08-21",
    "start_time_ist": "09:38",
    "end_date": "2027-08-22",
    "end_time_ist": "11:10",
    "state": "उदय (Rise)",
    "source_start": "09:38 ए एम, अगस्त 21",
    "source_end": "11:10 ए एम, अगस्त 22"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-08-22",
    "start_time_ist": "11:10",
    "end_date": "2027-08-23",
    "end_time_ist": "12:11",
    "state": "उदय (Rise)",
    "source_start": "11:10 ए एम, अगस्त 22",
    "source_end": "12:11 पी एम, अगस्त 23"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-08-23",
    "start_time_ist": "12:11",
    "end_date": "2027-08-24",
    "end_time_ist": "12:37",
    "state": "उदय (Rise)",
    "source_start": "12:11 पी एम, अगस्त 23",
    "source_end": "12:37 पी एम, अगस्त 24"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-08-24",
    "start_time_ist": "12:37",
    "end_date": "2027-08-25",
    "end_time_ist": "12:27",
    "state": "उदय (Rise)",
    "source_start": "12:37 पी एम, अगस्त 24",
    "source_end": "12:27 पी एम, अगस्त 25"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-08-25",
    "start_time_ist": "12:27",
    "end_date": "2027-08-26",
    "end_time_ist": "11:42",
    "state": "उदय (Rise)",
    "source_start": "12:27 पी एम, अगस्त 25",
    "source_end": "11:42 ए एम, अगस्त 26"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-08-26",
    "start_time_ist": "11:42",
    "end_date": "2027-08-27",
    "end_time_ist": "10:22",
    "state": "उदय (Rise)",
    "source_start": "11:42 ए एम, अगस्त 26",
    "source_end": "10:22 ए एम, अगस्त 27"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-08-27",
    "start_time_ist": "10:22",
    "end_date": "2027-08-28",
    "end_time_ist": "08:32",
    "state": "उदय (Rise)",
    "source_start": "10:22 ए एम, अगस्त 27",
    "source_end": "08:32 ए एम, अगस्त 28"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-08-28",
    "start_time_ist": "08:32",
    "end_date": "2027-08-29",
    "end_time_ist": "06:17",
    "state": "उदय (Rise)",
    "source_start": "08:32 ए एम, अगस्त 28",
    "source_end": "06:17 ए एम, अगस्त 29"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-08-29",
    "start_time_ist": "06:17",
    "end_date": "2027-08-30",
    "end_time_ist": "03:44",
    "state": "उदय (Rise)",
    "source_start": "06:17 ए एम, अगस्त 29",
    "source_end": "03:44 ए एम, अगस्त 30"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-08-30",
    "start_time_ist": "03:44",
    "end_date": "2027-08-31",
    "end_time_ist": "01:02",
    "state": "उदय (Rise)",
    "source_start": "03:44 ए एम, अगस्त 30",
    "source_end": "01:02 ए एम, अगस्त 31"
  },
  {
    "nak": "Magha",
    "start_date": "2027-08-31",
    "start_time_ist": "01:02",
    "end_date": "2027-08-31",
    "end_time_ist": "22:20",
    "state": "उदय (Rise)",
    "source_start": "01:02 ए एम, अगस्त 31",
    "source_end": "10:20 पी एम, अगस्त 31"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-08-31",
    "start_time_ist": "22:20",
    "end_date": "2027-09-01",
    "end_time_ist": "19:48",
    "state": "उदय (Rise)",
    "source_start": "10:20 पी एम, अगस्त 31",
    "source_end": "07:48 पी एम, सितम्बर 01"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-09-01",
    "start_time_ist": "19:48",
    "end_date": "2027-09-02",
    "end_time_ist": "17:36",
    "state": "उदय (Rise)",
    "source_start": "07:48 पी एम, सितम्बर 01",
    "source_end": "05:36 पी एम, सितम्बर 02"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-09-02",
    "start_time_ist": "17:36",
    "end_date": "2027-09-03",
    "end_time_ist": "15:53",
    "state": "उदय (Rise)",
    "source_start": "05:36 पी एम, सितम्बर 02",
    "source_end": "03:53 पी एम, सितम्बर 03"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-09-03",
    "start_time_ist": "15:53",
    "end_date": "2027-09-04",
    "end_time_ist": "14:49",
    "state": "उदय (Rise)",
    "source_start": "03:53 पी एम, सितम्बर 03",
    "source_end": "02:49 पी एम, सितम्बर 04"
  },
  {
    "nak": "Swati",
    "start_date": "2027-09-04",
    "start_time_ist": "14:49",
    "end_date": "2027-09-05",
    "end_time_ist": "14:30",
    "state": "उदय (Rise)",
    "source_start": "02:49 पी एम, सितम्बर 04",
    "source_end": "02:30 पी एम, सितम्बर 05"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-09-05",
    "start_time_ist": "14:30",
    "end_date": "2027-09-06",
    "end_time_ist": "14:59",
    "state": "उदय (Rise)",
    "source_start": "02:30 पी एम, सितम्बर 05",
    "source_end": "02:59 पी एम, सितम्बर 06"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-09-06",
    "start_time_ist": "14:59",
    "end_date": "2027-09-07",
    "end_time_ist": "16:16",
    "state": "उदय (Rise)",
    "source_start": "02:59 पी एम, सितम्बर 06",
    "source_end": "04:16 पी एम, सितम्बर 07"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-09-07",
    "start_time_ist": "16:16",
    "end_date": "2027-09-08",
    "end_time_ist": "18:16",
    "state": "उदय (Rise)",
    "source_start": "04:16 पी एम, सितम्बर 07",
    "source_end": "06:16 पी एम, सितम्बर 08"
  },
  {
    "nak": "Mula",
    "start_date": "2027-09-08",
    "start_time_ist": "18:16",
    "end_date": "2027-09-09",
    "end_time_ist": "20:52",
    "state": "उदय (Rise)",
    "source_start": "06:16 पी एम, सितम्बर 08",
    "source_end": "08:52 पी एम, सितम्बर 09"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-09-09",
    "start_time_ist": "20:52",
    "end_date": "2027-09-10",
    "end_time_ist": "23:50",
    "state": "उदय (Rise)",
    "source_start": "08:52 पी एम, सितम्बर 09",
    "source_end": "11:50 पी एम, सितम्बर 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-09-10",
    "start_time_ist": "23:50",
    "end_date": "2027-09-12",
    "end_time_ist": "02:58",
    "state": "उदय (Rise)",
    "source_start": "11:50 पी एम, सितम्बर 10",
    "source_end": "02:58 ए एम, सितम्बर 12"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-09-12",
    "start_time_ist": "02:58",
    "end_date": "2027-09-13",
    "end_time_ist": "06:04",
    "state": "उदय (Rise)",
    "source_start": "02:58 ए एम, सितम्बर 12",
    "source_end": "06:04 ए एम, सितम्बर 13"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-09-13",
    "start_time_ist": "06:04",
    "end_date": "2027-09-14",
    "end_time_ist": "08:58",
    "state": "उदय (Rise)",
    "source_start": "06:04 ए एम, सितम्बर 13",
    "source_end": "08:58 ए एम, सितम्बर 14"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-09-14",
    "start_time_ist": "08:58",
    "end_date": "2027-09-15",
    "end_time_ist": "11:33",
    "state": "उदय (Rise)",
    "source_start": "08:58 ए एम, सितम्बर 14",
    "source_end": "11:33 ए एम, सितम्बर 15"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-09-15",
    "start_time_ist": "11:33",
    "end_date": "2027-09-16",
    "end_time_ist": "13:43",
    "state": "उदय (Rise)",
    "source_start": "11:33 ए एम, सितम्बर 15",
    "source_end": "01:43 पी एम, सितम्बर 16"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-09-16",
    "start_time_ist": "13:43",
    "end_date": "2027-09-17",
    "end_time_ist": "15:28",
    "state": "उदय (Rise)",
    "source_start": "01:43 पी एम, सितम्बर 16",
    "source_end": "03:28 पी एम, सितम्बर 17"
  },
  {
    "nak": "Revati",
    "start_date": "2027-09-17",
    "start_time_ist": "15:28",
    "end_date": "2027-09-18",
    "end_time_ist": "16:47",
    "state": "उदय (Rise)",
    "source_start": "03:28 पी एम, सितम्बर 17",
    "source_end": "04:47 पी एम, सितम्बर 18"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-09-18",
    "start_time_ist": "16:47",
    "end_date": "2027-09-19",
    "end_time_ist": "17:40",
    "state": "उदय (Rise)",
    "source_start": "04:47 पी एम, सितम्बर 18",
    "source_end": "05:40 पी एम, सितम्बर 19"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-09-19",
    "start_time_ist": "17:40",
    "end_date": "2027-09-20",
    "end_time_ist": "18:09",
    "state": "उदय (Rise)",
    "source_start": "05:40 पी एम, सितम्बर 19",
    "source_end": "06:09 पी एम, सितम्बर 20"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-09-20",
    "start_time_ist": "18:09",
    "end_date": "2027-09-21",
    "end_time_ist": "18:12",
    "state": "उदय (Rise)",
    "source_start": "06:09 पी एम, सितम्बर 20",
    "source_end": "06:12 पी एम, सितम्बर 21"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-09-21",
    "start_time_ist": "18:12",
    "end_date": "2027-09-22",
    "end_time_ist": "17:51",
    "state": "उदय (Rise)",
    "source_start": "06:12 पी एम, सितम्बर 21",
    "source_end": "05:51 पी एम, सितम्बर 22"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-09-22",
    "start_time_ist": "17:51",
    "end_date": "2027-09-23",
    "end_time_ist": "17:06",
    "state": "उदय (Rise)",
    "source_start": "05:51 पी एम, सितम्बर 22",
    "source_end": "05:06 पी एम, सितम्बर 23"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-09-23",
    "start_time_ist": "17:06",
    "end_date": "2027-09-24",
    "end_time_ist": "15:58",
    "state": "उदय (Rise)",
    "source_start": "05:06 पी एम, सितम्बर 23",
    "source_end": "03:58 पी एम, सितम्बर 24"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-09-24",
    "start_time_ist": "15:58",
    "end_date": "2027-09-25",
    "end_time_ist": "14:27",
    "state": "उदय (Rise)",
    "source_start": "03:58 पी एम, सितम्बर 24",
    "source_end": "02:27 पी एम, सितम्बर 25"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-09-25",
    "start_time_ist": "14:27",
    "end_date": "2027-09-26",
    "end_time_ist": "12:37",
    "state": "उदय (Rise)",
    "source_start": "02:27 पी एम, सितम्बर 25",
    "source_end": "12:37 पी एम, सितम्बर 26"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-09-26",
    "start_time_ist": "12:37",
    "end_date": "2027-09-27",
    "end_time_ist": "10:33",
    "state": "उदय (Rise)",
    "source_start": "12:37 पी एम, सितम्बर 26",
    "source_end": "10:33 ए एम, सितम्बर 27"
  },
  {
    "nak": "Magha",
    "start_date": "2027-09-27",
    "start_time_ist": "10:33",
    "end_date": "2027-09-28",
    "end_time_ist": "08:20",
    "state": "उदय (Rise)",
    "source_start": "10:33 ए एम, सितम्बर 27",
    "source_end": "08:20 ए एम, सितम्बर 28"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-09-28",
    "start_time_ist": "08:20",
    "end_date": "2027-09-29",
    "end_time_ist": "06:06",
    "state": "उदय (Rise)",
    "source_start": "08:20 ए एम, सितम्बर 28",
    "source_end": "06:06 ए एम, सितम्बर 29"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-09-29",
    "start_time_ist": "06:06",
    "end_date": "2027-09-30",
    "end_time_ist": "04:00",
    "state": "उदय (Rise)",
    "source_start": "06:06 ए एम, सितम्बर 29",
    "source_end": "04:00 ए एम, सितम्बर 30"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-09-30",
    "start_time_ist": "04:00",
    "end_date": "2027-10-01",
    "end_time_ist": "02:11",
    "state": "उदय (Rise)",
    "source_start": "04:00 ए एम, सितम्बर 30",
    "source_end": "02:11 ए एम, अक्टूबर 01"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-10-01",
    "start_time_ist": "02:11",
    "end_date": "2027-10-02",
    "end_time_ist": "00:49",
    "state": "उदय (Rise)",
    "source_start": "02:11 ए एम, अक्टूबर 01",
    "source_end": "12:49 ए एम, अक्टूबर 02"
  },
  {
    "nak": "Swati",
    "start_date": "2027-10-02",
    "start_time_ist": "00:49",
    "end_date": "2027-10-03",
    "end_time_ist": "00:03",
    "state": "उदय (Rise)",
    "source_start": "12:49 ए एम, अक्टूबर 02",
    "source_end": "12:03 ए एम, अक्टूबर 03"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-10-03",
    "start_time_ist": "00:03",
    "end_date": "2027-10-03",
    "end_time_ist": "12:00",
    "state": "उदय (Rise)",
    "source_start": "12:03 ए एम, अक्टूबर 03",
    "source_end": "12:00 पी एम, अक्टूबर 03"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-10-03",
    "start_time_ist": "12:00",
    "end_date": "2027-10-05",
    "end_time_ist": "00:44",
    "state": "उदय (Rise)",
    "source_start": "12:00 पी एम, अक्टूबर 03",
    "source_end": "12:44 ए एम, अक्टूबर 05"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-10-05",
    "start_time_ist": "00:44",
    "end_date": "2027-10-06",
    "end_time_ist": "02:15",
    "state": "उदय (Rise)",
    "source_start": "12:44 ए एम, अक्टूबर 05",
    "source_end": "02:15 ए एम, अक्टूबर 06"
  },
  {
    "nak": "Mula",
    "start_date": "2027-10-06",
    "start_time_ist": "02:15",
    "end_date": "2027-10-07",
    "end_time_ist": "04:28",
    "state": "उदय (Rise)",
    "source_start": "02:15 ए एम, अक्टूबर 06",
    "source_end": "04:28 ए एम, अक्टूबर 07"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-10-07",
    "start_time_ist": "04:28",
    "end_date": "2027-10-08",
    "end_time_ist": "07:13",
    "state": "उदय (Rise)",
    "source_start": "04:28 ए एम, अक्टूबर 07",
    "source_end": "07:13 ए एम, अक्टूबर 08"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-10-08",
    "start_time_ist": "07:13",
    "end_date": "2027-10-09",
    "end_time_ist": "10:17",
    "state": "उदय (Rise)",
    "source_start": "07:13 ए एम, अक्टूबर 08",
    "source_end": "10:17 ए एम, अक्टूबर 09"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-10-09",
    "start_time_ist": "10:17",
    "end_date": "2027-10-10",
    "end_time_ist": "13:25",
    "state": "उदय (Rise)",
    "source_start": "10:17 ए एम, अक्टूबर 09",
    "source_end": "01:25 पी एम, अक्टूबर 10"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-10-10",
    "start_time_ist": "13:25",
    "end_date": "2027-10-11",
    "end_time_ist": "16:21",
    "state": "उदय (Rise)",
    "source_start": "01:25 पी एम, अक्टूबर 10",
    "source_end": "04:21 पी एम, अक्टूबर 11"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-10-11",
    "start_time_ist": "16:21",
    "end_date": "2027-10-12",
    "end_time_ist": "18:55",
    "state": "उदय (Rise)",
    "source_start": "04:21 पी एम, अक्टूबर 11",
    "source_end": "06:55 पी एम, अक्टूबर 12"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-10-12",
    "start_time_ist": "18:55",
    "end_date": "2027-10-13",
    "end_time_ist": "20:59",
    "state": "उदय (Rise)",
    "source_start": "06:55 पी एम, अक्टूबर 12",
    "source_end": "08:59 पी एम, अक्टूबर 13"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-10-13",
    "start_time_ist": "20:59",
    "end_date": "2027-10-14",
    "end_time_ist": "22:30",
    "state": "उदय (Rise)",
    "source_start": "08:59 पी एम, अक्टूबर 13",
    "source_end": "10:30 पी एम, अक्टूबर 14"
  },
  {
    "nak": "Revati",
    "start_date": "2027-10-14",
    "start_time_ist": "22:30",
    "end_date": "2027-10-15",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "10:30 पी एम, अक्टूबर 14",
    "source_end": "11:29 पी एम, अक्टूबर 15"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-10-15",
    "start_time_ist": "23:29",
    "end_date": "2027-10-16",
    "end_time_ist": "23:58",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, अक्टूबर 15",
    "source_end": "11:58 पी एम, अक्टूबर 16"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-10-16",
    "start_time_ist": "23:58",
    "end_date": "2027-10-18",
    "end_time_ist": "00:03",
    "state": "उदय (Rise)",
    "source_start": "11:58 पी एम, अक्टूबर 16",
    "source_end": "12:03 ए एम, अक्टूबर 18"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-10-18",
    "start_time_ist": "00:03",
    "end_date": "2027-10-18",
    "end_time_ist": "23:47",
    "state": "उदय (Rise)",
    "source_start": "12:03 ए एम, अक्टूबर 18",
    "source_end": "11:47 पी एम, अक्टूबर 18"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-10-18",
    "start_time_ist": "23:47",
    "end_date": "2027-10-19",
    "end_time_ist": "23:15",
    "state": "उदय (Rise)",
    "source_start": "11:47 पी एम, अक्टूबर 18",
    "source_end": "11:15 पी एम, अक्टूबर 19"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-10-19",
    "start_time_ist": "23:15",
    "end_date": "2027-10-20",
    "end_time_ist": "22:29",
    "state": "उदय (Rise)",
    "source_start": "11:15 पी एम, अक्टूबर 19",
    "source_end": "10:29 पी एम, अक्टूबर 20"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-10-20",
    "start_time_ist": "22:29",
    "end_date": "2027-10-21",
    "end_time_ist": "21:32",
    "state": "उदय (Rise)",
    "source_start": "10:29 पी एम, अक्टूबर 20",
    "source_end": "09:32 पी एम, अक्टूबर 21"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-10-21",
    "start_time_ist": "21:32",
    "end_date": "2027-10-22",
    "end_time_ist": "20:24",
    "state": "उदय (Rise)",
    "source_start": "09:32 पी एम, अक्टूबर 21",
    "source_end": "08:24 पी एम, अक्टूबर 22"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-10-22",
    "start_time_ist": "20:24",
    "end_date": "2027-10-23",
    "end_time_ist": "19:07",
    "state": "उदय (Rise)",
    "source_start": "08:24 पी एम, अक्टूबर 22",
    "source_end": "07:07 पी एम, अक्टूबर 23"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-10-23",
    "start_time_ist": "19:07",
    "end_date": "2027-10-24",
    "end_time_ist": "17:41",
    "state": "उदय (Rise)",
    "source_start": "07:07 पी एम, अक्टूबर 23",
    "source_end": "05:41 पी एम, अक्टूबर 24"
  },
  {
    "nak": "Magha",
    "start_date": "2027-10-24",
    "start_time_ist": "17:41",
    "end_date": "2027-10-25",
    "end_time_ist": "16:09",
    "state": "उदय (Rise)",
    "source_start": "05:41 पी एम, अक्टूबर 24",
    "source_end": "04:09 पी एम, अक्टूबर 25"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-10-25",
    "start_time_ist": "16:09",
    "end_date": "2027-10-26",
    "end_time_ist": "14:33",
    "state": "उदय (Rise)",
    "source_start": "04:09 पी एम, अक्टूबर 25",
    "source_end": "02:33 पी एम, अक्टूबर 26"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-10-26",
    "start_time_ist": "14:33",
    "end_date": "2027-10-27",
    "end_time_ist": "13:00",
    "state": "उदय (Rise)",
    "source_start": "02:33 पी एम, अक्टूबर 26",
    "source_end": "01:00 पी एम, अक्टूबर 27"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-10-27",
    "start_time_ist": "13:00",
    "end_date": "2027-10-28",
    "end_time_ist": "11:35",
    "state": "उदय (Rise)",
    "source_start": "01:00 पी एम, अक्टूबर 27",
    "source_end": "11:35 ए एम, अक्टूबर 28"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-10-28",
    "start_time_ist": "11:35",
    "end_date": "2027-10-29",
    "end_time_ist": "10:27",
    "state": "उदय (Rise)",
    "source_start": "11:35 ए एम, अक्टूबर 28",
    "source_end": "10:27 ए एम, अक्टूबर 29"
  },
  {
    "nak": "Swati",
    "start_date": "2027-10-29",
    "start_time_ist": "10:27",
    "end_date": "2027-10-30",
    "end_time_ist": "09:43",
    "state": "उदय (Rise)",
    "source_start": "10:27 ए एम, अक्टूबर 29",
    "source_end": "09:43 ए एम, अक्टूबर 30"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-10-30",
    "start_time_ist": "09:43",
    "end_date": "2027-10-31",
    "end_time_ist": "09:31",
    "state": "उदय (Rise)",
    "source_start": "09:43 ए एम, अक्टूबर 30",
    "source_end": "09:31 ए एम, अक्टूबर 31"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-10-31",
    "start_time_ist": "09:31",
    "end_date": "2027-11-01",
    "end_time_ist": "09:57",
    "state": "उदय (Rise)",
    "source_start": "09:31 ए एम, अक्टूबर 31",
    "source_end": "09:57 ए एम, नवम्बर 01"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-11-01",
    "start_time_ist": "09:57",
    "end_date": "2027-11-02",
    "end_time_ist": "11:06",
    "state": "उदय (Rise)",
    "source_start": "09:57 ए एम, नवम्बर 01",
    "source_end": "11:06 ए एम, नवम्बर 02"
  },
  {
    "nak": "Mula",
    "start_date": "2027-11-02",
    "start_time_ist": "11:06",
    "end_date": "2027-11-03",
    "end_time_ist": "12:57",
    "state": "उदय (Rise)",
    "source_start": "11:06 ए एम, नवम्बर 02",
    "source_end": "12:57 पी एम, नवम्बर 03"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-11-03",
    "start_time_ist": "12:57",
    "end_date": "2027-11-04",
    "end_time_ist": "15:25",
    "state": "उदय (Rise)",
    "source_start": "12:57 पी एम, नवम्बर 03",
    "source_end": "03:25 पी एम, नवम्बर 04"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-11-04",
    "start_time_ist": "15:25",
    "end_date": "2027-11-05",
    "end_time_ist": "18:19",
    "state": "उदय (Rise)",
    "source_start": "03:25 पी एम, नवम्बर 04",
    "source_end": "06:19 पी एम, नवम्बर 05"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-11-05",
    "start_time_ist": "18:19",
    "end_date": "2027-11-06",
    "end_time_ist": "21:26",
    "state": "उदय (Rise)",
    "source_start": "06:19 पी एम, नवम्बर 05",
    "source_end": "09:26 पी एम, नवम्बर 06"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-11-06",
    "start_time_ist": "21:26",
    "end_date": "2027-11-08",
    "end_time_ist": "00:29",
    "state": "उदय (Rise)",
    "source_start": "09:26 पी एम, नवम्बर 06",
    "source_end": "12:29 ए एम, नवम्बर 08"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-11-08",
    "start_time_ist": "00:29",
    "end_date": "2027-11-09",
    "end_time_ist": "03:13",
    "state": "उदय (Rise)",
    "source_start": "12:29 ए एम, नवम्बर 08",
    "source_end": "03:13 ए एम, नवम्बर 09"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-11-09",
    "start_time_ist": "03:14",
    "end_date": "2027-11-10",
    "end_time_ist": "05:27",
    "state": "उदय (Rise)",
    "source_start": "03:14 ए एम, नवम्बर 09",
    "source_end": "05:27 ए एम, नवम्बर 10"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-11-10",
    "start_time_ist": "05:27",
    "end_date": "2027-11-11",
    "end_time_ist": "07:01",
    "state": "उदय (Rise)",
    "source_start": "05:27 ए एम, नवम्बर 10",
    "source_end": "07:01 ए एम, नवम्बर 11"
  },
  {
    "nak": "Revati",
    "start_date": "2027-11-11",
    "start_time_ist": "07:01",
    "end_date": "2027-11-12",
    "end_time_ist": "07:55",
    "state": "उदय (Rise)",
    "source_start": "07:01 ए एम, नवम्बर 11",
    "source_end": "07:55 ए एम, नवम्बर 12"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-11-12",
    "start_time_ist": "07:55",
    "end_date": "2027-11-13",
    "end_time_ist": "08:10",
    "state": "उदय (Rise)",
    "source_start": "07:55 ए एम, नवम्बर 12",
    "source_end": "08:10 ए एम, नवम्बर 13"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-11-13",
    "start_time_ist": "08:10",
    "end_date": "2027-11-14",
    "end_time_ist": "07:51",
    "state": "उदय (Rise)",
    "source_start": "08:10 ए एम, नवम्बर 13",
    "source_end": "07:51 ए एम, नवम्बर 14"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-11-14",
    "start_time_ist": "07:51",
    "end_date": "2027-11-15",
    "end_time_ist": "07:05",
    "state": "उदय (Rise)",
    "source_start": "07:51 ए एम, नवम्बर 14",
    "source_end": "07:05 ए एम, नवम्बर 15"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-11-15",
    "start_time_ist": "07:05",
    "end_date": "2027-11-16",
    "end_time_ist": "06:00",
    "state": "उदय (Rise)",
    "source_start": "07:05 ए एम, नवम्बर 15",
    "source_end": "06:00 ए एम, नवम्बर 16"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-11-16",
    "start_time_ist": "06:00",
    "end_date": "2027-11-17",
    "end_time_ist": "04:42",
    "state": "उदय (Rise)",
    "source_start": "06:00 ए एम, नवम्बर 16",
    "source_end": "04:42 ए एम, नवम्बर 17"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-11-17",
    "start_time_ist": "04:42",
    "end_date": "2027-11-18",
    "end_time_ist": "03:17",
    "state": "उदय (Rise)",
    "source_start": "04:42 ए एम, नवम्बर 17",
    "source_end": "03:17 ए एम, नवम्बर 18"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-11-18",
    "start_time_ist": "03:17",
    "end_date": "2027-11-19",
    "end_time_ist": "01:51",
    "state": "उदय (Rise)",
    "source_start": "03:17 ए एम, नवम्बर 18",
    "source_end": "01:51 ए एम, नवम्बर 19"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-11-19",
    "start_time_ist": "01:51",
    "end_date": "2027-11-20",
    "end_time_ist": "00:27",
    "state": "उदय (Rise)",
    "source_start": "01:51 ए एम, नवम्बर 19",
    "source_end": "12:27 ए एम, नवम्बर 20"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-11-20",
    "start_time_ist": "00:27",
    "end_date": "2027-11-20",
    "end_time_ist": "23:07",
    "state": "उदय (Rise)",
    "source_start": "12:27 ए एम, नवम्बर 20",
    "source_end": "11:07 पी एम, नवम्बर 20"
  },
  {
    "nak": "Magha",
    "start_date": "2027-11-20",
    "start_time_ist": "23:07",
    "end_date": "2027-11-21",
    "end_time_ist": "21:52",
    "state": "उदय (Rise)",
    "source_start": "11:07 पी एम, नवम्बर 20",
    "source_end": "09:52 पी एम, नवम्बर 21"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-11-21",
    "start_time_ist": "21:52",
    "end_date": "2027-11-22",
    "end_time_ist": "20:43",
    "state": "उदय (Rise)",
    "source_start": "09:52 पी एम, नवम्बर 21",
    "source_end": "08:43 पी एम, नवम्बर 22"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-11-22",
    "start_time_ist": "20:43",
    "end_date": "2027-11-23",
    "end_time_ist": "19:42",
    "state": "उदय (Rise)",
    "source_start": "08:43 पी एम, नवम्बर 22",
    "source_end": "07:42 पी एम, नवम्बर 23"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-11-23",
    "start_time_ist": "19:42",
    "end_date": "2027-11-24",
    "end_time_ist": "18:53",
    "state": "उदय (Rise)",
    "source_start": "07:42 पी एम, नवम्बर 23",
    "source_end": "06:53 पी एम, नवम्बर 24"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-11-24",
    "start_time_ist": "18:53",
    "end_date": "2027-11-25",
    "end_time_ist": "18:17",
    "state": "उदय (Rise)",
    "source_start": "06:53 पी एम, नवम्बर 24",
    "source_end": "06:17 पी एम, नवम्बर 25"
  },
  {
    "nak": "Swati",
    "start_date": "2027-11-25",
    "start_time_ist": "18:17",
    "end_date": "2027-11-26",
    "end_time_ist": "17:59",
    "state": "उदय (Rise)",
    "source_start": "06:17 पी एम, नवम्बर 25",
    "source_end": "05:59 पी एम, नवम्बर 26"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-11-26",
    "start_time_ist": "17:59",
    "end_date": "2027-11-27",
    "end_time_ist": "18:05",
    "state": "उदय (Rise)",
    "source_start": "05:59 पी एम, नवम्बर 26",
    "source_end": "06:05 पी एम, नवम्बर 27"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-11-27",
    "start_time_ist": "18:05",
    "end_date": "2027-11-28",
    "end_time_ist": "18:40",
    "state": "उदय (Rise)",
    "source_start": "06:05 पी एम, नवम्बर 27",
    "source_end": "06:40 पी एम, नवम्बर 28"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-11-28",
    "start_time_ist": "18:40",
    "end_date": "2027-11-29",
    "end_time_ist": "19:47",
    "state": "उदय (Rise)",
    "source_start": "06:40 पी एम, नवम्बर 28",
    "source_end": "07:47 पी एम, नवम्बर 29"
  },
  {
    "nak": "Mula",
    "start_date": "2027-11-29",
    "start_time_ist": "19:47",
    "end_date": "2027-11-30",
    "end_time_ist": "21:29",
    "state": "उदय (Rise)",
    "source_start": "07:47 पी एम, नवम्बर 29",
    "source_end": "09:29 पी एम, नवम्बर 30"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-11-30",
    "start_time_ist": "21:29",
    "end_date": "2027-12-01",
    "end_time_ist": "23:45",
    "state": "उदय (Rise)",
    "source_start": "09:29 पी एम, नवम्बर 30",
    "source_end": "11:45 पी एम, दिसम्बर 01"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-12-01",
    "start_time_ist": "23:45",
    "end_date": "2027-12-03",
    "end_time_ist": "02:29",
    "state": "उदय (Rise)",
    "source_start": "11:45 पी एम, दिसम्बर 01",
    "source_end": "02:29 ए एम, दिसम्बर 03"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-12-03",
    "start_time_ist": "02:29",
    "end_date": "2027-12-04",
    "end_time_ist": "05:33",
    "state": "उदय (Rise)",
    "source_start": "02:29 ए एम, दिसम्बर 03",
    "source_end": "05:33 ए एम, दिसम्बर 04"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-12-04",
    "start_time_ist": "05:32",
    "end_date": "2027-12-05",
    "end_time_ist": "08:41",
    "state": "उदय (Rise)",
    "source_start": "05:32 ए एम, दिसम्बर 04",
    "source_end": "08:41 ए एम, दिसम्बर 05"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2027-12-05",
    "start_time_ist": "08:41",
    "end_date": "2027-12-06",
    "end_time_ist": "11:40",
    "state": "उदय (Rise)",
    "source_start": "08:41 ए एम, दिसम्बर 05",
    "source_end": "11:40 ए एम, दिसम्बर 06"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2027-12-06",
    "start_time_ist": "11:40",
    "end_date": "2027-12-07",
    "end_time_ist": "14:14",
    "state": "उदय (Rise)",
    "source_start": "11:40 ए एम, दिसम्बर 06",
    "source_end": "02:14 पी एम, दिसम्बर 07"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2027-12-07",
    "start_time_ist": "14:14",
    "end_date": "2027-12-08",
    "end_time_ist": "16:12",
    "state": "उदय (Rise)",
    "source_start": "02:14 पी एम, दिसम्बर 07",
    "source_end": "04:12 पी एम, दिसम्बर 08"
  },
  {
    "nak": "Revati",
    "start_date": "2027-12-08",
    "start_time_ist": "16:12",
    "end_date": "2027-12-09",
    "end_time_ist": "17:27",
    "state": "उदय (Rise)",
    "source_start": "04:12 पी एम, दिसम्बर 08",
    "source_end": "05:27 पी एम, दिसम्बर 09"
  },
  {
    "nak": "Ashwini",
    "start_date": "2027-12-09",
    "start_time_ist": "17:27",
    "end_date": "2027-12-10",
    "end_time_ist": "17:54",
    "state": "उदय (Rise)",
    "source_start": "05:27 पी एम, दिसम्बर 09",
    "source_end": "05:54 पी एम, दिसम्बर 10"
  },
  {
    "nak": "Bharani",
    "start_date": "2027-12-10",
    "start_time_ist": "17:54",
    "end_date": "2027-12-11",
    "end_time_ist": "17:37",
    "state": "उदय (Rise)",
    "source_start": "05:54 पी एम, दिसम्बर 10",
    "source_end": "05:37 पी एम, दिसम्बर 11"
  },
  {
    "nak": "Krittika",
    "start_date": "2027-12-11",
    "start_time_ist": "17:37",
    "end_date": "2027-12-12",
    "end_time_ist": "16:41",
    "state": "उदय (Rise)",
    "source_start": "05:37 पी एम, दिसम्बर 11",
    "source_end": "04:41 पी एम, दिसम्बर 12"
  },
  {
    "nak": "Rohini",
    "start_date": "2027-12-12",
    "start_time_ist": "16:41",
    "end_date": "2027-12-13",
    "end_time_ist": "15:14",
    "state": "उदय (Rise)",
    "source_start": "04:41 पी एम, दिसम्बर 12",
    "source_end": "03:14 पी एम, दिसम्बर 13"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2027-12-13",
    "start_time_ist": "15:14",
    "end_date": "2027-12-14",
    "end_time_ist": "13:24",
    "state": "उदय (Rise)",
    "source_start": "03:14 पी एम, दिसम्बर 13",
    "source_end": "01:24 पी एम, दिसम्बर 14"
  },
  {
    "nak": "Ardra",
    "start_date": "2027-12-14",
    "start_time_ist": "13:24",
    "end_date": "2027-12-15",
    "end_time_ist": "11:21",
    "state": "उदय (Rise)",
    "source_start": "01:24 पी एम, दिसम्बर 14",
    "source_end": "11:21 ए एम, दिसम्बर 15"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2027-12-15",
    "start_time_ist": "11:21",
    "end_date": "2027-12-16",
    "end_time_ist": "09:12",
    "state": "उदय (Rise)",
    "source_start": "11:21 ए एम, दिसम्बर 15",
    "source_end": "09:12 ए एम, दिसम्बर 16"
  },
  {
    "nak": "Pushya",
    "start_date": "2027-12-16",
    "start_time_ist": "09:12",
    "end_date": "2027-12-17",
    "end_time_ist": "07:07",
    "state": "उदय (Rise)",
    "source_start": "09:12 ए एम, दिसम्बर 16",
    "source_end": "07:07 ए एम, दिसम्बर 17"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2027-12-17",
    "start_time_ist": "07:07",
    "end_date": "2027-12-18",
    "end_time_ist": "05:11",
    "state": "उदय (Rise)",
    "source_start": "07:07 ए एम, दिसम्बर 17",
    "source_end": "05:11 ए एम, दिसम्बर 18"
  },
  {
    "nak": "Magha",
    "start_date": "2027-12-18",
    "start_time_ist": "05:11",
    "end_date": "2027-12-19",
    "end_time_ist": "03:30",
    "state": "उदय (Rise)",
    "source_start": "05:11 ए एम, दिसम्बर 18",
    "source_end": "03:30 ए एम, दिसम्बर 19"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2027-12-19",
    "start_time_ist": "03:30",
    "end_date": "2027-12-20",
    "end_time_ist": "02:06",
    "state": "उदय (Rise)",
    "source_start": "03:30 ए एम, दिसम्बर 19",
    "source_end": "02:06 ए एम, दिसम्बर 20"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2027-12-20",
    "start_time_ist": "02:06",
    "end_date": "2027-12-21",
    "end_time_ist": "01:04",
    "state": "उदय (Rise)",
    "source_start": "02:06 ए एम, दिसम्बर 20",
    "source_end": "01:04 ए एम, दिसम्बर 21"
  },
  {
    "nak": "Hasta",
    "start_date": "2027-12-21",
    "start_time_ist": "01:04",
    "end_date": "2027-12-22",
    "end_time_ist": "00:25",
    "state": "उदय (Rise)",
    "source_start": "01:04 ए एम, दिसम्बर 21",
    "source_end": "12:25 ए एम, दिसम्बर 22"
  },
  {
    "nak": "Chitra",
    "start_date": "2027-12-22",
    "start_time_ist": "00:25",
    "end_date": "2027-12-23",
    "end_time_ist": "00:09",
    "state": "उदय (Rise)",
    "source_start": "12:25 ए एम, दिसम्बर 22",
    "source_end": "12:09 ए एम, दिसम्बर 23"
  },
  {
    "nak": "Swati",
    "start_date": "2027-12-23",
    "start_time_ist": "00:08",
    "end_date": "2027-12-24",
    "end_time_ist": "00:17",
    "state": "उदय (Rise)",
    "source_start": "12:08 ए एम, दिसम्बर 23",
    "source_end": "12:17 ए एम, दिसम्बर 24"
  },
  {
    "nak": "Vishakha",
    "start_date": "2027-12-24",
    "start_time_ist": "00:17",
    "end_date": "2027-12-25",
    "end_time_ist": "00:50",
    "state": "उदय (Rise)",
    "source_start": "12:17 ए एम, दिसम्बर 24",
    "source_end": "12:50 ए एम, दिसम्बर 25"
  },
  {
    "nak": "Anuradha",
    "start_date": "2027-12-25",
    "start_time_ist": "00:50",
    "end_date": "2027-12-26",
    "end_time_ist": "01:49",
    "state": "उदय (Rise)",
    "source_start": "12:50 ए एम, दिसम्बर 25",
    "source_end": "01:49 ए एम, दिसम्बर 26"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2027-12-26",
    "start_time_ist": "01:49",
    "end_date": "2027-12-27",
    "end_time_ist": "03:14",
    "state": "उदय (Rise)",
    "source_start": "01:49 ए एम, दिसम्बर 26",
    "source_end": "03:14 ए एम, दिसम्बर 27"
  },
  {
    "nak": "Mula",
    "start_date": "2027-12-27",
    "start_time_ist": "03:14",
    "end_date": "2027-12-28",
    "end_time_ist": "05:06",
    "state": "उदय (Rise)",
    "source_start": "03:14 ए एम, दिसम्बर 27",
    "source_end": "05:06 ए एम, दिसम्बर 28"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2027-12-28",
    "start_time_ist": "05:06",
    "end_date": "2027-12-29",
    "end_time_ist": "07:25",
    "state": "उदय (Rise)",
    "source_start": "05:06 ए एम, दिसम्बर 28",
    "source_end": "07:25 ए एम, दिसम्बर 29"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2027-12-29",
    "start_time_ist": "07:25",
    "end_date": "2027-12-30",
    "end_time_ist": "10:06",
    "state": "उदय (Rise)",
    "source_start": "07:25 ए एम, दिसम्बर 29",
    "source_end": "10:06 ए एम, दिसम्बर 30"
  },
  {
    "nak": "Shravana",
    "start_date": "2027-12-30",
    "start_time_ist": "10:06",
    "end_date": "2027-12-31",
    "end_time_ist": "13:06",
    "state": "उदय (Rise)",
    "source_start": "10:06 ए एम, दिसम्बर 30",
    "source_end": "01:06 पी एम, दिसम्बर 31"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-12-31",
    "start_time_ist": "13:06",
    "end_date": "2028-01-01",
    "end_time_ist": "16:14",
    "state": "उदय (Rise)",
    "source_start": "01:06 पी एम, दिसम्बर 31",
    "source_end": "04:14 पी एम, जनवरी 01"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2027-12-31",
    "start_time_ist": "13:06",
    "end_date": "2028-01-01",
    "end_time_ist": "16:14",
    "state": "उदय (Rise)",
    "source_start": "01:06 पी एम, दिसम्बर 31",
    "source_end": "04:14 पी एम, जनवरी 01"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-01-01",
    "start_time_ist": "16:14",
    "end_date": "2028-01-02",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "04:14 पी एम, जनवरी 01",
    "source_end": "07:22 पी एम, जनवरी 02"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-01-02",
    "start_time_ist": "19:22",
    "end_date": "2028-01-03",
    "end_time_ist": "22:15",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, जनवरी 02",
    "source_end": "10:15 पी एम, जनवरी 03"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-01-03",
    "start_time_ist": "22:15",
    "end_date": "2028-01-05",
    "end_time_ist": "00:42",
    "state": "उदय (Rise)",
    "source_start": "10:15 पी एम, जनवरी 03",
    "source_end": "12:42 ए एम, जनवरी 05"
  },
  {
    "nak": "Revati",
    "start_date": "2028-01-05",
    "start_time_ist": "00:42",
    "end_date": "2028-01-06",
    "end_time_ist": "02:31",
    "state": "उदय (Rise)",
    "source_start": "12:42 ए एम, जनवरी 05",
    "source_end": "02:31 ए एम, जनवरी 06"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-01-06",
    "start_time_ist": "02:31",
    "end_date": "2028-01-07",
    "end_time_ist": "03:35",
    "state": "उदय (Rise)",
    "source_start": "02:31 ए एम, जनवरी 06",
    "source_end": "03:35 ए एम, जनवरी 07"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-01-07",
    "start_time_ist": "03:35",
    "end_date": "2028-01-08",
    "end_time_ist": "03:51",
    "state": "उदय (Rise)",
    "source_start": "03:35 ए एम, जनवरी 07",
    "source_end": "03:51 ए एम, जनवरी 08"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-01-08",
    "start_time_ist": "03:51",
    "end_date": "2028-01-09",
    "end_time_ist": "03:20",
    "state": "उदय (Rise)",
    "source_start": "03:51 ए एम, जनवरी 08",
    "source_end": "03:20 ए एम, जनवरी 09"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-01-09",
    "start_time_ist": "03:20",
    "end_date": "2028-01-10",
    "end_time_ist": "02:05",
    "state": "उदय (Rise)",
    "source_start": "03:20 ए एम, जनवरी 09",
    "source_end": "02:05 ए एम, जनवरी 10"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-01-10",
    "start_time_ist": "02:05",
    "end_date": "2028-01-11",
    "end_time_ist": "00:15",
    "state": "उदय (Rise)",
    "source_start": "02:05 ए एम, जनवरी 10",
    "source_end": "12:15 ए एम, जनवरी 11"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-01-11",
    "start_time_ist": "00:15",
    "end_date": "2028-01-11",
    "end_time_ist": "21:57",
    "state": "उदय (Rise)",
    "source_start": "12:15 ए एम, जनवरी 11",
    "source_end": "09:57 पी एम, जनवरी 11"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-01-11",
    "start_time_ist": "21:57",
    "end_date": "2028-01-12",
    "end_time_ist": "19:21",
    "state": "उदय (Rise)",
    "source_start": "09:57 पी एम, जनवरी 11",
    "source_end": "07:21 पी एम, जनवरी 12"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-01-12",
    "start_time_ist": "19:21",
    "end_date": "2028-01-13",
    "end_time_ist": "16:37",
    "state": "उदय (Rise)",
    "source_start": "07:21 पी एम, जनवरी 12",
    "source_end": "04:37 पी एम, जनवरी 13"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-01-13",
    "start_time_ist": "16:37",
    "end_date": "2028-01-14",
    "end_time_ist": "13:55",
    "state": "उदय (Rise)",
    "source_start": "04:37 पी एम, जनवरी 13",
    "source_end": "01:55 पी एम, जनवरी 14"
  },
  {
    "nak": "Magha",
    "start_date": "2028-01-14",
    "start_time_ist": "13:55",
    "end_date": "2028-01-15",
    "end_time_ist": "11:25",
    "state": "उदय (Rise)",
    "source_start": "01:55 पी एम, जनवरी 14",
    "source_end": "11:25 ए एम, जनवरी 15"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-01-15",
    "start_time_ist": "11:25",
    "end_date": "2028-01-16",
    "end_time_ist": "09:14",
    "state": "उदय (Rise)",
    "source_start": "11:25 ए एम, जनवरी 15",
    "source_end": "09:14 ए एम, जनवरी 16"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-01-16",
    "start_time_ist": "09:14",
    "end_date": "2028-01-17",
    "end_time_ist": "07:30",
    "state": "उदय (Rise)",
    "source_start": "09:14 ए एम, जनवरी 16",
    "source_end": "07:30 ए एम, जनवरी 17"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-01-17",
    "start_time_ist": "07:30",
    "end_date": "2028-01-18",
    "end_time_ist": "06:18",
    "state": "उदय (Rise)",
    "source_start": "07:30 ए एम, जनवरी 17",
    "source_end": "06:18 ए एम, जनवरी 18"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-01-18",
    "start_time_ist": "06:18",
    "end_date": "2028-01-19",
    "end_time_ist": "05:42",
    "state": "उदय (Rise)",
    "source_start": "06:18 ए एम, जनवरी 18",
    "source_end": "05:42 ए एम, जनवरी 19"
  },
  {
    "nak": "Swati",
    "start_date": "2028-01-19",
    "start_time_ist": "05:42",
    "end_date": "2028-01-20",
    "end_time_ist": "05:44",
    "state": "उदय (Rise)",
    "source_start": "05:42 ए एम, जनवरी 19",
    "source_end": "05:44 ए एम, जनवरी 20"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-01-20",
    "start_time_ist": "05:44",
    "end_date": "2028-01-21",
    "end_time_ist": "06:22",
    "state": "उदय (Rise)",
    "source_start": "05:44 ए एम, जनवरी 20",
    "source_end": "06:22 ए एम, जनवरी 21"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-01-21",
    "start_time_ist": "06:22",
    "end_date": "2028-01-22",
    "end_time_ist": "07:34",
    "state": "उदय (Rise)",
    "source_start": "06:22 ए एम, जनवरी 21",
    "source_end": "07:34 ए एम, जनवरी 22"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-01-22",
    "start_time_ist": "07:34",
    "end_date": "2028-01-23",
    "end_time_ist": "09:17",
    "state": "उदय (Rise)",
    "source_start": "07:34 ए एम, जनवरी 22",
    "source_end": "09:17 ए एम, जनवरी 23"
  },
  {
    "nak": "Mula",
    "start_date": "2028-01-23",
    "start_time_ist": "09:17",
    "end_date": "2028-01-24",
    "end_time_ist": "11:27",
    "state": "उदय (Rise)",
    "source_start": "09:17 ए एम, जनवरी 23",
    "source_end": "11:27 ए एम, जनवरी 24"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-01-24",
    "start_time_ist": "11:27",
    "end_date": "2028-01-25",
    "end_time_ist": "13:59",
    "state": "उदय (Rise)",
    "source_start": "11:27 ए एम, जनवरी 24",
    "source_end": "01:59 पी एम, जनवरी 25"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-01-25",
    "start_time_ist": "13:59",
    "end_date": "2028-01-26",
    "end_time_ist": "16:48",
    "state": "उदय (Rise)",
    "source_start": "01:59 पी एम, जनवरी 25",
    "source_end": "04:48 पी एम, जनवरी 26"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-01-26",
    "start_time_ist": "16:48",
    "end_date": "2028-01-27",
    "end_time_ist": "19:48",
    "state": "उदय (Rise)",
    "source_start": "04:48 पी एम, जनवरी 26",
    "source_end": "07:48 पी एम, जनवरी 27"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-01-27",
    "start_time_ist": "19:48",
    "end_date": "2028-01-28",
    "end_time_ist": "22:55",
    "state": "उदय (Rise)",
    "source_start": "07:48 पी एम, जनवरी 27",
    "source_end": "10:55 पी एम, जनवरी 28"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-01-28",
    "start_time_ist": "22:55",
    "end_date": "2028-01-30",
    "end_time_ist": "02:02",
    "state": "उदय (Rise)",
    "source_start": "10:55 पी एम, जनवरी 28",
    "source_end": "02:02 ए एम, जनवरी 30"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-01-30",
    "start_time_ist": "02:02",
    "end_date": "2028-01-31",
    "end_time_ist": "05:00",
    "state": "उदय (Rise)",
    "source_start": "02:02 ए एम, जनवरी 30",
    "source_end": "05:00 ए एम, जनवरी 31"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-01-31",
    "start_time_ist": "05:00",
    "end_date": "2028-02-01",
    "end_time_ist": "07:42",
    "state": "उदय (Rise)",
    "source_start": "05:00 ए एम, जनवरी 31",
    "source_end": "07:42 ए एम, फरवरी 01"
  },
  {
    "nak": "Revati",
    "start_date": "2028-02-01",
    "start_time_ist": "07:42",
    "end_date": "2028-02-02",
    "end_time_ist": "09:57",
    "state": "उदय (Rise)",
    "source_start": "07:42 ए एम, फरवरी 01",
    "source_end": "09:57 ए एम, फरवरी 02"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-02-02",
    "start_time_ist": "09:57",
    "end_date": "2028-02-03",
    "end_time_ist": "11:39",
    "state": "उदय (Rise)",
    "source_start": "09:57 ए एम, फरवरी 02",
    "source_end": "11:39 ए एम, फरवरी 03"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-02-03",
    "start_time_ist": "11:39",
    "end_date": "2028-02-04",
    "end_time_ist": "12:39",
    "state": "उदय (Rise)",
    "source_start": "11:39 ए एम, फरवरी 03",
    "source_end": "12:39 पी एम, फरवरी 04"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-02-04",
    "start_time_ist": "12:39",
    "end_date": "2028-02-05",
    "end_time_ist": "12:54",
    "state": "उदय (Rise)",
    "source_start": "12:39 पी एम, फरवरी 04",
    "source_end": "12:54 पी एम, फरवरी 05"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-02-05",
    "start_time_ist": "12:54",
    "end_date": "2028-02-06",
    "end_time_ist": "12:23",
    "state": "उदय (Rise)",
    "source_start": "12:54 पी एम, फरवरी 05",
    "source_end": "12:23 पी एम, फरवरी 06"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-02-06",
    "start_time_ist": "12:23",
    "end_date": "2028-02-07",
    "end_time_ist": "11:09",
    "state": "उदय (Rise)",
    "source_start": "12:23 पी एम, फरवरी 06",
    "source_end": "11:09 ए एम, फरवरी 07"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-02-07",
    "start_time_ist": "11:09",
    "end_date": "2028-02-08",
    "end_time_ist": "09:15",
    "state": "उदय (Rise)",
    "source_start": "11:09 ए एम, फरवरी 07",
    "source_end": "09:15 ए एम, फरवरी 08"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-02-08",
    "start_time_ist": "09:15",
    "end_date": "2028-02-09",
    "end_time_ist": "06:50",
    "state": "उदय (Rise)",
    "source_start": "09:15 ए एम, फरवरी 08",
    "source_end": "06:50 ए एम, फरवरी 09"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-02-09",
    "start_time_ist": "06:50",
    "end_date": "2028-02-10",
    "end_time_ist": "04:02",
    "state": "उदय (Rise)",
    "source_start": "06:50 ए एम, फरवरी 09",
    "source_end": "04:02 ए एम, फरवरी 10"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-02-10",
    "start_time_ist": "04:02",
    "end_date": "2028-02-11",
    "end_time_ist": "01:02",
    "state": "उदय (Rise)",
    "source_start": "04:02 ए एम, फरवरी 10",
    "source_end": "01:02 ए एम, फरवरी 11"
  },
  {
    "nak": "Magha",
    "start_date": "2028-02-11",
    "start_time_ist": "01:02",
    "end_date": "2028-02-11",
    "end_time_ist": "22:01",
    "state": "उदय (Rise)",
    "source_start": "01:02 ए एम, फरवरी 11",
    "source_end": "10:01 पी एम, फरवरी 11"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-02-11",
    "start_time_ist": "22:01",
    "end_date": "2028-02-12",
    "end_time_ist": "19:08",
    "state": "उदय (Rise)",
    "source_start": "10:01 पी एम, फरवरी 11",
    "source_end": "07:08 पी एम, फरवरी 12"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-02-12",
    "start_time_ist": "19:08",
    "end_date": "2028-02-13",
    "end_time_ist": "16:35",
    "state": "उदय (Rise)",
    "source_start": "07:08 पी एम, फरवरी 12",
    "source_end": "04:35 पी एम, फरवरी 13"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-02-13",
    "start_time_ist": "16:35",
    "end_date": "2028-02-14",
    "end_time_ist": "14:32",
    "state": "उदय (Rise)",
    "source_start": "04:35 पी एम, फरवरी 13",
    "source_end": "02:32 पी एम, फरवरी 14"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-02-14",
    "start_time_ist": "14:32",
    "end_date": "2028-02-15",
    "end_time_ist": "13:07",
    "state": "उदय (Rise)",
    "source_start": "02:32 पी एम, फरवरी 14",
    "source_end": "01:07 पी एम, फरवरी 15"
  },
  {
    "nak": "Swati",
    "start_date": "2028-02-15",
    "start_time_ist": "13:07",
    "end_date": "2028-02-16",
    "end_time_ist": "12:26",
    "state": "उदय (Rise)",
    "source_start": "01:07 पी एम, फरवरी 15",
    "source_end": "12:26 पी एम, फरवरी 16"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-02-16",
    "start_time_ist": "12:26",
    "end_date": "2028-02-17",
    "end_time_ist": "12:32",
    "state": "उदय (Rise)",
    "source_start": "12:26 पी एम, फरवरी 16",
    "source_end": "12:32 पी एम, फरवरी 17"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-02-17",
    "start_time_ist": "12:32",
    "end_date": "2028-02-18",
    "end_time_ist": "13:25",
    "state": "उदय (Rise)",
    "source_start": "12:32 पी एम, फरवरी 17",
    "source_end": "01:25 पी एम, फरवरी 18"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-02-18",
    "start_time_ist": "13:25",
    "end_date": "2028-02-19",
    "end_time_ist": "15:01",
    "state": "उदय (Rise)",
    "source_start": "01:25 पी एम, फरवरी 18",
    "source_end": "03:01 पी एम, फरवरी 19"
  },
  {
    "nak": "Mula",
    "start_date": "2028-02-19",
    "start_time_ist": "15:01",
    "end_date": "2028-02-20",
    "end_time_ist": "17:13",
    "state": "उदय (Rise)",
    "source_start": "03:01 पी एम, फरवरी 19",
    "source_end": "05:13 पी एम, फरवरी 20"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-02-20",
    "start_time_ist": "17:13",
    "end_date": "2028-02-21",
    "end_time_ist": "19:53",
    "state": "उदय (Rise)",
    "source_start": "05:13 पी एम, फरवरी 20",
    "source_end": "07:53 पी एम, फरवरी 21"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-02-21",
    "start_time_ist": "19:53",
    "end_date": "2028-02-22",
    "end_time_ist": "22:50",
    "state": "उदय (Rise)",
    "source_start": "07:53 पी एम, फरवरी 21",
    "source_end": "10:50 पी एम, फरवरी 22"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-02-22",
    "start_time_ist": "22:50",
    "end_date": "2028-02-24",
    "end_time_ist": "01:57",
    "state": "उदय (Rise)",
    "source_start": "10:50 पी एम, फरवरी 22",
    "source_end": "01:57 ए एम, फरवरी 24"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-02-24",
    "start_time_ist": "01:57",
    "end_date": "2028-02-25",
    "end_time_ist": "05:05",
    "state": "उदय (Rise)",
    "source_start": "01:57 ए एम, फरवरी 24",
    "source_end": "05:05 ए एम, फरवरी 25"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-02-25",
    "start_time_ist": "05:05",
    "end_date": "2028-02-26",
    "end_time_ist": "08:08",
    "state": "उदय (Rise)",
    "source_start": "05:05 ए एम, फरवरी 25",
    "source_end": "08:08 ए एम, फरवरी 26"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-02-26",
    "start_time_ist": "08:08",
    "end_date": "2028-02-27",
    "end_time_ist": "11:01",
    "state": "उदय (Rise)",
    "source_start": "08:08 ए एम, फरवरी 26",
    "source_end": "11:01 ए एम, फरवरी 27"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-02-27",
    "start_time_ist": "11:01",
    "end_date": "2028-02-28",
    "end_time_ist": "13:39",
    "state": "उदय (Rise)",
    "source_start": "11:01 ए एम, फरवरी 27",
    "source_end": "01:39 पी एम, फरवरी 28"
  },
  {
    "nak": "Revati",
    "start_date": "2028-02-28",
    "start_time_ist": "13:39",
    "end_date": "2028-02-29",
    "end_time_ist": "15:58",
    "state": "उदय (Rise)",
    "source_start": "01:39 पी एम, फरवरी 28",
    "source_end": "03:58 पी एम, फरवरी 29"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-02-29",
    "start_time_ist": "15:58",
    "end_date": "2028-03-01",
    "end_time_ist": "17:52",
    "state": "उदय (Rise)",
    "source_start": "03:58 पी एम, फरवरी 29",
    "source_end": "05:52 पी एम, मार्च 01"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-03-01",
    "start_time_ist": "17:52",
    "end_date": "2028-03-02",
    "end_time_ist": "19:18",
    "state": "उदय (Rise)",
    "source_start": "05:52 पी एम, मार्च 01",
    "source_end": "07:18 पी एम, मार्च 02"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-03-02",
    "start_time_ist": "19:18",
    "end_date": "2028-03-03",
    "end_time_ist": "20:10",
    "state": "उदय (Rise)",
    "source_start": "07:18 पी एम, मार्च 02",
    "source_end": "08:10 पी एम, मार्च 03"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-03-03",
    "start_time_ist": "20:10",
    "end_date": "2028-03-04",
    "end_time_ist": "20:25",
    "state": "उदय (Rise)",
    "source_start": "08:10 पी एम, मार्च 03",
    "source_end": "08:25 पी एम, मार्च 04"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-03-04",
    "start_time_ist": "20:25",
    "end_date": "2028-03-05",
    "end_time_ist": "20:00",
    "state": "उदय (Rise)",
    "source_start": "08:25 पी एम, मार्च 04",
    "source_end": "08:00 पी एम, मार्च 05"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-03-05",
    "start_time_ist": "20:00",
    "end_date": "2028-03-06",
    "end_time_ist": "18:55",
    "state": "उदय (Rise)",
    "source_start": "08:00 पी एम, मार्च 05",
    "source_end": "06:55 पी एम, मार्च 06"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-03-06",
    "start_time_ist": "18:55",
    "end_date": "2028-03-07",
    "end_time_ist": "17:13",
    "state": "उदय (Rise)",
    "source_start": "06:55 पी एम, मार्च 06",
    "source_end": "05:13 पी एम, मार्च 07"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-03-07",
    "start_time_ist": "17:13",
    "end_date": "2028-03-08",
    "end_time_ist": "15:00",
    "state": "उदय (Rise)",
    "source_start": "05:13 पी एम, मार्च 07",
    "source_end": "03:00 पी एम, मार्च 08"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-03-08",
    "start_time_ist": "15:00",
    "end_date": "2028-03-09",
    "end_time_ist": "12:22",
    "state": "उदय (Rise)",
    "source_start": "03:00 पी एम, मार्च 08",
    "source_end": "12:22 पी एम, मार्च 09"
  },
  {
    "nak": "Magha",
    "start_date": "2028-03-09",
    "start_time_ist": "12:22",
    "end_date": "2028-03-10",
    "end_time_ist": "09:28",
    "state": "उदय (Rise)",
    "source_start": "12:22 पी एम, मार्च 09",
    "source_end": "09:28 ए एम, मार्च 10"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-03-10",
    "start_time_ist": "09:28",
    "end_date": "2028-03-11",
    "end_time_ist": "06:29",
    "state": "उदय (Rise)",
    "source_start": "09:28 ए एम, मार्च 10",
    "source_end": "06:29 ए एम, मार्च 11"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-03-11",
    "start_time_ist": "06:29",
    "end_date": "2028-03-12",
    "end_time_ist": "03:36",
    "state": "उदय (Rise)",
    "source_start": "06:29 ए एम, मार्च 11",
    "source_end": "03:36 ए एम, मार्च 12"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-03-12",
    "start_time_ist": "03:36",
    "end_date": "2028-03-13",
    "end_time_ist": "01:01",
    "state": "उदय (Rise)",
    "source_start": "03:36 ए एम, मार्च 12",
    "source_end": "01:01 ए एम, मार्च 13"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-03-13",
    "start_time_ist": "01:01",
    "end_date": "2028-03-13",
    "end_time_ist": "22:54",
    "state": "उदय (Rise)",
    "source_start": "01:01 ए एम, मार्च 13",
    "source_end": "10:54 पी एम, मार्च 13"
  },
  {
    "nak": "Swati",
    "start_date": "2028-03-13",
    "start_time_ist": "22:54",
    "end_date": "2028-03-14",
    "end_time_ist": "21:26",
    "state": "उदय (Rise)",
    "source_start": "10:54 पी एम, मार्च 13",
    "source_end": "09:26 पी एम, मार्च 14"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-03-14",
    "start_time_ist": "21:26",
    "end_date": "2028-03-15",
    "end_time_ist": "20:44",
    "state": "उदय (Rise)",
    "source_start": "09:26 पी एम, मार्च 14",
    "source_end": "08:44 पी एम, मार्च 15"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-03-15",
    "start_time_ist": "20:44",
    "end_date": "2028-03-16",
    "end_time_ist": "20:53",
    "state": "उदय (Rise)",
    "source_start": "08:44 पी एम, मार्च 15",
    "source_end": "08:53 पी एम, मार्च 16"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-03-16",
    "start_time_ist": "20:53",
    "end_date": "2028-03-17",
    "end_time_ist": "21:54",
    "state": "उदय (Rise)",
    "source_start": "08:53 पी एम, मार्च 16",
    "source_end": "09:54 पी एम, मार्च 17"
  },
  {
    "nak": "Mula",
    "start_date": "2028-03-17",
    "start_time_ist": "21:54",
    "end_date": "2028-03-18",
    "end_time_ist": "23:43",
    "state": "उदय (Rise)",
    "source_start": "09:54 पी एम, मार्च 17",
    "source_end": "11:43 पी एम, मार्च 18"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-03-18",
    "start_time_ist": "23:43",
    "end_date": "2028-03-20",
    "end_time_ist": "02:10",
    "state": "उदय (Rise)",
    "source_start": "11:43 पी एम, मार्च 18",
    "source_end": "02:10 ए एम, मार्च 20"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-03-20",
    "start_time_ist": "02:10",
    "end_date": "2028-03-21",
    "end_time_ist": "05:04",
    "state": "उदय (Rise)",
    "source_start": "02:10 ए एम, मार्च 20",
    "source_end": "05:04 ए एम, मार्च 21"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-03-21",
    "start_time_ist": "05:04",
    "end_date": "2028-03-22",
    "end_time_ist": "08:12",
    "state": "उदय (Rise)",
    "source_start": "05:04 ए एम, मार्च 21",
    "source_end": "08:12 ए एम, मार्च 22"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-03-22",
    "start_time_ist": "08:12",
    "end_date": "2028-03-23",
    "end_time_ist": "11:22",
    "state": "उदय (Rise)",
    "source_start": "08:12 ए एम, मार्च 22",
    "source_end": "11:22 ए एम, मार्च 23"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-03-23",
    "start_time_ist": "11:22",
    "end_date": "2028-03-24",
    "end_time_ist": "14:24",
    "state": "उदय (Rise)",
    "source_start": "11:22 ए एम, मार्च 23",
    "source_end": "02:24 पी एम, मार्च 24"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-03-24",
    "start_time_ist": "14:24",
    "end_date": "2028-03-25",
    "end_time_ist": "17:11",
    "state": "उदय (Rise)",
    "source_start": "02:24 पी एम, मार्च 24",
    "source_end": "05:11 पी एम, मार्च 25"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-03-25",
    "start_time_ist": "17:11",
    "end_date": "2028-03-26",
    "end_time_ist": "19:39",
    "state": "उदय (Rise)",
    "source_start": "05:11 पी एम, मार्च 25",
    "source_end": "07:39 पी एम, मार्च 26"
  },
  {
    "nak": "Revati",
    "start_date": "2028-03-26",
    "start_time_ist": "19:39",
    "end_date": "2028-03-27",
    "end_time_ist": "21:45",
    "state": "उदय (Rise)",
    "source_start": "07:39 पी एम, मार्च 26",
    "source_end": "09:45 पी एम, मार्च 27"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-03-27",
    "start_time_ist": "21:45",
    "end_date": "2028-03-28",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "09:45 पी एम, मार्च 27",
    "source_end": "11:29 पी एम, मार्च 28"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-03-28",
    "start_time_ist": "23:29",
    "end_date": "2028-03-30",
    "end_time_ist": "00:50",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, मार्च 28",
    "source_end": "12:50 ए एम, मार्च 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-03-30",
    "start_time_ist": "00:51",
    "end_date": "2028-03-31",
    "end_time_ist": "01:48",
    "state": "उदय (Rise)",
    "source_start": "12:51 ए एम, मार्च 30",
    "source_end": "01:48 ए एम, मार्च 31"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-03-31",
    "start_time_ist": "01:48",
    "end_date": "2028-04-01",
    "end_time_ist": "02:19",
    "state": "उदय (Rise)",
    "source_start": "01:48 ए एम, मार्च 31",
    "source_end": "02:19 ए एम, अप्रैल 01"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-04-01",
    "start_time_ist": "02:19",
    "end_date": "2028-04-02",
    "end_time_ist": "02:22",
    "state": "उदय (Rise)",
    "source_start": "02:19 ए एम, अप्रैल 01",
    "source_end": "02:22 ए एम, अप्रैल 02"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-04-02",
    "start_time_ist": "02:22",
    "end_date": "2028-04-03",
    "end_time_ist": "01:56",
    "state": "उदय (Rise)",
    "source_start": "02:22 ए एम, अप्रैल 02",
    "source_end": "01:56 ए एम, अप्रैल 03"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-04-03",
    "start_time_ist": "01:56",
    "end_date": "2028-04-04",
    "end_time_ist": "01:00",
    "state": "उदय (Rise)",
    "source_start": "01:56 ए एम, अप्रैल 03",
    "source_end": "01:00 ए एम, अप्रैल 04"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-04-04",
    "start_time_ist": "01:00",
    "end_date": "2028-04-04",
    "end_time_ist": "23:34",
    "state": "उदय (Rise)",
    "source_start": "01:00 ए एम, अप्रैल 04",
    "source_end": "11:34 पी एम, अप्रैल 04"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-04-04",
    "start_time_ist": "23:34",
    "end_date": "2028-04-05",
    "end_time_ist": "21:41",
    "state": "उदय (Rise)",
    "source_start": "11:34 पी एम, अप्रैल 04",
    "source_end": "09:41 पी एम, अप्रैल 05"
  },
  {
    "nak": "Magha",
    "start_date": "2028-04-05",
    "start_time_ist": "21:41",
    "end_date": "2028-04-06",
    "end_time_ist": "19:26",
    "state": "उदय (Rise)",
    "source_start": "09:41 पी एम, अप्रैल 05",
    "source_end": "07:26 पी एम, अप्रैल 06"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-04-06",
    "start_time_ist": "19:26",
    "end_date": "2028-04-07",
    "end_time_ist": "16:57",
    "state": "उदय (Rise)",
    "source_start": "07:26 पी एम, अप्रैल 06",
    "source_end": "04:57 पी एम, अप्रैल 07"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-04-07",
    "start_time_ist": "16:57",
    "end_date": "2028-04-08",
    "end_time_ist": "14:22",
    "state": "उदय (Rise)",
    "source_start": "04:57 पी एम, अप्रैल 07",
    "source_end": "02:22 पी एम, अप्रैल 08"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-04-08",
    "start_time_ist": "14:22",
    "end_date": "2028-04-09",
    "end_time_ist": "11:52",
    "state": "उदय (Rise)",
    "source_start": "02:22 पी एम, अप्रैल 08",
    "source_end": "11:52 ए एम, अप्रैल 09"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-04-09",
    "start_time_ist": "11:52",
    "end_date": "2028-04-10",
    "end_time_ist": "09:37",
    "state": "उदय (Rise)",
    "source_start": "11:52 ए एम, अप्रैल 09",
    "source_end": "09:37 ए एम, अप्रैल 10"
  },
  {
    "nak": "Swati",
    "start_date": "2028-04-10",
    "start_time_ist": "09:37",
    "end_date": "2028-04-11",
    "end_time_ist": "07:48",
    "state": "उदय (Rise)",
    "source_start": "09:37 ए एम, अप्रैल 10",
    "source_end": "07:48 ए एम, अप्रैल 11"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-04-11",
    "start_time_ist": "07:48",
    "end_date": "2028-04-12",
    "end_time_ist": "06:36",
    "state": "उदय (Rise)",
    "source_start": "07:48 ए एम, अप्रैल 11",
    "source_end": "06:36 ए एम, अप्रैल 12"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-04-12",
    "start_time_ist": "06:36",
    "end_date": "2028-04-13",
    "end_time_ist": "06:08",
    "state": "उदय (Rise)",
    "source_start": "06:36 ए एम, अप्रैल 12",
    "source_end": "06:08 ए एम, अप्रैल 13"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-04-13",
    "start_time_ist": "06:08",
    "end_date": "2028-04-14",
    "end_time_ist": "06:29",
    "state": "उदय (Rise)",
    "source_start": "06:08 ए एम, अप्रैल 13",
    "source_end": "06:29 ए एम, अप्रैल 14"
  },
  {
    "nak": "Mula",
    "start_date": "2028-04-14",
    "start_time_ist": "06:29",
    "end_date": "2028-04-15",
    "end_time_ist": "07:41",
    "state": "उदय (Rise)",
    "source_start": "06:29 ए एम, अप्रैल 14",
    "source_end": "07:41 ए एम, अप्रैल 15"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-04-15",
    "start_time_ist": "07:41",
    "end_date": "2028-04-16",
    "end_time_ist": "09:38",
    "state": "उदय (Rise)",
    "source_start": "07:41 ए एम, अप्रैल 15",
    "source_end": "09:38 ए एम, अप्रैल 16"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-04-16",
    "start_time_ist": "09:38",
    "end_date": "2028-04-17",
    "end_time_ist": "12:13",
    "state": "उदय (Rise)",
    "source_start": "09:38 ए एम, अप्रैल 16",
    "source_end": "12:13 पी एम, अप्रैल 17"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-04-17",
    "start_time_ist": "12:13",
    "end_date": "2028-04-18",
    "end_time_ist": "15:11",
    "state": "उदय (Rise)",
    "source_start": "12:13 पी एम, अप्रैल 17",
    "source_end": "03:11 पी एम, अप्रैल 18"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-04-18",
    "start_time_ist": "15:11",
    "end_date": "2028-04-19",
    "end_time_ist": "18:19",
    "state": "उदय (Rise)",
    "source_start": "03:11 पी एम, अप्रैल 18",
    "source_end": "06:19 पी एम, अप्रैल 19"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-04-19",
    "start_time_ist": "18:19",
    "end_date": "2028-04-20",
    "end_time_ist": "21:21",
    "state": "उदय (Rise)",
    "source_start": "06:19 पी एम, अप्रैल 19",
    "source_end": "09:21 पी एम, अप्रैल 20"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-04-20",
    "start_time_ist": "21:21",
    "end_date": "2028-04-22",
    "end_time_ist": "00:08",
    "state": "उदय (Rise)",
    "source_start": "09:21 पी एम, अप्रैल 20",
    "source_end": "12:08 ए एम, अप्रैल 22"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-04-22",
    "start_time_ist": "00:08",
    "end_date": "2028-04-23",
    "end_time_ist": "02:31",
    "state": "उदय (Rise)",
    "source_start": "12:08 ए एम, अप्रैल 22",
    "source_end": "02:31 ए एम, अप्रैल 23"
  },
  {
    "nak": "Revati",
    "start_date": "2028-04-23",
    "start_time_ist": "02:31",
    "end_date": "2028-04-24",
    "end_time_ist": "04:26",
    "state": "उदय (Rise)",
    "source_start": "02:31 ए एम, अप्रैल 23",
    "source_end": "04:26 ए एम, अप्रैल 24"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-04-24",
    "start_time_ist": "04:26",
    "end_date": "2028-04-25",
    "end_time_ist": "05:54",
    "state": "उदय (Rise)",
    "source_start": "04:26 ए एम, अप्रैल 24",
    "source_end": "05:54 ए एम, अप्रैल 25"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-04-25",
    "start_time_ist": "05:54",
    "end_date": "2028-04-26",
    "end_time_ist": "06:56",
    "state": "उदय (Rise)",
    "source_start": "05:54 ए एम, अप्रैल 25",
    "source_end": "06:56 ए एम, अप्रैल 26"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-04-26",
    "start_time_ist": "06:56",
    "end_date": "2028-04-27",
    "end_time_ist": "07:33",
    "state": "उदय (Rise)",
    "source_start": "06:56 ए एम, अप्रैल 26",
    "source_end": "07:33 ए एम, अप्रैल 27"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-04-27",
    "start_time_ist": "07:33",
    "end_date": "2028-04-28",
    "end_time_ist": "07:49",
    "state": "उदय (Rise)",
    "source_start": "07:33 ए एम, अप्रैल 27",
    "source_end": "07:49 ए एम, अप्रैल 28"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-04-28",
    "start_time_ist": "07:49",
    "end_date": "2028-04-29",
    "end_time_ist": "07:46",
    "state": "उदय (Rise)",
    "source_start": "07:49 ए एम, अप्रैल 28",
    "source_end": "07:46 ए एम, अप्रैल 29"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-04-29",
    "start_time_ist": "07:46",
    "end_date": "2028-04-30",
    "end_time_ist": "07:23",
    "state": "उदय (Rise)",
    "source_start": "07:46 ए एम, अप्रैल 29",
    "source_end": "07:23 ए एम, अप्रैल 30"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-04-30",
    "start_time_ist": "07:23",
    "end_date": "2028-05-01",
    "end_time_ist": "06:41",
    "state": "उदय (Rise)",
    "source_start": "07:23 ए एम, अप्रैल 30",
    "source_end": "06:41 ए एम, मई 01"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-05-01",
    "start_time_ist": "06:41",
    "end_date": "2028-05-02",
    "end_time_ist": "05:41",
    "state": "उदय (Rise)",
    "source_start": "06:41 ए एम, मई 01",
    "source_end": "05:41 ए एम, मई 02"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-05-02",
    "start_time_ist": "05:41",
    "end_date": "2028-05-03",
    "end_time_ist": "04:23",
    "state": "उदय (Rise)",
    "source_start": "05:41 ए एम, मई 02",
    "source_end": "04:23 ए एम, मई 03"
  },
  {
    "nak": "Magha",
    "start_date": "2028-05-03",
    "start_time_ist": "04:23",
    "end_date": "2028-05-04",
    "end_time_ist": "02:49",
    "state": "उदय (Rise)",
    "source_start": "04:23 ए एम, मई 03",
    "source_end": "02:49 ए एम, मई 04"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-05-04",
    "start_time_ist": "02:49",
    "end_date": "2028-05-05",
    "end_time_ist": "01:01",
    "state": "उदय (Rise)",
    "source_start": "02:49 ए एम, मई 04",
    "source_end": "01:01 ए एम, मई 05"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-05-05",
    "start_time_ist": "01:01",
    "end_date": "2028-05-05",
    "end_time_ist": "23:05",
    "state": "उदय (Rise)",
    "source_start": "01:01 ए एम, मई 05",
    "source_end": "11:05 पी एम, मई 05"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-05-05",
    "start_time_ist": "23:05",
    "end_date": "2028-05-06",
    "end_time_ist": "21:08",
    "state": "उदय (Rise)",
    "source_start": "11:05 पी एम, मई 05",
    "source_end": "09:08 पी एम, मई 06"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-05-06",
    "start_time_ist": "21:08",
    "end_date": "2028-05-07",
    "end_time_ist": "19:17",
    "state": "उदय (Rise)",
    "source_start": "09:08 पी एम, मई 06",
    "source_end": "07:17 पी एम, मई 07"
  },
  {
    "nak": "Swati",
    "start_date": "2028-05-07",
    "start_time_ist": "19:17",
    "end_date": "2028-05-08",
    "end_time_ist": "17:42",
    "state": "उदय (Rise)",
    "source_start": "07:17 पी एम, मई 07",
    "source_end": "05:42 पी एम, मई 08"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-05-08",
    "start_time_ist": "17:42",
    "end_date": "2028-05-09",
    "end_time_ist": "16:31",
    "state": "उदय (Rise)",
    "source_start": "05:42 पी एम, मई 08",
    "source_end": "04:31 पी एम, मई 09"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-05-09",
    "start_time_ist": "16:31",
    "end_date": "2028-05-10",
    "end_time_ist": "15:53",
    "state": "उदय (Rise)",
    "source_start": "04:31 पी एम, मई 09",
    "source_end": "03:53 पी एम, मई 10"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-05-10",
    "start_time_ist": "15:53",
    "end_date": "2028-05-11",
    "end_time_ist": "15:55",
    "state": "उदय (Rise)",
    "source_start": "03:53 पी एम, मई 10",
    "source_end": "03:55 पी एम, मई 11"
  },
  {
    "nak": "Mula",
    "start_date": "2028-05-11",
    "start_time_ist": "15:55",
    "end_date": "2028-05-12",
    "end_time_ist": "16:41",
    "state": "उदय (Rise)",
    "source_start": "03:55 पी एम, मई 11",
    "source_end": "04:41 पी एम, मई 12"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-05-12",
    "start_time_ist": "16:41",
    "end_date": "2028-05-13",
    "end_time_ist": "18:11",
    "state": "उदय (Rise)",
    "source_start": "04:41 पी एम, मई 12",
    "source_end": "06:11 पी एम, मई 13"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-05-13",
    "start_time_ist": "18:11",
    "end_date": "2028-05-14",
    "end_time_ist": "20:21",
    "state": "उदय (Rise)",
    "source_start": "06:11 पी एम, मई 13",
    "source_end": "08:21 पी एम, मई 14"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-05-14",
    "start_time_ist": "20:21",
    "end_date": "2028-05-15",
    "end_time_ist": "23:02",
    "state": "उदय (Rise)",
    "source_start": "08:21 पी एम, मई 14",
    "source_end": "11:02 पी एम, मई 15"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-05-15",
    "start_time_ist": "23:02",
    "end_date": "2028-05-17",
    "end_time_ist": "02:00",
    "state": "उदय (Rise)",
    "source_start": "11:02 पी एम, मई 15",
    "source_end": "02:00 ए एम, मई 17"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-05-17",
    "start_time_ist": "02:00",
    "end_date": "2028-05-18",
    "end_time_ist": "05:02",
    "state": "उदय (Rise)",
    "source_start": "02:00 ए एम, मई 17",
    "source_end": "05:02 ए एम, मई 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-05-18",
    "start_time_ist": "05:02",
    "end_date": "2028-05-19",
    "end_time_ist": "07:53",
    "state": "उदय (Rise)",
    "source_start": "05:02 ए एम, मई 18",
    "source_end": "07:53 ए एम, मई 19"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-05-19",
    "start_time_ist": "07:53",
    "end_date": "2028-05-20",
    "end_time_ist": "10:21",
    "state": "उदय (Rise)",
    "source_start": "07:53 ए एम, मई 19",
    "source_end": "10:21 ए एम, मई 20"
  },
  {
    "nak": "Revati",
    "start_date": "2028-05-20",
    "start_time_ist": "10:21",
    "end_date": "2028-05-21",
    "end_time_ist": "12:18",
    "state": "उदय (Rise)",
    "source_start": "10:21 ए एम, मई 20",
    "source_end": "12:18 पी एम, मई 21"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-05-21",
    "start_time_ist": "12:18",
    "end_date": "2028-05-22",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "12:18 पी एम, मई 21",
    "source_end": "01:40 पी एम, मई 22"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-05-22",
    "start_time_ist": "13:40",
    "end_date": "2028-05-23",
    "end_time_ist": "14:29",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, मई 22",
    "source_end": "02:29 पी एम, मई 23"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-05-23",
    "start_time_ist": "14:29",
    "end_date": "2028-05-24",
    "end_time_ist": "14:47",
    "state": "उदय (Rise)",
    "source_start": "02:29 पी एम, मई 23",
    "source_end": "02:47 पी एम, मई 24"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-05-24",
    "start_time_ist": "14:47",
    "end_date": "2028-05-25",
    "end_time_ist": "14:38",
    "state": "उदय (Rise)",
    "source_start": "02:47 पी एम, मई 24",
    "source_end": "02:38 पी एम, मई 25"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-05-25",
    "start_time_ist": "14:38",
    "end_date": "2028-05-26",
    "end_time_ist": "14:06",
    "state": "उदय (Rise)",
    "source_start": "02:38 पी एम, मई 25",
    "source_end": "02:06 पी एम, मई 26"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-05-26",
    "start_time_ist": "14:06",
    "end_date": "2028-05-27",
    "end_time_ist": "13:18",
    "state": "उदय (Rise)",
    "source_start": "02:06 पी एम, मई 26",
    "source_end": "01:18 पी एम, मई 27"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-05-27",
    "start_time_ist": "13:18",
    "end_date": "2028-05-28",
    "end_time_ist": "12:16",
    "state": "उदय (Rise)",
    "source_start": "01:18 पी एम, मई 27",
    "source_end": "12:16 पी एम, मई 28"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-05-28",
    "start_time_ist": "12:16",
    "end_date": "2028-05-29",
    "end_time_ist": "11:05",
    "state": "उदय (Rise)",
    "source_start": "12:16 पी एम, मई 28",
    "source_end": "11:05 ए एम, मई 29"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-05-29",
    "start_time_ist": "11:05",
    "end_date": "2028-05-30",
    "end_time_ist": "09:46",
    "state": "उदय (Rise)",
    "source_start": "11:05 ए एम, मई 29",
    "source_end": "09:46 ए एम, मई 30"
  },
  {
    "nak": "Magha",
    "start_date": "2028-05-30",
    "start_time_ist": "09:46",
    "end_date": "2028-05-31",
    "end_time_ist": "08:22",
    "state": "उदय (Rise)",
    "source_start": "09:46 ए एम, मई 30",
    "source_end": "08:22 ए एम, मई 31"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-05-31",
    "start_time_ist": "08:22",
    "end_date": "2028-06-01",
    "end_time_ist": "06:55",
    "state": "उदय (Rise)",
    "source_start": "08:22 ए एम, मई 31",
    "source_end": "06:55 ए एम, जून 01"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-06-01",
    "start_time_ist": "06:55",
    "end_date": "2028-06-02",
    "end_time_ist": "05:28",
    "state": "उदय (Rise)",
    "source_start": "06:55 ए एम, जून 01",
    "source_end": "05:28 ए एम, जून 02"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-06-02",
    "start_time_ist": "05:28",
    "end_date": "2028-06-03",
    "end_time_ist": "04:05",
    "state": "उदय (Rise)",
    "source_start": "05:28 ए एम, जून 02",
    "source_end": "04:05 ए एम, जून 03"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-06-03",
    "start_time_ist": "04:05",
    "end_date": "2028-06-04",
    "end_time_ist": "02:48",
    "state": "उदय (Rise)",
    "source_start": "04:05 ए एम, जून 03",
    "source_end": "02:48 ए एम, जून 04"
  },
  {
    "nak": "Swati",
    "start_date": "2028-06-04",
    "start_time_ist": "02:48",
    "end_date": "2028-06-05",
    "end_time_ist": "01:45",
    "state": "उदय (Rise)",
    "source_start": "02:48 ए एम, जून 04",
    "source_end": "01:45 ए एम, जून 05"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-06-05",
    "start_time_ist": "01:45",
    "end_date": "2028-06-06",
    "end_time_ist": "01:00",
    "state": "उदय (Rise)",
    "source_start": "01:45 ए एम, जून 05",
    "source_end": "01:00 ए एम, जून 06"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-06-06",
    "start_time_ist": "01:00",
    "end_date": "2028-06-07",
    "end_time_ist": "00:39",
    "state": "उदय (Rise)",
    "source_start": "01:00 ए एम, जून 06",
    "source_end": "12:39 ए एम, जून 07"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-06-07",
    "start_time_ist": "00:39",
    "end_date": "2028-06-08",
    "end_time_ist": "00:48",
    "state": "उदय (Rise)",
    "source_start": "12:39 ए एम, जून 07",
    "source_end": "12:48 ए एम, जून 08"
  },
  {
    "nak": "Mula",
    "start_date": "2028-06-08",
    "start_time_ist": "00:48",
    "end_date": "2028-06-09",
    "end_time_ist": "01:31",
    "state": "उदय (Rise)",
    "source_start": "12:48 ए एम, जून 08",
    "source_end": "01:31 ए एम, जून 09"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-06-09",
    "start_time_ist": "01:31",
    "end_date": "2028-06-10",
    "end_time_ist": "02:51",
    "state": "उदय (Rise)",
    "source_start": "01:31 ए एम, जून 09",
    "source_end": "02:51 ए एम, जून 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-06-10",
    "start_time_ist": "02:51",
    "end_date": "2028-06-11",
    "end_time_ist": "04:47",
    "state": "उदय (Rise)",
    "source_start": "02:51 ए एम, जून 10",
    "source_end": "04:47 ए एम, जून 11"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-06-11",
    "start_time_ist": "04:47",
    "end_date": "2028-06-12",
    "end_time_ist": "07:13",
    "state": "उदय (Rise)",
    "source_start": "04:47 ए एम, जून 11",
    "source_end": "07:13 ए एम, जून 12"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-06-12",
    "start_time_ist": "07:13",
    "end_date": "2028-06-13",
    "end_time_ist": "10:02",
    "state": "उदय (Rise)",
    "source_start": "07:13 ए एम, जून 12",
    "source_end": "10:02 ए एम, जून 13"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-06-13",
    "start_time_ist": "10:02",
    "end_date": "2028-06-14",
    "end_time_ist": "13:01",
    "state": "उदय (Rise)",
    "source_start": "10:02 ए एम, जून 13",
    "source_end": "01:01 पी एम, जून 14"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-06-14",
    "start_time_ist": "13:01",
    "end_date": "2028-06-15",
    "end_time_ist": "15:58",
    "state": "उदय (Rise)",
    "source_start": "01:01 पी एम, जून 14",
    "source_end": "03:58 पी एम, जून 15"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-06-15",
    "start_time_ist": "15:58",
    "end_date": "2028-06-16",
    "end_time_ist": "18:37",
    "state": "उदय (Rise)",
    "source_start": "03:58 पी एम, जून 15",
    "source_end": "06:37 पी एम, जून 16"
  },
  {
    "nak": "Revati",
    "start_date": "2028-06-16",
    "start_time_ist": "18:37",
    "end_date": "2028-06-17",
    "end_time_ist": "20:48",
    "state": "उदय (Rise)",
    "source_start": "06:37 पी एम, जून 16",
    "source_end": "08:48 पी एम, जून 17"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-06-17",
    "start_time_ist": "20:48",
    "end_date": "2028-06-18",
    "end_time_ist": "22:24",
    "state": "उदय (Rise)",
    "source_start": "08:48 पी एम, जून 17",
    "source_end": "10:24 पी एम, जून 18"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-06-18",
    "start_time_ist": "22:24",
    "end_date": "2028-06-19",
    "end_time_ist": "23:19",
    "state": "उदय (Rise)",
    "source_start": "10:24 पी एम, जून 18",
    "source_end": "11:19 पी एम, जून 19"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-06-19",
    "start_time_ist": "23:19",
    "end_date": "2028-06-20",
    "end_time_ist": "23:35",
    "state": "उदय (Rise)",
    "source_start": "11:19 पी एम, जून 19",
    "source_end": "11:35 पी एम, जून 20"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-06-20",
    "start_time_ist": "23:35",
    "end_date": "2028-06-21",
    "end_time_ist": "23:14",
    "state": "उदय (Rise)",
    "source_start": "11:35 पी एम, जून 20",
    "source_end": "11:14 पी एम, जून 21"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-06-21",
    "start_time_ist": "23:14",
    "end_date": "2028-06-22",
    "end_time_ist": "22:22",
    "state": "उदय (Rise)",
    "source_start": "11:14 पी एम, जून 21",
    "source_end": "10:22 पी एम, जून 22"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-06-22",
    "start_time_ist": "22:22",
    "end_date": "2028-06-23",
    "end_time_ist": "21:05",
    "state": "उदय (Rise)",
    "source_start": "10:22 पी एम, जून 22",
    "source_end": "09:05 पी एम, जून 23"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-06-23",
    "start_time_ist": "21:05",
    "end_date": "2028-06-24",
    "end_time_ist": "19:30",
    "state": "उदय (Rise)",
    "source_start": "09:05 पी एम, जून 23",
    "source_end": "07:30 पी एम, जून 24"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-06-24",
    "start_time_ist": "19:30",
    "end_date": "2028-06-25",
    "end_time_ist": "17:44",
    "state": "उदय (Rise)",
    "source_start": "07:30 पी एम, जून 24",
    "source_end": "05:44 पी एम, जून 25"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-06-25",
    "start_time_ist": "17:44",
    "end_date": "2028-06-26",
    "end_time_ist": "15:54",
    "state": "उदय (Rise)",
    "source_start": "05:44 पी एम, जून 25",
    "source_end": "03:54 पी एम, जून 26"
  },
  {
    "nak": "Magha",
    "start_date": "2028-06-26",
    "start_time_ist": "15:54",
    "end_date": "2028-06-27",
    "end_time_ist": "14:05",
    "state": "उदय (Rise)",
    "source_start": "03:54 पी एम, जून 26",
    "source_end": "02:05 पी एम, जून 27"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-06-27",
    "start_time_ist": "14:05",
    "end_date": "2028-06-28",
    "end_time_ist": "12:23",
    "state": "उदय (Rise)",
    "source_start": "02:05 पी एम, जून 27",
    "source_end": "12:23 पी एम, जून 28"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-06-28",
    "start_time_ist": "12:23",
    "end_date": "2028-06-29",
    "end_time_ist": "10:51",
    "state": "उदय (Rise)",
    "source_start": "12:23 पी एम, जून 28",
    "source_end": "10:51 ए एम, जून 29"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-06-29",
    "start_time_ist": "10:51",
    "end_date": "2028-06-30",
    "end_time_ist": "09:33",
    "state": "उदय (Rise)",
    "source_start": "10:51 ए एम, जून 29",
    "source_end": "09:33 ए एम, जून 30"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-06-30",
    "start_time_ist": "09:33",
    "end_date": "2028-07-01",
    "end_time_ist": "08:33",
    "state": "उदय (Rise)",
    "source_start": "09:33 ए एम, जून 30",
    "source_end": "08:33 ए एम, जुलाई 01"
  },
  {
    "nak": "Swati",
    "start_date": "2028-07-01",
    "start_time_ist": "08:33",
    "end_date": "2028-07-02",
    "end_time_ist": "07:53",
    "state": "उदय (Rise)",
    "source_start": "08:33 ए एम, जुलाई 01",
    "source_end": "07:53 ए एम, जुलाई 02"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-07-02",
    "start_time_ist": "07:53",
    "end_date": "2028-07-03",
    "end_time_ist": "07:34",
    "state": "उदय (Rise)",
    "source_start": "07:53 ए एम, जुलाई 02",
    "source_end": "07:34 ए एम, जुलाई 03"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-07-03",
    "start_time_ist": "07:34",
    "end_date": "2028-07-04",
    "end_time_ist": "07:40",
    "state": "उदय (Rise)",
    "source_start": "07:34 ए एम, जुलाई 03",
    "source_end": "07:40 ए एम, जुलाई 04"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-07-04",
    "start_time_ist": "07:40",
    "end_date": "2028-07-05",
    "end_time_ist": "08:13",
    "state": "उदय (Rise)",
    "source_start": "07:40 ए एम, जुलाई 04",
    "source_end": "08:13 ए एम, जुलाई 05"
  },
  {
    "nak": "Mula",
    "start_date": "2028-07-05",
    "start_time_ist": "08:13",
    "end_date": "2028-07-06",
    "end_time_ist": "09:13",
    "state": "उदय (Rise)",
    "source_start": "08:13 ए एम, जुलाई 05",
    "source_end": "09:13 ए एम, जुलाई 06"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-07-06",
    "start_time_ist": "09:13",
    "end_date": "2028-07-07",
    "end_time_ist": "10:42",
    "state": "उदय (Rise)",
    "source_start": "09:13 ए एम, जुलाई 06",
    "source_end": "10:42 ए एम, जुलाई 07"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-07-07",
    "start_time_ist": "10:42",
    "end_date": "2028-07-08",
    "end_time_ist": "12:39",
    "state": "उदय (Rise)",
    "source_start": "10:42 ए एम, जुलाई 07",
    "source_end": "12:39 पी एम, जुलाई 08"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-07-08",
    "start_time_ist": "12:39",
    "end_date": "2028-07-09",
    "end_time_ist": "15:01",
    "state": "उदय (Rise)",
    "source_start": "12:39 पी एम, जुलाई 08",
    "source_end": "03:01 पी एम, जुलाई 09"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-07-09",
    "start_time_ist": "15:01",
    "end_date": "2028-07-10",
    "end_time_ist": "17:45",
    "state": "उदय (Rise)",
    "source_start": "03:01 पी एम, जुलाई 09",
    "source_end": "05:45 पी एम, जुलाई 10"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-07-10",
    "start_time_ist": "17:45",
    "end_date": "2028-07-11",
    "end_time_ist": "20:42",
    "state": "उदय (Rise)",
    "source_start": "05:45 पी एम, जुलाई 10",
    "source_end": "08:42 पी एम, जुलाई 11"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-07-11",
    "start_time_ist": "20:42",
    "end_date": "2028-07-12",
    "end_time_ist": "23:42",
    "state": "उदय (Rise)",
    "source_start": "08:42 पी एम, जुलाई 11",
    "source_end": "11:42 पी एम, जुलाई 12"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-07-12",
    "start_time_ist": "23:42",
    "end_date": "2028-07-14",
    "end_time_ist": "02:33",
    "state": "उदय (Rise)",
    "source_start": "11:42 पी एम, जुलाई 12",
    "source_end": "02:33 ए एम, जुलाई 14"
  },
  {
    "nak": "Revati",
    "start_date": "2028-07-14",
    "start_time_ist": "02:33",
    "end_date": "2028-07-15",
    "end_time_ist": "05:04",
    "state": "उदय (Rise)",
    "source_start": "02:33 ए एम, जुलाई 14",
    "source_end": "05:04 ए एम, जुलाई 15"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-07-15",
    "start_time_ist": "05:04",
    "end_date": "2028-07-16",
    "end_time_ist": "07:04",
    "state": "उदय (Rise)",
    "source_start": "05:04 ए एम, जुलाई 15",
    "source_end": "07:04 ए एम, जुलाई 16"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-07-16",
    "start_time_ist": "07:04",
    "end_date": "2028-07-17",
    "end_time_ist": "08:25",
    "state": "उदय (Rise)",
    "source_start": "07:04 ए एम, जुलाई 16",
    "source_end": "08:25 ए एम, जुलाई 17"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-07-17",
    "start_time_ist": "08:25",
    "end_date": "2028-07-18",
    "end_time_ist": "09:02",
    "state": "उदय (Rise)",
    "source_start": "08:25 ए एम, जुलाई 17",
    "source_end": "09:02 ए एम, जुलाई 18"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-07-18",
    "start_time_ist": "09:02",
    "end_date": "2028-07-19",
    "end_time_ist": "08:56",
    "state": "उदय (Rise)",
    "source_start": "09:02 ए एम, जुलाई 18",
    "source_end": "08:56 ए एम, जुलाई 19"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-07-19",
    "start_time_ist": "08:56",
    "end_date": "2028-07-20",
    "end_time_ist": "08:07",
    "state": "उदय (Rise)",
    "source_start": "08:56 ए एम, जुलाई 19",
    "source_end": "08:07 ए एम, जुलाई 20"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-07-20",
    "start_time_ist": "08:07",
    "end_date": "2028-07-21",
    "end_time_ist": "06:43",
    "state": "उदय (Rise)",
    "source_start": "08:07 ए एम, जुलाई 20",
    "source_end": "06:43 ए एम, जुलाई 21"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-07-21",
    "start_time_ist": "06:43",
    "end_date": "2028-07-22",
    "end_time_ist": "04:49",
    "state": "उदय (Rise)",
    "source_start": "06:43 ए एम, जुलाई 21",
    "source_end": "04:49 ए एम, जुलाई 22"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-07-22",
    "start_time_ist": "04:49",
    "end_date": "2028-07-23",
    "end_time_ist": "02:35",
    "state": "उदय (Rise)",
    "source_start": "04:49 ए एम, जुलाई 22",
    "source_end": "02:35 ए एम, जुलाई 23"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-07-23",
    "start_time_ist": "02:35",
    "end_date": "2028-07-24",
    "end_time_ist": "00:09",
    "state": "उदय (Rise)",
    "source_start": "02:35 ए एम, जुलाई 23",
    "source_end": "12:09 ए एम, जुलाई 24"
  },
  {
    "nak": "Magha",
    "start_date": "2028-07-24",
    "start_time_ist": "00:09",
    "end_date": "2028-07-24",
    "end_time_ist": "21:41",
    "state": "उदय (Rise)",
    "source_start": "12:09 ए एम, जुलाई 24",
    "source_end": "09:41 पी एम, जुलाई 24"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-07-24",
    "start_time_ist": "21:41",
    "end_date": "2028-07-25",
    "end_time_ist": "19:19",
    "state": "उदय (Rise)",
    "source_start": "09:41 पी एम, जुलाई 24",
    "source_end": "07:19 पी एम, जुलाई 25"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-07-25",
    "start_time_ist": "19:19",
    "end_date": "2028-07-26",
    "end_time_ist": "17:12",
    "state": "उदय (Rise)",
    "source_start": "07:19 पी एम, जुलाई 25",
    "source_end": "05:12 पी एम, जुलाई 26"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-07-26",
    "start_time_ist": "17:12",
    "end_date": "2028-07-27",
    "end_time_ist": "15:26",
    "state": "उदय (Rise)",
    "source_start": "05:12 पी एम, जुलाई 26",
    "source_end": "03:26 पी एम, जुलाई 27"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-07-27",
    "start_time_ist": "15:26",
    "end_date": "2028-07-28",
    "end_time_ist": "14:07",
    "state": "उदय (Rise)",
    "source_start": "03:26 पी एम, जुलाई 27",
    "source_end": "02:07 पी एम, जुलाई 28"
  },
  {
    "nak": "Swati",
    "start_date": "2028-07-28",
    "start_time_ist": "14:07",
    "end_date": "2028-07-29",
    "end_time_ist": "13:18",
    "state": "उदय (Rise)",
    "source_start": "02:07 पी एम, जुलाई 28",
    "source_end": "01:18 पी एम, जुलाई 29"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-07-29",
    "start_time_ist": "13:18",
    "end_date": "2028-07-30",
    "end_time_ist": "13:03",
    "state": "उदय (Rise)",
    "source_start": "01:18 पी एम, जुलाई 29",
    "source_end": "01:03 पी एम, जुलाई 30"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-07-30",
    "start_time_ist": "13:03",
    "end_date": "2028-07-31",
    "end_time_ist": "13:21",
    "state": "उदय (Rise)",
    "source_start": "01:03 पी एम, जुलाई 30",
    "source_end": "01:21 पी एम, जुलाई 31"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-07-31",
    "start_time_ist": "13:21",
    "end_date": "2028-08-01",
    "end_time_ist": "14:11",
    "state": "उदय (Rise)",
    "source_start": "01:21 पी एम, जुलाई 31",
    "source_end": "02:11 पी एम, अगस्त 01"
  },
  {
    "nak": "Mula",
    "start_date": "2028-08-01",
    "start_time_ist": "14:11",
    "end_date": "2028-08-02",
    "end_time_ist": "15:31",
    "state": "उदय (Rise)",
    "source_start": "02:11 पी एम, अगस्त 01",
    "source_end": "03:31 पी एम, अगस्त 02"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-08-02",
    "start_time_ist": "15:31",
    "end_date": "2028-08-03",
    "end_time_ist": "17:17",
    "state": "उदय (Rise)",
    "source_start": "03:31 पी एम, अगस्त 02",
    "source_end": "05:17 पी एम, अगस्त 03"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-08-03",
    "start_time_ist": "17:17",
    "end_date": "2028-08-04",
    "end_time_ist": "19:27",
    "state": "उदय (Rise)",
    "source_start": "05:17 पी एम, अगस्त 03",
    "source_end": "07:27 पी एम, अगस्त 04"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-08-04",
    "start_time_ist": "19:27",
    "end_date": "2028-08-05",
    "end_time_ist": "21:57",
    "state": "उदय (Rise)",
    "source_start": "07:27 पी एम, अगस्त 04",
    "source_end": "09:57 पी एम, अगस्त 05"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-08-05",
    "start_time_ist": "21:57",
    "end_date": "2028-08-07",
    "end_time_ist": "00:42",
    "state": "उदय (Rise)",
    "source_start": "09:57 पी एम, अगस्त 05",
    "source_end": "12:42 ए एम, अगस्त 07"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-08-07",
    "start_time_ist": "00:42",
    "end_date": "2028-08-08",
    "end_time_ist": "03:38",
    "state": "उदय (Rise)",
    "source_start": "12:42 ए एम, अगस्त 07",
    "source_end": "03:38 ए एम, अगस्त 08"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-08-08",
    "start_time_ist": "03:38",
    "end_date": "2028-08-09",
    "end_time_ist": "06:39",
    "state": "उदय (Rise)",
    "source_start": "03:38 ए एम, अगस्त 08",
    "source_end": "06:39 ए एम, अगस्त 09"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-08-09",
    "start_time_ist": "06:39",
    "end_date": "2028-08-10",
    "end_time_ist": "09:36",
    "state": "उदय (Rise)",
    "source_start": "06:39 ए एम, अगस्त 09",
    "source_end": "09:36 ए एम, अगस्त 10"
  },
  {
    "nak": "Revati",
    "start_date": "2028-08-10",
    "start_time_ist": "09:36",
    "end_date": "2028-08-11",
    "end_time_ist": "12:22",
    "state": "उदय (Rise)",
    "source_start": "09:36 ए एम, अगस्त 10",
    "source_end": "12:22 पी एम, अगस्त 11"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-08-11",
    "start_time_ist": "12:22",
    "end_date": "2028-08-12",
    "end_time_ist": "14:45",
    "state": "उदय (Rise)",
    "source_start": "12:22 पी एम, अगस्त 11",
    "source_end": "02:45 पी एम, अगस्त 12"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-08-12",
    "start_time_ist": "14:45",
    "end_date": "2028-08-13",
    "end_time_ist": "16:37",
    "state": "उदय (Rise)",
    "source_start": "02:45 पी एम, अगस्त 12",
    "source_end": "04:37 पी एम, अगस्त 13"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-08-13",
    "start_time_ist": "16:37",
    "end_date": "2028-08-14",
    "end_time_ist": "17:51",
    "state": "उदय (Rise)",
    "source_start": "04:37 पी एम, अगस्त 13",
    "source_end": "05:51 पी एम, अगस्त 14"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-08-14",
    "start_time_ist": "17:51",
    "end_date": "2028-08-15",
    "end_time_ist": "18:19",
    "state": "उदय (Rise)",
    "source_start": "05:51 पी एम, अगस्त 14",
    "source_end": "06:19 पी एम, अगस्त 15"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-08-15",
    "start_time_ist": "18:19",
    "end_date": "2028-08-16",
    "end_time_ist": "18:02",
    "state": "उदय (Rise)",
    "source_start": "06:19 पी एम, अगस्त 15",
    "source_end": "06:02 पी एम, अगस्त 16"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-08-16",
    "start_time_ist": "18:02",
    "end_date": "2028-08-17",
    "end_time_ist": "17:00",
    "state": "उदय (Rise)",
    "source_start": "06:02 पी एम, अगस्त 16",
    "source_end": "05:00 पी एम, अगस्त 17"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-08-17",
    "start_time_ist": "17:00",
    "end_date": "2028-08-18",
    "end_time_ist": "15:17",
    "state": "उदय (Rise)",
    "source_start": "05:00 पी एम, अगस्त 17",
    "source_end": "03:17 पी एम, अगस्त 18"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-08-18",
    "start_time_ist": "15:17",
    "end_date": "2028-08-19",
    "end_time_ist": "13:02",
    "state": "उदय (Rise)",
    "source_start": "03:17 पी एम, अगस्त 18",
    "source_end": "01:02 पी एम, अगस्त 19"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-08-19",
    "start_time_ist": "13:02",
    "end_date": "2028-08-20",
    "end_time_ist": "10:22",
    "state": "उदय (Rise)",
    "source_start": "01:02 पी एम, अगस्त 19",
    "source_end": "10:22 ए एम, अगस्त 20"
  },
  {
    "nak": "Magha",
    "start_date": "2028-08-20",
    "start_time_ist": "10:22",
    "end_date": "2028-08-21",
    "end_time_ist": "07:29",
    "state": "उदय (Rise)",
    "source_start": "10:22 ए एम, अगस्त 20",
    "source_end": "07:29 ए एम, अगस्त 21"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-08-21",
    "start_time_ist": "07:29",
    "end_date": "2028-08-22",
    "end_time_ist": "04:33",
    "state": "उदय (Rise)",
    "source_start": "07:29 ए एम, अगस्त 21",
    "source_end": "04:33 ए एम, अगस्त 22"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-08-22",
    "start_time_ist": "04:33",
    "end_date": "2028-08-23",
    "end_time_ist": "01:45",
    "state": "उदय (Rise)",
    "source_start": "04:33 ए एम, अगस्त 22",
    "source_end": "01:45 ए एम, अगस्त 23"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-08-23",
    "start_time_ist": "01:45",
    "end_date": "2028-08-23",
    "end_time_ist": "23:16",
    "state": "उदय (Rise)",
    "source_start": "01:45 ए एम, अगस्त 23",
    "source_end": "11:16 पी एम, अगस्त 23"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-08-23",
    "start_time_ist": "23:16",
    "end_date": "2028-08-24",
    "end_time_ist": "21:14",
    "state": "उदय (Rise)",
    "source_start": "11:16 पी एम, अगस्त 23",
    "source_end": "09:14 पी एम, अगस्त 24"
  },
  {
    "nak": "Swati",
    "start_date": "2028-08-24",
    "start_time_ist": "21:14",
    "end_date": "2028-08-25",
    "end_time_ist": "19:48",
    "state": "उदय (Rise)",
    "source_start": "09:14 पी एम, अगस्त 24",
    "source_end": "07:48 पी एम, अगस्त 25"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-08-25",
    "start_time_ist": "19:48",
    "end_date": "2028-08-26",
    "end_time_ist": "19:04",
    "state": "उदय (Rise)",
    "source_start": "07:48 पी एम, अगस्त 25",
    "source_end": "07:04 पी एम, अगस्त 26"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-08-26",
    "start_time_ist": "19:04",
    "end_date": "2028-08-27",
    "end_time_ist": "19:03",
    "state": "उदय (Rise)",
    "source_start": "07:04 पी एम, अगस्त 26",
    "source_end": "07:03 पी एम, अगस्त 27"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-08-27",
    "start_time_ist": "19:03",
    "end_date": "2028-08-28",
    "end_time_ist": "19:46",
    "state": "उदय (Rise)",
    "source_start": "07:03 पी एम, अगस्त 27",
    "source_end": "07:46 पी एम, अगस्त 28"
  },
  {
    "nak": "Mula",
    "start_date": "2028-08-28",
    "start_time_ist": "19:46",
    "end_date": "2028-08-29",
    "end_time_ist": "21:07",
    "state": "उदय (Rise)",
    "source_start": "07:46 पी एम, अगस्त 28",
    "source_end": "09:07 पी एम, अगस्त 29"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-08-29",
    "start_time_ist": "21:07",
    "end_date": "2028-08-30",
    "end_time_ist": "23:02",
    "state": "उदय (Rise)",
    "source_start": "09:07 पी एम, अगस्त 29",
    "source_end": "11:02 पी एम, अगस्त 30"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-08-30",
    "start_time_ist": "23:02",
    "end_date": "2028-09-01",
    "end_time_ist": "01:23",
    "state": "उदय (Rise)",
    "source_start": "11:02 पी एम, अगस्त 30",
    "source_end": "01:23 ए एम, सितम्बर 01"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-09-01",
    "start_time_ist": "01:23",
    "end_date": "2028-09-02",
    "end_time_ist": "04:03",
    "state": "उदय (Rise)",
    "source_start": "01:23 ए एम, सितम्बर 01",
    "source_end": "04:03 ए एम, सितम्बर 02"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-09-02",
    "start_time_ist": "04:03",
    "end_date": "2028-09-03",
    "end_time_ist": "06:55",
    "state": "उदय (Rise)",
    "source_start": "04:03 ए एम, सितम्बर 02",
    "source_end": "06:55 ए एम, सितम्बर 03"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-09-03",
    "start_time_ist": "06:55",
    "end_date": "2028-09-04",
    "end_time_ist": "09:53",
    "state": "उदय (Rise)",
    "source_start": "06:55 ए एम, सितम्बर 03",
    "source_end": "09:53 ए एम, सितम्बर 04"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-09-04",
    "start_time_ist": "09:53",
    "end_date": "2028-09-05",
    "end_time_ist": "12:52",
    "state": "उदय (Rise)",
    "source_start": "09:53 ए एम, सितम्बर 04",
    "source_end": "12:52 पी एम, सितम्बर 05"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-09-05",
    "start_time_ist": "12:52",
    "end_date": "2028-09-06",
    "end_time_ist": "15:48",
    "state": "उदय (Rise)",
    "source_start": "12:52 पी एम, सितम्बर 05",
    "source_end": "03:48 पी एम, सितम्बर 06"
  },
  {
    "nak": "Revati",
    "start_date": "2028-09-06",
    "start_time_ist": "15:48",
    "end_date": "2028-09-07",
    "end_time_ist": "18:36",
    "state": "उदय (Rise)",
    "source_start": "03:48 पी एम, सितम्बर 06",
    "source_end": "06:36 पी एम, सितम्बर 07"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-09-07",
    "start_time_ist": "18:36",
    "end_date": "2028-09-08",
    "end_time_ist": "21:09",
    "state": "उदय (Rise)",
    "source_start": "06:36 पी एम, सितम्बर 07",
    "source_end": "09:09 पी एम, सितम्बर 08"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-09-08",
    "start_time_ist": "21:09",
    "end_date": "2028-09-09",
    "end_time_ist": "23:21",
    "state": "उदय (Rise)",
    "source_start": "09:09 पी एम, सितम्बर 08",
    "source_end": "11:21 पी एम, सितम्बर 09"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-09-09",
    "start_time_ist": "23:21",
    "end_date": "2028-09-11",
    "end_time_ist": "01:03",
    "state": "उदय (Rise)",
    "source_start": "11:21 पी एम, सितम्बर 09",
    "source_end": "01:03 ए एम, सितम्बर 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-09-11",
    "start_time_ist": "01:03",
    "end_date": "2028-09-12",
    "end_time_ist": "02:10",
    "state": "उदय (Rise)",
    "source_start": "01:03 ए एम, सितम्बर 11",
    "source_end": "02:10 ए एम, सितम्बर 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-09-12",
    "start_time_ist": "02:10",
    "end_date": "2028-09-13",
    "end_time_ist": "02:36",
    "state": "उदय (Rise)",
    "source_start": "02:10 ए एम, सितम्बर 12",
    "source_end": "02:36 ए एम, सितम्बर 13"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-09-13",
    "start_time_ist": "02:36",
    "end_date": "2028-09-14",
    "end_time_ist": "02:17",
    "state": "उदय (Rise)",
    "source_start": "02:36 ए एम, सितम्बर 13",
    "source_end": "02:17 ए एम, सितम्बर 14"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-09-14",
    "start_time_ist": "02:17",
    "end_date": "2028-09-15",
    "end_time_ist": "01:14",
    "state": "उदय (Rise)",
    "source_start": "02:17 ए एम, सितम्बर 14",
    "source_end": "01:14 ए एम, सितम्बर 15"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-09-15",
    "start_time_ist": "01:14",
    "end_date": "2028-09-15",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "01:14 ए एम, सितम्बर 15",
    "source_end": "11:29 पी एम, सितम्बर 15"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-09-15",
    "start_time_ist": "23:29",
    "end_date": "2028-09-16",
    "end_time_ist": "21:10",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, सितम्बर 15",
    "source_end": "09:10 पी एम, सितम्बर 16"
  },
  {
    "nak": "Magha",
    "start_date": "2028-09-16",
    "start_time_ist": "21:10",
    "end_date": "2028-09-17",
    "end_time_ist": "18:24",
    "state": "उदय (Rise)",
    "source_start": "09:10 पी एम, सितम्बर 16",
    "source_end": "06:24 पी एम, सितम्बर 17"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-09-17",
    "start_time_ist": "18:24",
    "end_date": "2028-09-18",
    "end_time_ist": "15:22",
    "state": "उदय (Rise)",
    "source_start": "06:24 पी एम, सितम्बर 17",
    "source_end": "03:22 पी एम, सितम्बर 18"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-09-18",
    "start_time_ist": "15:22",
    "end_date": "2028-09-19",
    "end_time_ist": "12:16",
    "state": "उदय (Rise)",
    "source_start": "03:22 पी एम, सितम्बर 18",
    "source_end": "12:16 पी एम, सितम्बर 19"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-09-19",
    "start_time_ist": "12:16",
    "end_date": "2028-09-20",
    "end_time_ist": "09:18",
    "state": "उदय (Rise)",
    "source_start": "12:16 पी एम, सितम्बर 19",
    "source_end": "09:18 ए एम, सितम्बर 20"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-09-20",
    "start_time_ist": "09:18",
    "end_date": "2028-09-21",
    "end_time_ist": "06:38",
    "state": "उदय (Rise)",
    "source_start": "09:18 ए एम, सितम्बर 20",
    "source_end": "06:38 ए एम, सितम्बर 21"
  },
  {
    "nak": "Swati",
    "start_date": "2028-09-21",
    "start_time_ist": "06:38",
    "end_date": "2028-09-22",
    "end_time_ist": "04:29",
    "state": "उदय (Rise)",
    "source_start": "06:38 ए एम, सितम्बर 21",
    "source_end": "04:29 ए एम, सितम्बर 22"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-09-22",
    "start_time_ist": "04:29",
    "end_date": "2028-09-23",
    "end_time_ist": "03:00",
    "state": "उदय (Rise)",
    "source_start": "04:29 ए एम, सितम्बर 22",
    "source_end": "03:00 ए एम, सितम्बर 23"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-09-23",
    "start_time_ist": "03:00",
    "end_date": "2028-09-24",
    "end_time_ist": "02:17",
    "state": "उदय (Rise)",
    "source_start": "03:00 ए एम, सितम्बर 23",
    "source_end": "02:17 ए एम, सितम्बर 24"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-09-24",
    "start_time_ist": "02:17",
    "end_date": "2028-09-25",
    "end_time_ist": "02:24",
    "state": "उदय (Rise)",
    "source_start": "02:17 ए एम, सितम्बर 24",
    "source_end": "02:24 ए एम, सितम्बर 25"
  },
  {
    "nak": "Mula",
    "start_date": "2028-09-25",
    "start_time_ist": "02:24",
    "end_date": "2028-09-26",
    "end_time_ist": "03:21",
    "state": "उदय (Rise)",
    "source_start": "02:24 ए एम, सितम्बर 25",
    "source_end": "03:21 ए एम, सितम्बर 26"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-09-26",
    "start_time_ist": "03:21",
    "end_date": "2028-09-27",
    "end_time_ist": "05:01",
    "state": "उदय (Rise)",
    "source_start": "03:21 ए एम, सितम्बर 26",
    "source_end": "05:01 ए एम, सितम्बर 27"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-09-27",
    "start_time_ist": "05:01",
    "end_date": "2028-09-28",
    "end_time_ist": "07:18",
    "state": "उदय (Rise)",
    "source_start": "05:01 ए एम, सितम्बर 27",
    "source_end": "07:18 ए एम, सितम्बर 28"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-09-28",
    "start_time_ist": "07:18",
    "end_date": "2028-09-29",
    "end_time_ist": "09:59",
    "state": "उदय (Rise)",
    "source_start": "07:18 ए एम, सितम्बर 28",
    "source_end": "09:59 ए एम, सितम्बर 29"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-09-29",
    "start_time_ist": "09:59",
    "end_date": "2028-09-30",
    "end_time_ist": "12:55",
    "state": "उदय (Rise)",
    "source_start": "09:59 ए एम, सितम्बर 29",
    "source_end": "12:55 पी एम, सितम्बर 30"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-09-30",
    "start_time_ist": "12:55",
    "end_date": "2028-10-01",
    "end_time_ist": "15:57",
    "state": "उदय (Rise)",
    "source_start": "12:55 पी एम, सितम्बर 30",
    "source_end": "03:57 पी एम, अक्टूबर 01"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-10-01",
    "start_time_ist": "15:57",
    "end_date": "2028-10-02",
    "end_time_ist": "18:56",
    "state": "उदय (Rise)",
    "source_start": "03:57 पी एम, अक्टूबर 01",
    "source_end": "06:56 पी एम, अक्टूबर 02"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-10-02",
    "start_time_ist": "18:56",
    "end_date": "2028-10-03",
    "end_time_ist": "21:47",
    "state": "उदय (Rise)",
    "source_start": "06:56 पी एम, अक्टूबर 02",
    "source_end": "09:47 पी एम, अक्टूबर 03"
  },
  {
    "nak": "Revati",
    "start_date": "2028-10-03",
    "start_time_ist": "21:47",
    "end_date": "2028-10-05",
    "end_time_ist": "00:27",
    "state": "उदय (Rise)",
    "source_start": "09:47 पी एम, अक्टूबर 03",
    "source_end": "12:27 ए एम, अक्टूबर 05"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-10-05",
    "start_time_ist": "00:27",
    "end_date": "2028-10-06",
    "end_time_ist": "02:54",
    "state": "उदय (Rise)",
    "source_start": "12:27 ए एम, अक्टूबर 05",
    "source_end": "02:54 ए एम, अक्टूबर 06"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-10-06",
    "start_time_ist": "02:54",
    "end_date": "2028-10-07",
    "end_time_ist": "05:03",
    "state": "उदय (Rise)",
    "source_start": "02:54 ए एम, अक्टूबर 06",
    "source_end": "05:03 ए एम, अक्टूबर 07"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-10-07",
    "start_time_ist": "05:03",
    "end_date": "2028-10-08",
    "end_time_ist": "06:52",
    "state": "उदय (Rise)",
    "source_start": "05:03 ए एम, अक्टूबर 07",
    "source_end": "06:52 ए एम, अक्टूबर 08"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-10-08",
    "start_time_ist": "06:52",
    "end_date": "2028-10-09",
    "end_time_ist": "08:16",
    "state": "उदय (Rise)",
    "source_start": "06:52 ए एम, अक्टूबर 08",
    "source_end": "08:16 ए एम, अक्टूबर 09"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-10-09",
    "start_time_ist": "08:16",
    "end_date": "2028-10-10",
    "end_time_ist": "09:09",
    "state": "उदय (Rise)",
    "source_start": "08:16 ए एम, अक्टूबर 09",
    "source_end": "09:09 ए एम, अक्टूबर 10"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-10-10",
    "start_time_ist": "09:09",
    "end_date": "2028-10-11",
    "end_time_ist": "09:29",
    "state": "उदय (Rise)",
    "source_start": "09:09 ए एम, अक्टूबर 10",
    "source_end": "09:29 ए एम, अक्टूबर 11"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-10-11",
    "start_time_ist": "09:29",
    "end_date": "2028-10-12",
    "end_time_ist": "09:11",
    "state": "उदय (Rise)",
    "source_start": "09:29 ए एम, अक्टूबर 11",
    "source_end": "09:11 ए एम, अक्टूबर 12"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-10-12",
    "start_time_ist": "09:11",
    "end_date": "2028-10-13",
    "end_time_ist": "08:13",
    "state": "उदय (Rise)",
    "source_start": "09:11 ए एम, अक्टूबर 12",
    "source_end": "08:13 ए एम, अक्टूबर 13"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-10-13",
    "start_time_ist": "08:13",
    "end_date": "2028-10-14",
    "end_time_ist": "06:39",
    "state": "उदय (Rise)",
    "source_start": "08:13 ए एम, अक्टूबर 13",
    "source_end": "06:39 ए एम, अक्टूबर 14"
  },
  {
    "nak": "Magha",
    "start_date": "2028-10-14",
    "start_time_ist": "06:39",
    "end_date": "2028-10-15",
    "end_time_ist": "04:32",
    "state": "उदय (Rise)",
    "source_start": "06:39 ए एम, अक्टूबर 14",
    "source_end": "04:32 ए एम, अक्टूबर 15"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-10-15",
    "start_time_ist": "04:32",
    "end_date": "2028-10-16",
    "end_time_ist": "01:59",
    "state": "उदय (Rise)",
    "source_start": "04:32 ए एम, अक्टूबर 15",
    "source_end": "01:59 ए एम, अक्टूबर 16"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-10-16",
    "start_time_ist": "01:59",
    "end_date": "2028-10-16",
    "end_time_ist": "23:10",
    "state": "उदय (Rise)",
    "source_start": "01:59 ए एम, अक्टूबर 16",
    "source_end": "11:10 पी एम, अक्टूबर 16"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-10-16",
    "start_time_ist": "23:10",
    "end_date": "2028-10-17",
    "end_time_ist": "20:16",
    "state": "उदय (Rise)",
    "source_start": "11:10 पी एम, अक्टूबर 16",
    "source_end": "08:16 पी एम, अक्टूबर 17"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-10-17",
    "start_time_ist": "20:16",
    "end_date": "2028-10-18",
    "end_time_ist": "17:28",
    "state": "उदय (Rise)",
    "source_start": "08:16 पी एम, अक्टूबर 17",
    "source_end": "05:28 पी एम, अक्टूबर 18"
  },
  {
    "nak": "Swati",
    "start_date": "2028-10-18",
    "start_time_ist": "17:28",
    "end_date": "2028-10-19",
    "end_time_ist": "14:58",
    "state": "उदय (Rise)",
    "source_start": "05:28 पी एम, अक्टूबर 18",
    "source_end": "02:58 पी एम, अक्टूबर 19"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-10-19",
    "start_time_ist": "14:58",
    "end_date": "2028-10-20",
    "end_time_ist": "12:57",
    "state": "उदय (Rise)",
    "source_start": "02:58 पी एम, अक्टूबर 19",
    "source_end": "12:57 पी एम, अक्टूबर 20"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-10-20",
    "start_time_ist": "12:57",
    "end_date": "2028-10-21",
    "end_time_ist": "11:35",
    "state": "उदय (Rise)",
    "source_start": "12:57 पी एम, अक्टूबर 20",
    "source_end": "11:35 ए एम, अक्टूबर 21"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-10-21",
    "start_time_ist": "11:35",
    "end_date": "2028-10-22",
    "end_time_ist": "11:00",
    "state": "उदय (Rise)",
    "source_start": "11:35 ए एम, अक्टूबर 21",
    "source_end": "11:00 ए एम, अक्टूबर 22"
  },
  {
    "nak": "Mula",
    "start_date": "2028-10-22",
    "start_time_ist": "11:00",
    "end_date": "2028-10-23",
    "end_time_ist": "11:16",
    "state": "उदय (Rise)",
    "source_start": "11:00 ए एम, अक्टूबर 22",
    "source_end": "11:16 ए एम, अक्टूबर 23"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-10-23",
    "start_time_ist": "11:16",
    "end_date": "2028-10-24",
    "end_time_ist": "12:21",
    "state": "उदय (Rise)",
    "source_start": "11:16 ए एम, अक्टूबर 23",
    "source_end": "12:21 पी एम, अक्टूबर 24"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-10-24",
    "start_time_ist": "12:21",
    "end_date": "2028-10-25",
    "end_time_ist": "14:12",
    "state": "उदय (Rise)",
    "source_start": "12:21 पी एम, अक्टूबर 24",
    "source_end": "02:12 पी एम, अक्टूबर 25"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-10-25",
    "start_time_ist": "14:12",
    "end_date": "2028-10-26",
    "end_time_ist": "16:38",
    "state": "उदय (Rise)",
    "source_start": "02:12 पी एम, अक्टूबर 25",
    "source_end": "04:38 पी एम, अक्टूबर 26"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-10-26",
    "start_time_ist": "16:38",
    "end_date": "2028-10-27",
    "end_time_ist": "19:29",
    "state": "उदय (Rise)",
    "source_start": "04:38 पी एम, अक्टूबर 26",
    "source_end": "07:29 पी एम, अक्टूबर 27"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-10-27",
    "start_time_ist": "19:29",
    "end_date": "2028-10-28",
    "end_time_ist": "22:30",
    "state": "उदय (Rise)",
    "source_start": "07:29 पी एम, अक्टूबर 27",
    "source_end": "10:30 पी एम, अक्टूबर 28"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-10-28",
    "start_time_ist": "22:30",
    "end_date": "2028-10-30",
    "end_time_ist": "01:30",
    "state": "उदय (Rise)",
    "source_start": "10:30 पी एम, अक्टूबर 28",
    "source_end": "01:30 ए एम, अक्टूबर 30"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-10-30",
    "start_time_ist": "01:30",
    "end_date": "2028-10-31",
    "end_time_ist": "04:20",
    "state": "उदय (Rise)",
    "source_start": "01:30 ए एम, अक्टूबर 30",
    "source_end": "04:20 ए एम, अक्टूबर 31"
  },
  {
    "nak": "Revati",
    "start_date": "2028-10-31",
    "start_time_ist": "04:20",
    "end_date": "2028-11-01",
    "end_time_ist": "06:54",
    "state": "उदय (Rise)",
    "source_start": "04:20 ए एम, अक्टूबर 31",
    "source_end": "06:54 ए एम, नवम्बर 01"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-11-01",
    "start_time_ist": "06:54",
    "end_date": "2028-11-02",
    "end_time_ist": "09:08",
    "state": "उदय (Rise)",
    "source_start": "06:54 ए एम, नवम्बर 01",
    "source_end": "09:08 ए एम, नवम्बर 02"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-11-02",
    "start_time_ist": "09:08",
    "end_date": "2028-11-03",
    "end_time_ist": "11:02",
    "state": "उदय (Rise)",
    "source_start": "09:08 ए एम, नवम्बर 02",
    "source_end": "11:02 ए एम, नवम्बर 03"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-11-03",
    "start_time_ist": "11:02",
    "end_date": "2028-11-04",
    "end_time_ist": "12:35",
    "state": "उदय (Rise)",
    "source_start": "11:02 ए एम, नवम्बर 03",
    "source_end": "12:35 पी एम, नवम्बर 04"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-11-04",
    "start_time_ist": "12:35",
    "end_date": "2028-11-05",
    "end_time_ist": "13:47",
    "state": "उदय (Rise)",
    "source_start": "12:35 पी एम, नवम्बर 04",
    "source_end": "01:47 पी एम, नवम्बर 05"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-11-05",
    "start_time_ist": "13:47",
    "end_date": "2028-11-06",
    "end_time_ist": "14:36",
    "state": "उदय (Rise)",
    "source_start": "01:47 पी एम, नवम्बर 05",
    "source_end": "02:36 पी एम, नवम्बर 06"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-11-06",
    "start_time_ist": "14:36",
    "end_date": "2028-11-07",
    "end_time_ist": "15:02",
    "state": "उदय (Rise)",
    "source_start": "02:36 पी एम, नवम्बर 06",
    "source_end": "03:02 पी एम, नवम्बर 07"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-11-07",
    "start_time_ist": "15:02",
    "end_date": "2028-11-08",
    "end_time_ist": "15:03",
    "state": "उदय (Rise)",
    "source_start": "03:02 पी एम, नवम्बर 07",
    "source_end": "03:03 पी एम, नवम्बर 08"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-11-08",
    "start_time_ist": "15:03",
    "end_date": "2028-11-09",
    "end_time_ist": "14:36",
    "state": "उदय (Rise)",
    "source_start": "03:03 पी एम, नवम्बर 08",
    "source_end": "02:36 पी एम, नवम्बर 09"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-11-09",
    "start_time_ist": "14:36",
    "end_date": "2028-11-10",
    "end_time_ist": "13:41",
    "state": "उदय (Rise)",
    "source_start": "02:36 पी एम, नवम्बर 09",
    "source_end": "01:41 पी एम, नवम्बर 10"
  },
  {
    "nak": "Magha",
    "start_date": "2028-11-10",
    "start_time_ist": "13:41",
    "end_date": "2028-11-11",
    "end_time_ist": "12:19",
    "state": "उदय (Rise)",
    "source_start": "01:41 पी एम, नवम्बर 10",
    "source_end": "12:19 पी एम, नवम्बर 11"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-11-11",
    "start_time_ist": "12:19",
    "end_date": "2028-11-12",
    "end_time_ist": "10:33",
    "state": "उदय (Rise)",
    "source_start": "12:19 पी एम, नवम्बर 11",
    "source_end": "10:33 ए एम, नवम्बर 12"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-11-12",
    "start_time_ist": "10:33",
    "end_date": "2028-11-13",
    "end_time_ist": "08:27",
    "state": "उदय (Rise)",
    "source_start": "10:33 ए एम, नवम्बर 12",
    "source_end": "08:27 ए एम, नवम्बर 13"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-11-13",
    "start_time_ist": "08:27",
    "end_date": "2028-11-14",
    "end_time_ist": "06:10",
    "state": "उदय (Rise)",
    "source_start": "08:27 ए एम, नवम्बर 13",
    "source_end": "06:10 ए एम, नवम्बर 14"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-11-14",
    "start_time_ist": "06:10",
    "end_date": "2028-11-15",
    "end_time_ist": "03:49",
    "state": "उदय (Rise)",
    "source_start": "06:10 ए एम, नवम्बर 14",
    "source_end": "03:49 ए एम, नवम्बर 15"
  },
  {
    "nak": "Swati",
    "start_date": "2028-11-15",
    "start_time_ist": "03:49",
    "end_date": "2028-11-16",
    "end_time_ist": "01:33",
    "state": "उदय (Rise)",
    "source_start": "03:49 ए एम, नवम्बर 15",
    "source_end": "01:33 ए एम, नवम्बर 16"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-11-16",
    "start_time_ist": "01:33",
    "end_date": "2028-11-16",
    "end_time_ist": "23:34",
    "state": "उदय (Rise)",
    "source_start": "01:33 ए एम, नवम्बर 16",
    "source_end": "11:34 पी एम, नवम्बर 16"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-11-16",
    "start_time_ist": "23:34",
    "end_date": "2028-11-17",
    "end_time_ist": "22:02",
    "state": "उदय (Rise)",
    "source_start": "11:34 पी एम, नवम्बर 16",
    "source_end": "10:02 पी एम, नवम्बर 17"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-11-17",
    "start_time_ist": "22:02",
    "end_date": "2028-11-18",
    "end_time_ist": "21:04",
    "state": "उदय (Rise)",
    "source_start": "10:02 पी एम, नवम्बर 17",
    "source_end": "09:04 पी एम, नवम्बर 18"
  },
  {
    "nak": "Mula",
    "start_date": "2028-11-18",
    "start_time_ist": "21:04",
    "end_date": "2028-11-19",
    "end_time_ist": "20:48",
    "state": "उदय (Rise)",
    "source_start": "09:04 पी एम, नवम्बर 18",
    "source_end": "08:48 पी एम, नवम्बर 19"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-11-19",
    "start_time_ist": "20:48",
    "end_date": "2028-11-20",
    "end_time_ist": "21:19",
    "state": "उदय (Rise)",
    "source_start": "08:48 पी एम, नवम्बर 19",
    "source_end": "09:19 पी एम, नवम्बर 20"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-11-20",
    "start_time_ist": "21:19",
    "end_date": "2028-11-21",
    "end_time_ist": "22:36",
    "state": "उदय (Rise)",
    "source_start": "09:19 पी एम, नवम्बर 20",
    "source_end": "10:36 पी एम, नवम्बर 21"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-11-21",
    "start_time_ist": "22:36",
    "end_date": "2028-11-23",
    "end_time_ist": "00:34",
    "state": "उदय (Rise)",
    "source_start": "10:36 पी एम, नवम्बर 21",
    "source_end": "12:34 ए एम, नवम्बर 23"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-11-23",
    "start_time_ist": "00:34",
    "end_date": "2028-11-24",
    "end_time_ist": "03:05",
    "state": "उदय (Rise)",
    "source_start": "12:34 ए एम, नवम्बर 23",
    "source_end": "03:05 ए एम, नवम्बर 24"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-11-24",
    "start_time_ist": "03:05",
    "end_date": "2028-11-25",
    "end_time_ist": "05:58",
    "state": "उदय (Rise)",
    "source_start": "03:05 ए एम, नवम्बर 24",
    "source_end": "05:58 ए एम, नवम्बर 25"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-11-25",
    "start_time_ist": "05:58",
    "end_date": "2028-11-26",
    "end_time_ist": "08:57",
    "state": "उदय (Rise)",
    "source_start": "05:58 ए एम, नवम्बर 25",
    "source_end": "08:57 ए एम, नवम्बर 26"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-11-26",
    "start_time_ist": "08:57",
    "end_date": "2028-11-27",
    "end_time_ist": "11:51",
    "state": "उदय (Rise)",
    "source_start": "08:57 ए एम, नवम्बर 26",
    "source_end": "11:51 ए एम, नवम्बर 27"
  },
  {
    "nak": "Revati",
    "start_date": "2028-11-27",
    "start_time_ist": "11:51",
    "end_date": "2028-11-28",
    "end_time_ist": "14:27",
    "state": "उदय (Rise)",
    "source_start": "11:51 ए एम, नवम्बर 27",
    "source_end": "02:27 पी एम, नवम्बर 28"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-11-28",
    "start_time_ist": "14:27",
    "end_date": "2028-11-29",
    "end_time_ist": "16:40",
    "state": "उदय (Rise)",
    "source_start": "02:27 पी एम, नवम्बर 28",
    "source_end": "04:40 पी एम, नवम्बर 29"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-11-29",
    "start_time_ist": "16:40",
    "end_date": "2028-11-30",
    "end_time_ist": "18:25",
    "state": "उदय (Rise)",
    "source_start": "04:40 पी एम, नवम्बर 29",
    "source_end": "06:25 पी एम, नवम्बर 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-11-30",
    "start_time_ist": "18:25",
    "end_date": "2028-12-01",
    "end_time_ist": "19:41",
    "state": "उदय (Rise)",
    "source_start": "06:25 पी एम, नवम्बर 30",
    "source_end": "07:41 पी एम, दिसम्बर 01"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-12-01",
    "start_time_ist": "19:41",
    "end_date": "2028-12-02",
    "end_time_ist": "20:29",
    "state": "उदय (Rise)",
    "source_start": "07:41 पी एम, दिसम्बर 01",
    "source_end": "08:29 पी एम, दिसम्बर 02"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-12-02",
    "start_time_ist": "20:29",
    "end_date": "2028-12-03",
    "end_time_ist": "20:53",
    "state": "उदय (Rise)",
    "source_start": "08:29 पी एम, दिसम्बर 02",
    "source_end": "08:53 पी एम, दिसम्बर 03"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-12-03",
    "start_time_ist": "20:53",
    "end_date": "2028-12-04",
    "end_time_ist": "20:54",
    "state": "उदय (Rise)",
    "source_start": "08:53 पी एम, दिसम्बर 03",
    "source_end": "08:54 पी एम, दिसम्बर 04"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2028-12-04",
    "start_time_ist": "20:54",
    "end_date": "2028-12-05",
    "end_time_ist": "20:35",
    "state": "उदय (Rise)",
    "source_start": "08:54 पी एम, दिसम्बर 04",
    "source_end": "08:35 पी एम, दिसम्बर 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2028-12-05",
    "start_time_ist": "20:35",
    "end_date": "2028-12-06",
    "end_time_ist": "19:58",
    "state": "उदय (Rise)",
    "source_start": "08:35 पी एम, दिसम्बर 05",
    "source_end": "07:58 पी एम, दिसम्बर 06"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2028-12-06",
    "start_time_ist": "19:58",
    "end_date": "2028-12-07",
    "end_time_ist": "19:06",
    "state": "उदय (Rise)",
    "source_start": "07:58 पी एम, दिसम्बर 06",
    "source_end": "07:06 पी एम, दिसम्बर 07"
  },
  {
    "nak": "Magha",
    "start_date": "2028-12-07",
    "start_time_ist": "19:06",
    "end_date": "2028-12-08",
    "end_time_ist": "17:59",
    "state": "उदय (Rise)",
    "source_start": "07:06 पी एम, दिसम्बर 07",
    "source_end": "05:59 पी एम, दिसम्बर 08"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2028-12-08",
    "start_time_ist": "17:59",
    "end_date": "2028-12-09",
    "end_time_ist": "16:39",
    "state": "उदय (Rise)",
    "source_start": "05:59 पी एम, दिसम्बर 08",
    "source_end": "04:39 पी एम, दिसम्बर 09"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2028-12-09",
    "start_time_ist": "16:39",
    "end_date": "2028-12-10",
    "end_time_ist": "15:10",
    "state": "उदय (Rise)",
    "source_start": "04:39 पी एम, दिसम्बर 09",
    "source_end": "03:10 पी एम, दिसम्बर 10"
  },
  {
    "nak": "Hasta",
    "start_date": "2028-12-10",
    "start_time_ist": "15:10",
    "end_date": "2028-12-11",
    "end_time_ist": "13:33",
    "state": "उदय (Rise)",
    "source_start": "03:10 पी एम, दिसम्बर 10",
    "source_end": "01:33 पी एम, दिसम्बर 11"
  },
  {
    "nak": "Chitra",
    "start_date": "2028-12-11",
    "start_time_ist": "13:33",
    "end_date": "2028-12-12",
    "end_time_ist": "11:54",
    "state": "उदय (Rise)",
    "source_start": "01:33 पी एम, दिसम्बर 11",
    "source_end": "11:54 ए एम, दिसम्बर 12"
  },
  {
    "nak": "Swati",
    "start_date": "2028-12-12",
    "start_time_ist": "11:54",
    "end_date": "2028-12-13",
    "end_time_ist": "10:19",
    "state": "उदय (Rise)",
    "source_start": "11:54 ए एम, दिसम्बर 12",
    "source_end": "10:19 ए एम, दिसम्बर 13"
  },
  {
    "nak": "Vishakha",
    "start_date": "2028-12-13",
    "start_time_ist": "10:19",
    "end_date": "2028-12-14",
    "end_time_ist": "08:52",
    "state": "उदय (Rise)",
    "source_start": "10:19 ए एम, दिसम्बर 13",
    "source_end": "08:52 ए एम, दिसम्बर 14"
  },
  {
    "nak": "Anuradha",
    "start_date": "2028-12-14",
    "start_time_ist": "08:52",
    "end_date": "2028-12-15",
    "end_time_ist": "07:42",
    "state": "उदय (Rise)",
    "source_start": "08:52 ए एम, दिसम्बर 14",
    "source_end": "07:42 ए एम, दिसम्बर 15"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2028-12-15",
    "start_time_ist": "07:42",
    "end_date": "2028-12-16",
    "end_time_ist": "06:55",
    "state": "उदय (Rise)",
    "source_start": "07:42 ए एम, दिसम्बर 15",
    "source_end": "06:55 ए एम, दिसम्बर 16"
  },
  {
    "nak": "Mula",
    "start_date": "2028-12-16",
    "start_time_ist": "06:55",
    "end_date": "2028-12-17",
    "end_time_ist": "06:38",
    "state": "उदय (Rise)",
    "source_start": "06:55 ए एम, दिसम्बर 16",
    "source_end": "06:38 ए एम, दिसम्बर 17"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2028-12-17",
    "start_time_ist": "06:38",
    "end_date": "2028-12-18",
    "end_time_ist": "06:56",
    "state": "उदय (Rise)",
    "source_start": "06:38 ए एम, दिसम्बर 17",
    "source_end": "06:56 ए एम, दिसम्बर 18"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2028-12-18",
    "start_time_ist": "06:56",
    "end_date": "2028-12-19",
    "end_time_ist": "07:52",
    "state": "उदय (Rise)",
    "source_start": "06:56 ए एम, दिसम्बर 18",
    "source_end": "07:52 ए एम, दिसम्बर 19"
  },
  {
    "nak": "Shravana",
    "start_date": "2028-12-19",
    "start_time_ist": "07:52",
    "end_date": "2028-12-20",
    "end_time_ist": "09:27",
    "state": "उदय (Rise)",
    "source_start": "07:52 ए एम, दिसम्बर 19",
    "source_end": "09:27 ए एम, दिसम्बर 20"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2028-12-20",
    "start_time_ist": "09:27",
    "end_date": "2028-12-21",
    "end_time_ist": "11:36",
    "state": "उदय (Rise)",
    "source_start": "09:27 ए एम, दिसम्बर 20",
    "source_end": "11:36 ए एम, दिसम्बर 21"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2028-12-21",
    "start_time_ist": "11:36",
    "end_date": "2028-12-22",
    "end_time_ist": "14:13",
    "state": "उदय (Rise)",
    "source_start": "11:36 ए एम, दिसम्बर 21",
    "source_end": "02:13 पी एम, दिसम्बर 22"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2028-12-22",
    "start_time_ist": "14:13",
    "end_date": "2028-12-23",
    "end_time_ist": "17:06",
    "state": "उदय (Rise)",
    "source_start": "02:13 पी एम, दिसम्बर 22",
    "source_end": "05:06 पी एम, दिसम्बर 23"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2028-12-23",
    "start_time_ist": "17:06",
    "end_date": "2028-12-24",
    "end_time_ist": "20:04",
    "state": "उदय (Rise)",
    "source_start": "05:06 पी एम, दिसम्बर 23",
    "source_end": "08:04 पी एम, दिसम्बर 24"
  },
  {
    "nak": "Revati",
    "start_date": "2028-12-24",
    "start_time_ist": "20:04",
    "end_date": "2028-12-25",
    "end_time_ist": "22:51",
    "state": "उदय (Rise)",
    "source_start": "08:04 पी एम, दिसम्बर 24",
    "source_end": "10:51 पी एम, दिसम्बर 25"
  },
  {
    "nak": "Ashwini",
    "start_date": "2028-12-25",
    "start_time_ist": "22:51",
    "end_date": "2028-12-27",
    "end_time_ist": "01:16",
    "state": "उदय (Rise)",
    "source_start": "10:51 पी एम, दिसम्बर 25",
    "source_end": "01:16 ए एम, दिसम्बर 27"
  },
  {
    "nak": "Bharani",
    "start_date": "2028-12-27",
    "start_time_ist": "01:16",
    "end_date": "2028-12-28",
    "end_time_ist": "03:10",
    "state": "उदय (Rise)",
    "source_start": "01:16 ए एम, दिसम्बर 27",
    "source_end": "03:10 ए एम, दिसम्बर 28"
  },
  {
    "nak": "Krittika",
    "start_date": "2028-12-28",
    "start_time_ist": "03:10",
    "end_date": "2028-12-29",
    "end_time_ist": "04:29",
    "state": "उदय (Rise)",
    "source_start": "03:10 ए एम, दिसम्बर 28",
    "source_end": "04:29 ए एम, दिसम्बर 29"
  },
  {
    "nak": "Rohini",
    "start_date": "2028-12-29",
    "start_time_ist": "04:29",
    "end_date": "2028-12-30",
    "end_time_ist": "05:10",
    "state": "उदय (Rise)",
    "source_start": "04:29 ए एम, दिसम्बर 29",
    "source_end": "05:10 ए एम, दिसम्बर 30"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2028-12-30",
    "start_time_ist": "05:10",
    "end_date": "2028-12-31",
    "end_time_ist": "05:15",
    "state": "उदय (Rise)",
    "source_start": "05:10 ए एम, दिसम्बर 30",
    "source_end": "05:15 ए एम, दिसम्बर 31"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-12-31",
    "start_time_ist": "05:15",
    "end_date": "2029-01-01",
    "end_time_ist": "04:49",
    "state": "उदय (Rise)",
    "source_start": "05:15 ए एम, दिसम्बर 31",
    "source_end": "04:49 ए एम, जनवरी 01"
  },
  {
    "nak": "Ardra",
    "start_date": "2028-12-31",
    "start_time_ist": "05:15",
    "end_date": "2029-01-01",
    "end_time_ist": "04:49",
    "state": "उदय (Rise)",
    "source_start": "05:15 ए एम, दिसम्बर 31",
    "source_end": "04:49 ए एम, जनवरी 01"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-01-01",
    "start_time_ist": "04:49",
    "end_date": "2029-01-02",
    "end_time_ist": "03:56",
    "state": "उदय (Rise)",
    "source_start": "04:49 ए एम, जनवरी 01",
    "source_end": "03:56 ए एम, जनवरी 02"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-01-02",
    "start_time_ist": "03:56",
    "end_date": "2029-01-03",
    "end_time_ist": "02:44",
    "state": "उदय (Rise)",
    "source_start": "03:56 ए एम, जनवरी 02",
    "source_end": "02:44 ए एम, जनवरी 03"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-01-03",
    "start_time_ist": "02:44",
    "end_date": "2029-01-04",
    "end_time_ist": "01:17",
    "state": "उदय (Rise)",
    "source_start": "02:44 ए एम, जनवरी 03",
    "source_end": "01:17 ए एम, जनवरी 04"
  },
  {
    "nak": "Magha",
    "start_date": "2029-01-04",
    "start_time_ist": "01:17",
    "end_date": "2029-01-04",
    "end_time_ist": "23:43",
    "state": "उदय (Rise)",
    "source_start": "01:17 ए एम, जनवरी 04",
    "source_end": "11:43 पी एम, जनवरी 04"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-01-04",
    "start_time_ist": "23:43",
    "end_date": "2029-01-05",
    "end_time_ist": "22:06",
    "state": "उदय (Rise)",
    "source_start": "11:43 पी एम, जनवरी 04",
    "source_end": "10:06 पी एम, जनवरी 05"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-01-05",
    "start_time_ist": "22:06",
    "end_date": "2029-01-06",
    "end_time_ist": "20:31",
    "state": "उदय (Rise)",
    "source_start": "10:06 पी एम, जनवरी 05",
    "source_end": "08:31 पी एम, जनवरी 06"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-01-06",
    "start_time_ist": "20:31",
    "end_date": "2029-01-07",
    "end_time_ist": "19:02",
    "state": "उदय (Rise)",
    "source_start": "08:31 पी एम, जनवरी 06",
    "source_end": "07:02 पी एम, जनवरी 07"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-01-07",
    "start_time_ist": "19:02",
    "end_date": "2029-01-08",
    "end_time_ist": "17:43",
    "state": "उदय (Rise)",
    "source_start": "07:02 पी एम, जनवरी 07",
    "source_end": "05:43 पी एम, जनवरी 08"
  },
  {
    "nak": "Swati",
    "start_date": "2029-01-08",
    "start_time_ist": "17:43",
    "end_date": "2029-01-09",
    "end_time_ist": "16:36",
    "state": "उदय (Rise)",
    "source_start": "05:43 पी एम, जनवरी 08",
    "source_end": "04:36 पी एम, जनवरी 09"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-01-09",
    "start_time_ist": "16:36",
    "end_date": "2029-01-10",
    "end_time_ist": "15:44",
    "state": "उदय (Rise)",
    "source_start": "04:36 पी एम, जनवरी 09",
    "source_end": "03:44 पी एम, जनवरी 10"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-01-10",
    "start_time_ist": "15:44",
    "end_date": "2029-01-11",
    "end_time_ist": "15:10",
    "state": "उदय (Rise)",
    "source_start": "03:44 पी एम, जनवरी 10",
    "source_end": "03:10 पी एम, जनवरी 11"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-01-11",
    "start_time_ist": "15:10",
    "end_date": "2029-01-12",
    "end_time_ist": "14:55",
    "state": "उदय (Rise)",
    "source_start": "03:10 पी एम, जनवरी 11",
    "source_end": "02:55 पी एम, जनवरी 12"
  },
  {
    "nak": "Mula",
    "start_date": "2029-01-12",
    "start_time_ist": "14:55",
    "end_date": "2029-01-13",
    "end_time_ist": "15:03",
    "state": "उदय (Rise)",
    "source_start": "02:55 पी एम, जनवरी 12",
    "source_end": "03:03 पी एम, जनवरी 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-01-13",
    "start_time_ist": "15:03",
    "end_date": "2029-01-14",
    "end_time_ist": "15:37",
    "state": "उदय (Rise)",
    "source_start": "03:03 पी एम, जनवरी 13",
    "source_end": "03:37 पी एम, जनवरी 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-01-14",
    "start_time_ist": "15:37",
    "end_date": "2029-01-15",
    "end_time_ist": "16:38",
    "state": "उदय (Rise)",
    "source_start": "03:37 पी एम, जनवरी 14",
    "source_end": "04:38 पी एम, जनवरी 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-01-15",
    "start_time_ist": "16:38",
    "end_date": "2029-01-16",
    "end_time_ist": "18:08",
    "state": "उदय (Rise)",
    "source_start": "04:38 पी एम, जनवरी 15",
    "source_end": "06:08 पी एम, जनवरी 16"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-01-16",
    "start_time_ist": "18:08",
    "end_date": "2029-01-17",
    "end_time_ist": "20:07",
    "state": "उदय (Rise)",
    "source_start": "06:08 पी एम, जनवरी 16",
    "source_end": "08:07 पी एम, जनवरी 17"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-01-17",
    "start_time_ist": "20:07",
    "end_date": "2029-01-18",
    "end_time_ist": "22:32",
    "state": "उदय (Rise)",
    "source_start": "08:07 पी एम, जनवरी 17",
    "source_end": "10:32 पी एम, जनवरी 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-01-18",
    "start_time_ist": "22:32",
    "end_date": "2029-01-20",
    "end_time_ist": "01:17",
    "state": "उदय (Rise)",
    "source_start": "10:32 पी एम, जनवरी 18",
    "source_end": "01:17 ए एम, जनवरी 20"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-01-20",
    "start_time_ist": "01:17",
    "end_date": "2029-01-21",
    "end_time_ist": "04:14",
    "state": "उदय (Rise)",
    "source_start": "01:17 ए एम, जनवरी 20",
    "source_end": "04:14 ए एम, जनवरी 21"
  },
  {
    "nak": "Revati",
    "start_date": "2029-01-21",
    "start_time_ist": "04:14",
    "end_date": "2029-01-22",
    "end_time_ist": "07:11",
    "state": "उदय (Rise)",
    "source_start": "04:14 ए एम, जनवरी 21",
    "source_end": "07:11 ए एम, जनवरी 22"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-01-22",
    "start_time_ist": "07:11",
    "end_date": "2029-01-23",
    "end_time_ist": "09:55",
    "state": "उदय (Rise)",
    "source_start": "07:11 ए एम, जनवरी 22",
    "source_end": "09:55 ए एम, जनवरी 23"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-01-23",
    "start_time_ist": "09:55",
    "end_date": "2029-01-24",
    "end_time_ist": "12:14",
    "state": "उदय (Rise)",
    "source_start": "09:55 ए एम, जनवरी 23",
    "source_end": "12:14 पी एम, जनवरी 24"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-01-24",
    "start_time_ist": "12:14",
    "end_date": "2029-01-25",
    "end_time_ist": "13:58",
    "state": "उदय (Rise)",
    "source_start": "12:14 पी एम, जनवरी 24",
    "source_end": "01:58 पी एम, जनवरी 25"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-01-25",
    "start_time_ist": "13:58",
    "end_date": "2029-01-26",
    "end_time_ist": "14:59",
    "state": "उदय (Rise)",
    "source_start": "01:58 पी एम, जनवरी 25",
    "source_end": "02:59 पी एम, जनवरी 26"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-01-26",
    "start_time_ist": "14:59",
    "end_date": "2029-01-27",
    "end_time_ist": "15:15",
    "state": "उदय (Rise)",
    "source_start": "02:59 पी एम, जनवरी 26",
    "source_end": "03:15 पी एम, जनवरी 27"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-01-27",
    "start_time_ist": "15:15",
    "end_date": "2029-01-28",
    "end_time_ist": "14:47",
    "state": "उदय (Rise)",
    "source_start": "03:15 पी एम, जनवरी 27",
    "source_end": "02:47 पी एम, जनवरी 28"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-01-28",
    "start_time_ist": "14:47",
    "end_date": "2029-01-29",
    "end_time_ist": "13:41",
    "state": "उदय (Rise)",
    "source_start": "02:47 पी एम, जनवरी 28",
    "source_end": "01:41 पी एम, जनवरी 29"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-01-29",
    "start_time_ist": "13:41",
    "end_date": "2029-01-30",
    "end_time_ist": "12:02",
    "state": "उदय (Rise)",
    "source_start": "01:41 पी एम, जनवरी 29",
    "source_end": "12:02 पी एम, जनवरी 30"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-01-30",
    "start_time_ist": "12:02",
    "end_date": "2029-01-31",
    "end_time_ist": "10:00",
    "state": "उदय (Rise)",
    "source_start": "12:02 पी एम, जनवरी 30",
    "source_end": "10:00 ए एम, जनवरी 31"
  },
  {
    "nak": "Magha",
    "start_date": "2029-01-31",
    "start_time_ist": "10:00",
    "end_date": "2029-02-01",
    "end_time_ist": "07:44",
    "state": "उदय (Rise)",
    "source_start": "10:00 ए एम, जनवरी 31",
    "source_end": "07:44 ए एम, फरवरी 01"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-02-01",
    "start_time_ist": "07:44",
    "end_date": "2029-02-02",
    "end_time_ist": "05:23",
    "state": "उदय (Rise)",
    "source_start": "07:44 ए एम, फरवरी 01",
    "source_end": "05:23 ए एम, फरवरी 02"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-02-02",
    "start_time_ist": "05:23",
    "end_date": "2029-02-03",
    "end_time_ist": "03:07",
    "state": "उदय (Rise)",
    "source_start": "05:23 ए एम, फरवरी 02",
    "source_end": "03:07 ए एम, फरवरी 03"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-02-03",
    "start_time_ist": "03:07",
    "end_date": "2029-02-04",
    "end_time_ist": "01:03",
    "state": "उदय (Rise)",
    "source_start": "03:07 ए एम, फरवरी 03",
    "source_end": "01:03 ए एम, फरवरी 04"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-02-04",
    "start_time_ist": "01:03",
    "end_date": "2029-02-04",
    "end_time_ist": "23:19",
    "state": "उदय (Rise)",
    "source_start": "01:03 ए एम, फरवरी 04",
    "source_end": "11:19 पी एम, फरवरी 04"
  },
  {
    "nak": "Swati",
    "start_date": "2029-02-04",
    "start_time_ist": "23:19",
    "end_date": "2029-02-05",
    "end_time_ist": "21:59",
    "state": "उदय (Rise)",
    "source_start": "11:19 पी एम, फरवरी 04",
    "source_end": "09:59 पी एम, फरवरी 05"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-02-05",
    "start_time_ist": "21:59",
    "end_date": "2029-02-06",
    "end_time_ist": "21:07",
    "state": "उदय (Rise)",
    "source_start": "09:59 पी एम, फरवरी 05",
    "source_end": "09:07 पी एम, फरवरी 06"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-02-06",
    "start_time_ist": "21:07",
    "end_date": "2029-02-07",
    "end_time_ist": "20:45",
    "state": "उदय (Rise)",
    "source_start": "09:07 पी एम, फरवरी 06",
    "source_end": "08:45 पी एम, फरवरी 07"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-02-07",
    "start_time_ist": "20:45",
    "end_date": "2029-02-08",
    "end_time_ist": "20:51",
    "state": "उदय (Rise)",
    "source_start": "08:45 पी एम, फरवरी 07",
    "source_end": "08:51 पी एम, फरवरी 08"
  },
  {
    "nak": "Mula",
    "start_date": "2029-02-08",
    "start_time_ist": "20:51",
    "end_date": "2029-02-09",
    "end_time_ist": "21:25",
    "state": "उदय (Rise)",
    "source_start": "08:51 पी एम, फरवरी 08",
    "source_end": "09:25 पी एम, फरवरी 09"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-02-09",
    "start_time_ist": "21:25",
    "end_date": "2029-02-10",
    "end_time_ist": "22:25",
    "state": "उदय (Rise)",
    "source_start": "09:25 पी एम, फरवरी 09",
    "source_end": "10:25 पी एम, फरवरी 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-02-10",
    "start_time_ist": "22:25",
    "end_date": "2029-02-11",
    "end_time_ist": "23:48",
    "state": "उदय (Rise)",
    "source_start": "10:25 पी एम, फरवरी 10",
    "source_end": "11:48 पी एम, फरवरी 11"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-02-11",
    "start_time_ist": "23:48",
    "end_date": "2029-02-13",
    "end_time_ist": "01:33",
    "state": "उदय (Rise)",
    "source_start": "11:48 पी एम, फरवरी 11",
    "source_end": "01:33 ए एम, फरवरी 13"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-02-13",
    "start_time_ist": "01:33",
    "end_date": "2029-02-14",
    "end_time_ist": "03:39",
    "state": "उदय (Rise)",
    "source_start": "01:33 ए एम, फरवरी 13",
    "source_end": "03:39 ए एम, फरवरी 14"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-02-14",
    "start_time_ist": "03:39",
    "end_date": "2029-02-15",
    "end_time_ist": "06:05",
    "state": "उदय (Rise)",
    "source_start": "03:39 ए एम, फरवरी 14",
    "source_end": "06:05 ए एम, फरवरी 15"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-02-15",
    "start_time_ist": "06:05",
    "end_date": "2029-02-16",
    "end_time_ist": "08:47",
    "state": "उदय (Rise)",
    "source_start": "06:05 ए एम, फरवरी 15",
    "source_end": "08:47 ए एम, फरवरी 16"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-02-16",
    "start_time_ist": "08:47",
    "end_date": "2029-02-17",
    "end_time_ist": "11:41",
    "state": "उदय (Rise)",
    "source_start": "08:47 ए एम, फरवरी 16",
    "source_end": "11:41 ए एम, फरवरी 17"
  },
  {
    "nak": "Revati",
    "start_date": "2029-02-17",
    "start_time_ist": "11:41",
    "end_date": "2029-02-18",
    "end_time_ist": "14:41",
    "state": "उदय (Rise)",
    "source_start": "11:41 ए एम, फरवरी 17",
    "source_end": "02:41 पी एम, फरवरी 18"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-02-18",
    "start_time_ist": "14:41",
    "end_date": "2029-02-19",
    "end_time_ist": "17:38",
    "state": "उदय (Rise)",
    "source_start": "02:41 पी एम, फरवरी 18",
    "source_end": "05:38 पी एम, फरवरी 19"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-02-19",
    "start_time_ist": "17:38",
    "end_date": "2029-02-20",
    "end_time_ist": "20:20",
    "state": "उदय (Rise)",
    "source_start": "05:38 पी एम, फरवरी 19",
    "source_end": "08:20 पी एम, फरवरी 20"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-02-20",
    "start_time_ist": "20:20",
    "end_date": "2029-02-21",
    "end_time_ist": "22:35",
    "state": "उदय (Rise)",
    "source_start": "08:20 पी एम, फरवरी 20",
    "source_end": "10:35 पी एम, फरवरी 21"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-02-21",
    "start_time_ist": "22:35",
    "end_date": "2029-02-23",
    "end_time_ist": "00:13",
    "state": "उदय (Rise)",
    "source_start": "10:35 पी एम, फरवरी 21",
    "source_end": "12:13 ए एम, फरवरी 23"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-02-23",
    "start_time_ist": "00:13",
    "end_date": "2029-02-24",
    "end_time_ist": "01:05",
    "state": "उदय (Rise)",
    "source_start": "12:13 ए एम, फरवरी 23",
    "source_end": "01:05 ए एम, फरवरी 24"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-02-24",
    "start_time_ist": "01:05",
    "end_date": "2029-02-25",
    "end_time_ist": "01:09",
    "state": "उदय (Rise)",
    "source_start": "01:05 ए एम, फरवरी 24",
    "source_end": "01:09 ए एम, फरवरी 25"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-02-25",
    "start_time_ist": "01:09",
    "end_date": "2029-02-26",
    "end_time_ist": "00:24",
    "state": "उदय (Rise)",
    "source_start": "01:09 ए एम, फरवरी 25",
    "source_end": "12:24 ए एम, फरवरी 26"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-02-26",
    "start_time_ist": "00:24",
    "end_date": "2029-02-26",
    "end_time_ist": "22:54",
    "state": "उदय (Rise)",
    "source_start": "12:24 ए एम, फरवरी 26",
    "source_end": "10:54 पी एम, फरवरी 26"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-02-26",
    "start_time_ist": "22:54",
    "end_date": "2029-02-27",
    "end_time_ist": "20:47",
    "state": "उदय (Rise)",
    "source_start": "10:54 पी एम, फरवरी 26",
    "source_end": "08:47 पी एम, फरवरी 27"
  },
  {
    "nak": "Magha",
    "start_date": "2029-02-27",
    "start_time_ist": "20:47",
    "end_date": "2029-02-28",
    "end_time_ist": "18:12",
    "state": "उदय (Rise)",
    "source_start": "08:47 पी एम, फरवरी 27",
    "source_end": "06:12 पी एम, फरवरी 28"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-02-28",
    "start_time_ist": "18:12",
    "end_date": "2029-03-01",
    "end_time_ist": "15:21",
    "state": "उदय (Rise)",
    "source_start": "06:12 पी एम, फरवरी 28",
    "source_end": "03:21 पी एम, मार्च 01"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-03-01",
    "start_time_ist": "15:21",
    "end_date": "2029-03-02",
    "end_time_ist": "12:24",
    "state": "उदय (Rise)",
    "source_start": "03:21 पी एम, मार्च 01",
    "source_end": "12:24 पी एम, मार्च 02"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-03-02",
    "start_time_ist": "12:24",
    "end_date": "2029-03-03",
    "end_time_ist": "09:34",
    "state": "उदय (Rise)",
    "source_start": "12:24 पी एम, मार्च 02",
    "source_end": "09:34 ए एम, मार्च 03"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-03-03",
    "start_time_ist": "09:34",
    "end_date": "2029-03-04",
    "end_time_ist": "07:02",
    "state": "उदय (Rise)",
    "source_start": "09:34 ए एम, मार्च 03",
    "source_end": "07:02 ए एम, मार्च 04"
  },
  {
    "nak": "Swati",
    "start_date": "2029-03-04",
    "start_time_ist": "07:02",
    "end_date": "2029-03-05",
    "end_time_ist": "04:56",
    "state": "उदय (Rise)",
    "source_start": "07:02 ए एम, मार्च 04",
    "source_end": "04:56 ए एम, मार्च 05"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-03-05",
    "start_time_ist": "04:56",
    "end_date": "2029-03-06",
    "end_time_ist": "03:25",
    "state": "उदय (Rise)",
    "source_start": "04:56 ए एम, मार्च 05",
    "source_end": "03:25 ए एम, मार्च 06"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-03-06",
    "start_time_ist": "03:25",
    "end_date": "2029-03-07",
    "end_time_ist": "02:33",
    "state": "उदय (Rise)",
    "source_start": "03:25 ए एम, मार्च 06",
    "source_end": "02:33 ए एम, मार्च 07"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-03-07",
    "start_time_ist": "02:33",
    "end_date": "2029-03-08",
    "end_time_ist": "02:22",
    "state": "उदय (Rise)",
    "source_start": "02:33 ए एम, मार्च 07",
    "source_end": "02:22 ए एम, मार्च 08"
  },
  {
    "nak": "Mula",
    "start_date": "2029-03-08",
    "start_time_ist": "02:22",
    "end_date": "2029-03-09",
    "end_time_ist": "02:52",
    "state": "उदय (Rise)",
    "source_start": "02:22 ए एम, मार्च 08",
    "source_end": "02:52 ए एम, मार्च 09"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-03-09",
    "start_time_ist": "02:52",
    "end_date": "2029-03-10",
    "end_time_ist": "03:57",
    "state": "उदय (Rise)",
    "source_start": "02:52 ए एम, मार्च 09",
    "source_end": "03:57 ए एम, मार्च 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-03-10",
    "start_time_ist": "03:57",
    "end_date": "2029-03-11",
    "end_time_ist": "05:34",
    "state": "उदय (Rise)",
    "source_start": "03:57 ए एम, मार्च 10",
    "source_end": "05:34 ए एम, मार्च 11"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-03-11",
    "start_time_ist": "05:34",
    "end_date": "2029-03-12",
    "end_time_ist": "07:35",
    "state": "उदय (Rise)",
    "source_start": "05:34 ए एम, मार्च 11",
    "source_end": "07:35 ए एम, मार्च 12"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-03-12",
    "start_time_ist": "07:35",
    "end_date": "2029-03-13",
    "end_time_ist": "09:56",
    "state": "उदय (Rise)",
    "source_start": "07:35 ए एम, मार्च 12",
    "source_end": "09:56 ए एम, मार्च 13"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-03-13",
    "start_time_ist": "09:56",
    "end_date": "2029-03-14",
    "end_time_ist": "12:32",
    "state": "उदय (Rise)",
    "source_start": "09:56 ए एम, मार्च 13",
    "source_end": "12:32 पी एम, मार्च 14"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-03-14",
    "start_time_ist": "12:32",
    "end_date": "2029-03-15",
    "end_time_ist": "15:19",
    "state": "उदय (Rise)",
    "source_start": "12:32 पी एम, मार्च 14",
    "source_end": "03:19 पी एम, मार्च 15"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-03-15",
    "start_time_ist": "15:19",
    "end_date": "2029-03-16",
    "end_time_ist": "18:13",
    "state": "उदय (Rise)",
    "source_start": "03:19 पी एम, मार्च 15",
    "source_end": "06:13 पी एम, मार्च 16"
  },
  {
    "nak": "Revati",
    "start_date": "2029-03-16",
    "start_time_ist": "18:13",
    "end_date": "2029-03-17",
    "end_time_ist": "21:12",
    "state": "उदय (Rise)",
    "source_start": "06:13 पी एम, मार्च 16",
    "source_end": "09:12 पी एम, मार्च 17"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-03-17",
    "start_time_ist": "21:12",
    "end_date": "2029-03-19",
    "end_time_ist": "00:10",
    "state": "उदय (Rise)",
    "source_start": "09:12 पी एम, मार्च 17",
    "source_end": "12:10 ए एम, मार्च 19"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-03-19",
    "start_time_ist": "00:10",
    "end_date": "2029-03-20",
    "end_time_ist": "03:01",
    "state": "उदय (Rise)",
    "source_start": "12:10 ए एम, मार्च 19",
    "source_end": "03:01 ए एम, मार्च 20"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-03-20",
    "start_time_ist": "03:01",
    "end_date": "2029-03-21",
    "end_time_ist": "05:34",
    "state": "उदय (Rise)",
    "source_start": "03:01 ए एम, मार्च 20",
    "source_end": "05:34 ए एम, मार्च 21"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-03-21",
    "start_time_ist": "05:34",
    "end_date": "2029-03-22",
    "end_time_ist": "07:42",
    "state": "उदय (Rise)",
    "source_start": "05:34 ए एम, मार्च 21",
    "source_end": "07:42 ए एम, मार्च 22"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-03-22",
    "start_time_ist": "07:42",
    "end_date": "2029-03-23",
    "end_time_ist": "09:14",
    "state": "उदय (Rise)",
    "source_start": "07:42 ए एम, मार्च 22",
    "source_end": "09:14 ए एम, मार्च 23"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-03-23",
    "start_time_ist": "09:14",
    "end_date": "2029-03-24",
    "end_time_ist": "10:01",
    "state": "उदय (Rise)",
    "source_start": "09:14 ए एम, मार्च 23",
    "source_end": "10:01 ए एम, मार्च 24"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-03-24",
    "start_time_ist": "10:01",
    "end_date": "2029-03-25",
    "end_time_ist": "10:00",
    "state": "उदय (Rise)",
    "source_start": "10:01 ए एम, मार्च 24",
    "source_end": "10:00 ए एम, मार्च 25"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-03-25",
    "start_time_ist": "10:00",
    "end_date": "2029-03-26",
    "end_time_ist": "09:10",
    "state": "उदय (Rise)",
    "source_start": "10:00 ए एम, मार्च 25",
    "source_end": "09:10 ए एम, मार्च 26"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-03-26",
    "start_time_ist": "09:10",
    "end_date": "2029-03-27",
    "end_time_ist": "07:34",
    "state": "उदय (Rise)",
    "source_start": "09:10 ए एम, मार्च 26",
    "source_end": "07:34 ए एम, मार्च 27"
  },
  {
    "nak": "Magha",
    "start_date": "2029-03-27",
    "start_time_ist": "07:34",
    "end_date": "2029-03-28",
    "end_time_ist": "05:18",
    "state": "उदय (Rise)",
    "source_start": "07:34 ए एम, मार्च 27",
    "source_end": "05:18 ए एम, मार्च 28"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-03-28",
    "start_time_ist": "05:18",
    "end_date": "2029-03-29",
    "end_time_ist": "02:33",
    "state": "उदय (Rise)",
    "source_start": "05:18 ए एम, मार्च 28",
    "source_end": "02:33 ए एम, मार्च 29"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-03-29",
    "start_time_ist": "02:33",
    "end_date": "2029-03-29",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "02:33 ए एम, मार्च 29",
    "source_end": "11:29 पी एम, मार्च 29"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-03-29",
    "start_time_ist": "23:29",
    "end_date": "2029-03-30",
    "end_time_ist": "20:18",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, मार्च 29",
    "source_end": "08:18 पी एम, मार्च 30"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-03-30",
    "start_time_ist": "20:18",
    "end_date": "2029-03-31",
    "end_time_ist": "17:13",
    "state": "उदय (Rise)",
    "source_start": "08:18 पी एम, मार्च 30",
    "source_end": "05:13 पी एम, मार्च 31"
  },
  {
    "nak": "Swati",
    "start_date": "2029-03-31",
    "start_time_ist": "17:13",
    "end_date": "2029-04-01",
    "end_time_ist": "14:26",
    "state": "उदय (Rise)",
    "source_start": "05:13 पी एम, मार्च 31",
    "source_end": "02:26 पी एम, अप्रैल 01"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-04-01",
    "start_time_ist": "14:26",
    "end_date": "2029-04-02",
    "end_time_ist": "12:07",
    "state": "उदय (Rise)",
    "source_start": "02:26 पी एम, अप्रैल 01",
    "source_end": "12:07 पी एम, अप्रैल 02"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-04-02",
    "start_time_ist": "12:07",
    "end_date": "2029-04-03",
    "end_time_ist": "10:27",
    "state": "उदय (Rise)",
    "source_start": "12:07 पी एम, अप्रैल 02",
    "source_end": "10:27 ए एम, अप्रैल 03"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-04-03",
    "start_time_ist": "10:27",
    "end_date": "2029-04-04",
    "end_time_ist": "09:30",
    "state": "उदय (Rise)",
    "source_start": "10:27 ए एम, अप्रैल 03",
    "source_end": "09:30 ए एम, अप्रैल 04"
  },
  {
    "nak": "Mula",
    "start_date": "2029-04-04",
    "start_time_ist": "09:30",
    "end_date": "2029-04-05",
    "end_time_ist": "09:21",
    "state": "उदय (Rise)",
    "source_start": "09:30 ए एम, अप्रैल 04",
    "source_end": "09:21 ए एम, अप्रैल 05"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-04-05",
    "start_time_ist": "09:21",
    "end_date": "2029-04-06",
    "end_time_ist": "09:59",
    "state": "उदय (Rise)",
    "source_start": "09:21 ए एम, अप्रैल 05",
    "source_end": "09:59 ए एम, अप्रैल 06"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-04-06",
    "start_time_ist": "09:59",
    "end_date": "2029-04-07",
    "end_time_ist": "11:20",
    "state": "उदय (Rise)",
    "source_start": "09:59 ए एम, अप्रैल 06",
    "source_end": "11:20 ए एम, अप्रैल 07"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-04-07",
    "start_time_ist": "11:20",
    "end_date": "2029-04-08",
    "end_time_ist": "13:16",
    "state": "उदय (Rise)",
    "source_start": "11:20 ए एम, अप्रैल 07",
    "source_end": "01:16 पी एम, अप्रैल 08"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-04-08",
    "start_time_ist": "13:16",
    "end_date": "2029-04-09",
    "end_time_ist": "15:40",
    "state": "उदय (Rise)",
    "source_start": "01:16 पी एम, अप्रैल 08",
    "source_end": "03:40 पी एम, अप्रैल 09"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-04-09",
    "start_time_ist": "15:40",
    "end_date": "2029-04-10",
    "end_time_ist": "18:23",
    "state": "उदय (Rise)",
    "source_start": "03:40 पी एम, अप्रैल 09",
    "source_end": "06:23 पी एम, अप्रैल 10"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-04-10",
    "start_time_ist": "18:23",
    "end_date": "2029-04-11",
    "end_time_ist": "21:17",
    "state": "उदय (Rise)",
    "source_start": "06:23 पी एम, अप्रैल 10",
    "source_end": "09:17 पी एम, अप्रैल 11"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-04-11",
    "start_time_ist": "21:17",
    "end_date": "2029-04-13",
    "end_time_ist": "00:15",
    "state": "उदय (Rise)",
    "source_start": "09:17 पी एम, अप्रैल 11",
    "source_end": "12:15 ए एम, अप्रैल 13"
  },
  {
    "nak": "Revati",
    "start_date": "2029-04-13",
    "start_time_ist": "00:15",
    "end_date": "2029-04-14",
    "end_time_ist": "03:13",
    "state": "उदय (Rise)",
    "source_start": "12:15 ए एम, अप्रैल 13",
    "source_end": "03:13 ए एम, अप्रैल 14"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-04-14",
    "start_time_ist": "03:13",
    "end_date": "2029-04-15",
    "end_time_ist": "06:07",
    "state": "उदय (Rise)",
    "source_start": "03:13 ए एम, अप्रैल 14",
    "source_end": "06:07 ए एम, अप्रैल 15"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-04-15",
    "start_time_ist": "06:07",
    "end_date": "2029-04-16",
    "end_time_ist": "08:53",
    "state": "उदय (Rise)",
    "source_start": "06:07 ए एम, अप्रैल 15",
    "source_end": "08:53 ए एम, अप्रैल 16"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-04-16",
    "start_time_ist": "08:53",
    "end_date": "2029-04-17",
    "end_time_ist": "11:26",
    "state": "उदय (Rise)",
    "source_start": "08:53 ए एम, अप्रैल 16",
    "source_end": "11:26 ए एम, अप्रैल 17"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-04-17",
    "start_time_ist": "11:26",
    "end_date": "2029-04-18",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "11:26 ए एम, अप्रैल 17",
    "source_end": "01:40 पी एम, अप्रैल 18"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-04-18",
    "start_time_ist": "13:40",
    "end_date": "2029-04-19",
    "end_time_ist": "15:29",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, अप्रैल 18",
    "source_end": "03:29 पी एम, अप्रैल 19"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-04-19",
    "start_time_ist": "15:29",
    "end_date": "2029-04-20",
    "end_time_ist": "16:45",
    "state": "उदय (Rise)",
    "source_start": "03:29 पी एम, अप्रैल 19",
    "source_end": "04:45 पी एम, अप्रैल 20"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-04-20",
    "start_time_ist": "16:45",
    "end_date": "2029-04-21",
    "end_time_ist": "17:23",
    "state": "उदय (Rise)",
    "source_start": "04:45 पी एम, अप्रैल 20",
    "source_end": "05:23 पी एम, अप्रैल 21"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-04-21",
    "start_time_ist": "17:23",
    "end_date": "2029-04-22",
    "end_time_ist": "17:17",
    "state": "उदय (Rise)",
    "source_start": "05:23 पी एम, अप्रैल 21",
    "source_end": "05:17 पी एम, अप्रैल 22"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-04-22",
    "start_time_ist": "17:17",
    "end_date": "2029-04-23",
    "end_time_ist": "16:28",
    "state": "उदय (Rise)",
    "source_start": "05:17 पी एम, अप्रैल 22",
    "source_end": "04:28 पी एम, अप्रैल 23"
  },
  {
    "nak": "Magha",
    "start_date": "2029-04-23",
    "start_time_ist": "16:28",
    "end_date": "2029-04-24",
    "end_time_ist": "14:56",
    "state": "उदय (Rise)",
    "source_start": "04:28 पी एम, अप्रैल 23",
    "source_end": "02:56 पी एम, अप्रैल 24"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-04-24",
    "start_time_ist": "14:56",
    "end_date": "2029-04-25",
    "end_time_ist": "12:49",
    "state": "उदय (Rise)",
    "source_start": "02:56 पी एम, अप्रैल 24",
    "source_end": "12:49 पी एम, अप्रैल 25"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-04-25",
    "start_time_ist": "12:49",
    "end_date": "2029-04-26",
    "end_time_ist": "10:13",
    "state": "उदय (Rise)",
    "source_start": "12:49 पी एम, अप्रैल 25",
    "source_end": "10:13 ए एम, अप्रैल 26"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-04-26",
    "start_time_ist": "10:13",
    "end_date": "2029-04-27",
    "end_time_ist": "07:19",
    "state": "उदय (Rise)",
    "source_start": "10:13 ए एम, अप्रैल 26",
    "source_end": "07:19 ए एम, अप्रैल 27"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-04-27",
    "start_time_ist": "07:19",
    "end_date": "2029-04-28",
    "end_time_ist": "04:17",
    "state": "उदय (Rise)",
    "source_start": "07:19 ए एम, अप्रैल 27",
    "source_end": "04:17 ए एम, अप्रैल 28"
  },
  {
    "nak": "Swati",
    "start_date": "2029-04-28",
    "start_time_ist": "04:17",
    "end_date": "2029-04-29",
    "end_time_ist": "01:21",
    "state": "उदय (Rise)",
    "source_start": "04:17 ए एम, अप्रैल 28",
    "source_end": "01:21 ए एम, अप्रैल 29"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-04-29",
    "start_time_ist": "01:21",
    "end_date": "2029-04-29",
    "end_time_ist": "22:40",
    "state": "उदय (Rise)",
    "source_start": "01:21 ए एम, अप्रैल 29",
    "source_end": "10:40 पी एम, अप्रैल 29"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-04-29",
    "start_time_ist": "22:40",
    "end_date": "2029-04-30",
    "end_time_ist": "20:26",
    "state": "उदय (Rise)",
    "source_start": "10:40 पी एम, अप्रैल 29",
    "source_end": "08:26 पी एम, अप्रैल 30"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-04-30",
    "start_time_ist": "20:26",
    "end_date": "2029-05-01",
    "end_time_ist": "18:48",
    "state": "उदय (Rise)",
    "source_start": "08:26 पी एम, अप्रैल 30",
    "source_end": "06:48 पी एम, मई 01"
  },
  {
    "nak": "Mula",
    "start_date": "2029-05-01",
    "start_time_ist": "18:48",
    "end_date": "2029-05-02",
    "end_time_ist": "17:54",
    "state": "उदय (Rise)",
    "source_start": "06:48 पी एम, मई 01",
    "source_end": "05:54 पी एम, मई 02"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-05-02",
    "start_time_ist": "17:54",
    "end_date": "2029-05-03",
    "end_time_ist": "17:48",
    "state": "उदय (Rise)",
    "source_start": "05:54 पी एम, मई 02",
    "source_end": "05:48 पी एम, मई 03"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-05-03",
    "start_time_ist": "17:48",
    "end_date": "2029-05-04",
    "end_time_ist": "18:30",
    "state": "उदय (Rise)",
    "source_start": "05:48 पी एम, मई 03",
    "source_end": "06:30 पी एम, मई 04"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-05-04",
    "start_time_ist": "18:30",
    "end_date": "2029-05-05",
    "end_time_ist": "19:57",
    "state": "उदय (Rise)",
    "source_start": "06:30 पी एम, मई 04",
    "source_end": "07:57 पी एम, मई 05"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-05-05",
    "start_time_ist": "19:57",
    "end_date": "2029-05-06",
    "end_time_ist": "22:02",
    "state": "उदय (Rise)",
    "source_start": "07:57 पी एम, मई 05",
    "source_end": "10:02 पी एम, मई 06"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-05-06",
    "start_time_ist": "22:02",
    "end_date": "2029-05-08",
    "end_time_ist": "00:36",
    "state": "उदय (Rise)",
    "source_start": "10:02 पी एम, मई 06",
    "source_end": "12:36 ए एम, मई 08"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-05-08",
    "start_time_ist": "00:36",
    "end_date": "2029-05-09",
    "end_time_ist": "03:28",
    "state": "उदय (Rise)",
    "source_start": "12:36 ए एम, मई 08",
    "source_end": "03:28 ए एम, मई 09"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-05-09",
    "start_time_ist": "03:28",
    "end_date": "2029-05-10",
    "end_time_ist": "06:28",
    "state": "उदय (Rise)",
    "source_start": "03:28 ए एम, मई 09",
    "source_end": "06:28 ए एम, मई 10"
  },
  {
    "nak": "Revati",
    "start_date": "2029-05-10",
    "start_time_ist": "06:28",
    "end_date": "2029-05-11",
    "end_time_ist": "09:26",
    "state": "उदय (Rise)",
    "source_start": "06:28 ए एम, मई 10",
    "source_end": "09:26 ए एम, मई 11"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-05-11",
    "start_time_ist": "09:26",
    "end_date": "2029-05-12",
    "end_time_ist": "12:17",
    "state": "उदय (Rise)",
    "source_start": "09:26 ए एम, मई 11",
    "source_end": "12:17 पी एम, मई 12"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-05-12",
    "start_time_ist": "12:17",
    "end_date": "2029-05-13",
    "end_time_ist": "14:56",
    "state": "उदय (Rise)",
    "source_start": "12:17 पी एम, मई 12",
    "source_end": "02:56 पी एम, मई 13"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-05-13",
    "start_time_ist": "14:56",
    "end_date": "2029-05-14",
    "end_time_ist": "17:18",
    "state": "उदय (Rise)",
    "source_start": "02:56 पी एम, मई 13",
    "source_end": "05:18 पी एम, मई 14"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-05-14",
    "start_time_ist": "17:18",
    "end_date": "2029-05-15",
    "end_time_ist": "19:21",
    "state": "उदय (Rise)",
    "source_start": "05:18 पी एम, मई 14",
    "source_end": "07:21 पी एम, मई 15"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-05-15",
    "start_time_ist": "19:21",
    "end_date": "2029-05-16",
    "end_time_ist": "21:02",
    "state": "उदय (Rise)",
    "source_start": "07:21 पी एम, मई 15",
    "source_end": "09:02 पी एम, मई 16"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-05-16",
    "start_time_ist": "21:02",
    "end_date": "2029-05-17",
    "end_time_ist": "22:17",
    "state": "उदय (Rise)",
    "source_start": "09:02 पी एम, मई 16",
    "source_end": "10:17 पी एम, मई 17"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-05-17",
    "start_time_ist": "22:17",
    "end_date": "2029-05-18",
    "end_time_ist": "23:04",
    "state": "उदय (Rise)",
    "source_start": "10:17 पी एम, मई 17",
    "source_end": "11:04 पी एम, मई 18"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-05-18",
    "start_time_ist": "23:04",
    "end_date": "2029-05-19",
    "end_time_ist": "23:20",
    "state": "उदय (Rise)",
    "source_start": "11:04 पी एम, मई 18",
    "source_end": "11:20 पी एम, मई 19"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-05-19",
    "start_time_ist": "23:20",
    "end_date": "2029-05-20",
    "end_time_ist": "23:02",
    "state": "उदय (Rise)",
    "source_start": "11:20 पी एम, मई 19",
    "source_end": "11:02 पी एम, मई 20"
  },
  {
    "nak": "Magha",
    "start_date": "2029-05-20",
    "start_time_ist": "23:02",
    "end_date": "2029-05-21",
    "end_time_ist": "22:10",
    "state": "उदय (Rise)",
    "source_start": "11:02 पी एम, मई 20",
    "source_end": "10:10 पी एम, मई 21"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-05-21",
    "start_time_ist": "22:10",
    "end_date": "2029-05-22",
    "end_time_ist": "20:46",
    "state": "उदय (Rise)",
    "source_start": "10:10 पी एम, मई 21",
    "source_end": "08:46 पी एम, मई 22"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-05-22",
    "start_time_ist": "20:46",
    "end_date": "2029-05-23",
    "end_time_ist": "18:55",
    "state": "उदय (Rise)",
    "source_start": "08:46 पी एम, मई 22",
    "source_end": "06:55 पी एम, मई 23"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-05-23",
    "start_time_ist": "18:55",
    "end_date": "2029-05-24",
    "end_time_ist": "16:41",
    "state": "उदय (Rise)",
    "source_start": "06:55 पी एम, मई 23",
    "source_end": "04:41 पी एम, मई 24"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-05-24",
    "start_time_ist": "16:41",
    "end_date": "2029-05-25",
    "end_time_ist": "14:14",
    "state": "उदय (Rise)",
    "source_start": "04:41 पी एम, मई 24",
    "source_end": "02:14 पी एम, मई 25"
  },
  {
    "nak": "Swati",
    "start_date": "2029-05-25",
    "start_time_ist": "14:14",
    "end_date": "2029-05-26",
    "end_time_ist": "11:41",
    "state": "उदय (Rise)",
    "source_start": "02:14 पी एम, मई 25",
    "source_end": "11:41 ए एम, मई 26"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-05-26",
    "start_time_ist": "11:41",
    "end_date": "2029-05-27",
    "end_time_ist": "09:13",
    "state": "उदय (Rise)",
    "source_start": "11:41 ए एम, मई 26",
    "source_end": "09:13 ए एम, मई 27"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-05-27",
    "start_time_ist": "09:13",
    "end_date": "2029-05-28",
    "end_time_ist": "06:59",
    "state": "उदय (Rise)",
    "source_start": "09:13 ए एम, मई 27",
    "source_end": "06:59 ए एम, मई 28"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-05-28",
    "start_time_ist": "06:59",
    "end_date": "2029-05-29",
    "end_time_ist": "05:09",
    "state": "उदय (Rise)",
    "source_start": "06:59 ए एम, मई 28",
    "source_end": "05:09 ए एम, मई 29"
  },
  {
    "nak": "Mula",
    "start_date": "2029-05-29",
    "start_time_ist": "05:09",
    "end_date": "2029-05-30",
    "end_time_ist": "03:51",
    "state": "उदय (Rise)",
    "source_start": "05:09 ए एम, मई 29",
    "source_end": "03:51 ए एम, मई 30"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-05-30",
    "start_time_ist": "03:51",
    "end_date": "2029-05-31",
    "end_time_ist": "03:12",
    "state": "उदय (Rise)",
    "source_start": "03:51 ए एम, मई 30",
    "source_end": "03:12 ए एम, मई 31"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-05-31",
    "start_time_ist": "03:12",
    "end_date": "2029-06-01",
    "end_time_ist": "03:18",
    "state": "उदय (Rise)",
    "source_start": "03:12 ए एम, मई 31",
    "source_end": "03:18 ए एम, जून 01"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-06-01",
    "start_time_ist": "03:18",
    "end_date": "2029-06-02",
    "end_time_ist": "04:08",
    "state": "उदय (Rise)",
    "source_start": "03:18 ए एम, जून 01",
    "source_end": "04:08 ए एम, जून 02"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-06-02",
    "start_time_ist": "04:08",
    "end_date": "2029-06-03",
    "end_time_ist": "05:42",
    "state": "उदय (Rise)",
    "source_start": "04:08 ए एम, जून 02",
    "source_end": "05:42 ए एम, जून 03"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-06-03",
    "start_time_ist": "05:42",
    "end_date": "2029-06-04",
    "end_time_ist": "07:53",
    "state": "उदय (Rise)",
    "source_start": "05:42 ए एम, जून 03",
    "source_end": "07:53 ए एम, जून 04"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-06-04",
    "start_time_ist": "07:53",
    "end_date": "2029-06-05",
    "end_time_ist": "10:30",
    "state": "उदय (Rise)",
    "source_start": "07:53 ए एम, जून 04",
    "source_end": "10:30 ए एम, जून 05"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-06-05",
    "start_time_ist": "10:30",
    "end_date": "2029-06-06",
    "end_time_ist": "13:24",
    "state": "उदय (Rise)",
    "source_start": "10:30 ए एम, जून 05",
    "source_end": "01:24 पी एम, जून 06"
  },
  {
    "nak": "Revati",
    "start_date": "2029-06-06",
    "start_time_ist": "13:24",
    "end_date": "2029-06-07",
    "end_time_ist": "16:22",
    "state": "उदय (Rise)",
    "source_start": "01:24 पी एम, जून 06",
    "source_end": "04:22 पी एम, जून 07"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-06-07",
    "start_time_ist": "16:22",
    "end_date": "2029-06-08",
    "end_time_ist": "19:14",
    "state": "उदय (Rise)",
    "source_start": "04:22 पी एम, जून 07",
    "source_end": "07:14 पी एम, जून 08"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-06-08",
    "start_time_ist": "19:14",
    "end_date": "2029-06-09",
    "end_time_ist": "21:50",
    "state": "उदय (Rise)",
    "source_start": "07:14 पी एम, जून 08",
    "source_end": "09:50 पी एम, जून 09"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-06-09",
    "start_time_ist": "21:50",
    "end_date": "2029-06-11",
    "end_time_ist": "00:04",
    "state": "उदय (Rise)",
    "source_start": "09:50 पी एम, जून 09",
    "source_end": "12:04 ए एम, जून 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-06-11",
    "start_time_ist": "00:04",
    "end_date": "2029-06-12",
    "end_time_ist": "01:54",
    "state": "उदय (Rise)",
    "source_start": "12:04 ए एम, जून 11",
    "source_end": "01:54 ए एम, जून 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-06-12",
    "start_time_ist": "01:54",
    "end_date": "2029-06-13",
    "end_time_ist": "03:17",
    "state": "उदय (Rise)",
    "source_start": "01:54 ए एम, जून 12",
    "source_end": "03:17 ए एम, जून 13"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-06-13",
    "start_time_ist": "03:17",
    "end_date": "2029-06-14",
    "end_time_ist": "04:13",
    "state": "उदय (Rise)",
    "source_start": "03:17 ए एम, जून 13",
    "source_end": "04:13 ए एम, जून 14"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-06-14",
    "start_time_ist": "04:13",
    "end_date": "2029-06-15",
    "end_time_ist": "04:42",
    "state": "उदय (Rise)",
    "source_start": "04:13 ए एम, जून 14",
    "source_end": "04:42 ए एम, जून 15"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-06-15",
    "start_time_ist": "04:42",
    "end_date": "2029-06-16",
    "end_time_ist": "04:46",
    "state": "उदय (Rise)",
    "source_start": "04:42 ए एम, जून 15",
    "source_end": "04:46 ए एम, जून 16"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-06-16",
    "start_time_ist": "04:46",
    "end_date": "2029-06-17",
    "end_time_ist": "04:26",
    "state": "उदय (Rise)",
    "source_start": "04:46 ए एम, जून 16",
    "source_end": "04:26 ए एम, जून 17"
  },
  {
    "nak": "Magha",
    "start_date": "2029-06-17",
    "start_time_ist": "04:26",
    "end_date": "2029-06-18",
    "end_time_ist": "03:44",
    "state": "उदय (Rise)",
    "source_start": "04:26 ए एम, जून 17",
    "source_end": "03:44 ए एम, जून 18"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-06-18",
    "start_time_ist": "03:44",
    "end_date": "2029-06-19",
    "end_time_ist": "02:40",
    "state": "उदय (Rise)",
    "source_start": "03:44 ए एम, जून 18",
    "source_end": "02:40 ए एम, जून 19"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-06-19",
    "start_time_ist": "02:40",
    "end_date": "2029-06-20",
    "end_time_ist": "01:18",
    "state": "उदय (Rise)",
    "source_start": "02:40 ए एम, जून 19",
    "source_end": "01:18 ए एम, जून 20"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-06-20",
    "start_time_ist": "01:18",
    "end_date": "2029-06-20",
    "end_time_ist": "23:41",
    "state": "उदय (Rise)",
    "source_start": "01:18 ए एम, जून 20",
    "source_end": "11:41 पी एम, जून 20"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-06-20",
    "start_time_ist": "23:41",
    "end_date": "2029-06-21",
    "end_time_ist": "21:54",
    "state": "उदय (Rise)",
    "source_start": "11:41 पी एम, जून 20",
    "source_end": "09:54 पी एम, जून 21"
  },
  {
    "nak": "Swati",
    "start_date": "2029-06-21",
    "start_time_ist": "21:54",
    "end_date": "2029-06-22",
    "end_time_ist": "20:01",
    "state": "उदय (Rise)",
    "source_start": "09:54 पी एम, जून 21",
    "source_end": "08:01 पी एम, जून 22"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-06-22",
    "start_time_ist": "20:01",
    "end_date": "2029-06-23",
    "end_time_ist": "18:08",
    "state": "उदय (Rise)",
    "source_start": "08:01 पी एम, जून 22",
    "source_end": "06:08 पी एम, जून 23"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-06-23",
    "start_time_ist": "18:08",
    "end_date": "2029-06-24",
    "end_time_ist": "16:22",
    "state": "उदय (Rise)",
    "source_start": "06:08 पी एम, जून 23",
    "source_end": "04:22 पी एम, जून 24"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-06-24",
    "start_time_ist": "16:22",
    "end_date": "2029-06-25",
    "end_time_ist": "14:50",
    "state": "उदय (Rise)",
    "source_start": "04:22 पी एम, जून 24",
    "source_end": "02:50 पी एम, जून 25"
  },
  {
    "nak": "Mula",
    "start_date": "2029-06-25",
    "start_time_ist": "14:50",
    "end_date": "2029-06-26",
    "end_time_ist": "13:39",
    "state": "उदय (Rise)",
    "source_start": "02:50 पी एम, जून 25",
    "source_end": "01:39 पी एम, जून 26"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-06-26",
    "start_time_ist": "13:39",
    "end_date": "2029-06-27",
    "end_time_ist": "12:55",
    "state": "उदय (Rise)",
    "source_start": "01:39 पी एम, जून 26",
    "source_end": "12:55 पी एम, जून 27"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-06-27",
    "start_time_ist": "12:55",
    "end_date": "2029-06-28",
    "end_time_ist": "12:46",
    "state": "उदय (Rise)",
    "source_start": "12:55 पी एम, जून 27",
    "source_end": "12:46 पी एम, जून 28"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-06-28",
    "start_time_ist": "12:46",
    "end_date": "2029-06-29",
    "end_time_ist": "13:14",
    "state": "उदय (Rise)",
    "source_start": "12:46 पी एम, जून 28",
    "source_end": "01:14 पी एम, जून 29"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-06-29",
    "start_time_ist": "13:14",
    "end_date": "2029-06-30",
    "end_time_ist": "14:22",
    "state": "उदय (Rise)",
    "source_start": "01:14 पी एम, जून 29",
    "source_end": "02:22 पी एम, जून 30"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-06-30",
    "start_time_ist": "14:22",
    "end_date": "2029-07-01",
    "end_time_ist": "16:08",
    "state": "उदय (Rise)",
    "source_start": "02:22 पी एम, जून 30",
    "source_end": "04:08 पी एम, जुलाई 01"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-07-01",
    "start_time_ist": "16:08",
    "end_date": "2029-07-02",
    "end_time_ist": "18:26",
    "state": "उदय (Rise)",
    "source_start": "04:08 पी एम, जुलाई 01",
    "source_end": "06:26 पी एम, जुलाई 02"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-07-02",
    "start_time_ist": "18:26",
    "end_date": "2029-07-03",
    "end_time_ist": "21:09",
    "state": "उदय (Rise)",
    "source_start": "06:26 पी एम, जुलाई 02",
    "source_end": "09:09 पी एम, जुलाई 03"
  },
  {
    "nak": "Revati",
    "start_date": "2029-07-03",
    "start_time_ist": "21:09",
    "end_date": "2029-07-05",
    "end_time_ist": "00:03",
    "state": "उदय (Rise)",
    "source_start": "09:09 पी एम, जुलाई 03",
    "source_end": "12:03 ए एम, जुलाई 05"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-07-05",
    "start_time_ist": "00:03",
    "end_date": "2029-07-06",
    "end_time_ist": "02:58",
    "state": "उदय (Rise)",
    "source_start": "12:03 ए एम, जुलाई 05",
    "source_end": "02:58 ए एम, जुलाई 06"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-07-06",
    "start_time_ist": "02:58",
    "end_date": "2029-07-07",
    "end_time_ist": "05:39",
    "state": "उदय (Rise)",
    "source_start": "02:58 ए एम, जुलाई 06",
    "source_end": "05:39 ए एम, जुलाई 07"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-07-07",
    "start_time_ist": "05:39",
    "end_date": "2029-07-08",
    "end_time_ist": "07:57",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, जुलाई 07",
    "source_end": "07:57 ए एम, जुलाई 08"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-07-08",
    "start_time_ist": "07:57",
    "end_date": "2029-07-09",
    "end_time_ist": "09:44",
    "state": "उदय (Rise)",
    "source_start": "07:57 ए एम, जुलाई 08",
    "source_end": "09:44 ए एम, जुलाई 09"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-07-09",
    "start_time_ist": "09:44",
    "end_date": "2029-07-10",
    "end_time_ist": "10:57",
    "state": "उदय (Rise)",
    "source_start": "09:44 ए एम, जुलाई 09",
    "source_end": "10:57 ए एम, जुलाई 10"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-07-10",
    "start_time_ist": "10:57",
    "end_date": "2029-07-11",
    "end_time_ist": "11:36",
    "state": "उदय (Rise)",
    "source_start": "10:57 ए एम, जुलाई 10",
    "source_end": "11:36 ए एम, जुलाई 11"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-07-11",
    "start_time_ist": "11:36",
    "end_date": "2029-07-12",
    "end_time_ist": "11:42",
    "state": "उदय (Rise)",
    "source_start": "11:36 ए एम, जुलाई 11",
    "source_end": "11:42 ए एम, जुलाई 12"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-07-12",
    "start_time_ist": "11:42",
    "end_date": "2029-07-13",
    "end_time_ist": "11:19",
    "state": "उदय (Rise)",
    "source_start": "11:42 ए एम, जुलाई 12",
    "source_end": "11:19 ए एम, जुलाई 13"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-07-13",
    "start_time_ist": "11:19",
    "end_date": "2029-07-14",
    "end_time_ist": "10:32",
    "state": "उदय (Rise)",
    "source_start": "11:19 ए एम, जुलाई 13",
    "source_end": "10:32 ए एम, जुलाई 14"
  },
  {
    "nak": "Magha",
    "start_date": "2029-07-14",
    "start_time_ist": "10:32",
    "end_date": "2029-07-15",
    "end_time_ist": "09:26",
    "state": "उदय (Rise)",
    "source_start": "10:32 ए एम, जुलाई 14",
    "source_end": "09:26 ए एम, जुलाई 15"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-07-15",
    "start_time_ist": "09:26",
    "end_date": "2029-07-16",
    "end_time_ist": "08:08",
    "state": "उदय (Rise)",
    "source_start": "09:26 ए एम, जुलाई 15",
    "source_end": "08:08 ए एम, जुलाई 16"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-07-16",
    "start_time_ist": "08:08",
    "end_date": "2029-07-17",
    "end_time_ist": "06:41",
    "state": "उदय (Rise)",
    "source_start": "08:08 ए एम, जुलाई 16",
    "source_end": "06:41 ए एम, जुलाई 17"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-07-17",
    "start_time_ist": "06:41",
    "end_date": "2029-07-18",
    "end_time_ist": "05:10",
    "state": "उदय (Rise)",
    "source_start": "06:41 ए एम, जुलाई 17",
    "source_end": "05:10 ए एम, जुलाई 18"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-07-18",
    "start_time_ist": "05:10",
    "end_date": "2029-07-19",
    "end_time_ist": "03:39",
    "state": "उदय (Rise)",
    "source_start": "05:10 ए एम, जुलाई 18",
    "source_end": "03:39 ए एम, जुलाई 19"
  },
  {
    "nak": "Swati",
    "start_date": "2029-07-19",
    "start_time_ist": "03:39",
    "end_date": "2029-07-20",
    "end_time_ist": "02:11",
    "state": "उदय (Rise)",
    "source_start": "03:39 ए एम, जुलाई 19",
    "source_end": "02:11 ए एम, जुलाई 20"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-07-20",
    "start_time_ist": "02:11",
    "end_date": "2029-07-21",
    "end_time_ist": "00:50",
    "state": "उदय (Rise)",
    "source_start": "02:11 ए एम, जुलाई 20",
    "source_end": "12:50 ए एम, जुलाई 21"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-07-21",
    "start_time_ist": "00:50",
    "end_date": "2029-07-21",
    "end_time_ist": "23:39",
    "state": "उदय (Rise)",
    "source_start": "12:50 ए एम, जुलाई 21",
    "source_end": "11:39 पी एम, जुलाई 21"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-07-21",
    "start_time_ist": "23:39",
    "end_date": "2029-07-22",
    "end_time_ist": "22:39",
    "state": "उदय (Rise)",
    "source_start": "11:39 पी एम, जुलाई 21",
    "source_end": "10:39 पी एम, जुलाई 22"
  },
  {
    "nak": "Mula",
    "start_date": "2029-07-22",
    "start_time_ist": "22:40",
    "end_date": "2029-07-23",
    "end_time_ist": "21:57",
    "state": "उदय (Rise)",
    "source_start": "10:40 पी एम, जुलाई 22",
    "source_end": "09:57 पी एम, जुलाई 23"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-07-23",
    "start_time_ist": "21:57",
    "end_date": "2029-07-24",
    "end_time_ist": "21:34",
    "state": "उदय (Rise)",
    "source_start": "09:57 पी एम, जुलाई 23",
    "source_end": "09:34 पी एम, जुलाई 24"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-07-24",
    "start_time_ist": "21:34",
    "end_date": "2029-07-25",
    "end_time_ist": "21:35",
    "state": "उदय (Rise)",
    "source_start": "09:34 पी एम, जुलाई 24",
    "source_end": "09:35 पी एम, जुलाई 25"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-07-25",
    "start_time_ist": "21:35",
    "end_date": "2029-07-26",
    "end_time_ist": "22:04",
    "state": "उदय (Rise)",
    "source_start": "09:35 पी एम, जुलाई 25",
    "source_end": "10:04 पी एम, जुलाई 26"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-07-26",
    "start_time_ist": "22:04",
    "end_date": "2029-07-27",
    "end_time_ist": "23:04",
    "state": "उदय (Rise)",
    "source_start": "10:04 पी एम, जुलाई 26",
    "source_end": "11:04 पी एम, जुलाई 27"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-07-27",
    "start_time_ist": "23:04",
    "end_date": "2029-07-29",
    "end_time_ist": "00:37",
    "state": "उदय (Rise)",
    "source_start": "11:04 पी एम, जुलाई 27",
    "source_end": "12:37 ए एम, जुलाई 29"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-07-29",
    "start_time_ist": "00:37",
    "end_date": "2029-07-30",
    "end_time_ist": "02:41",
    "state": "उदय (Rise)",
    "source_start": "12:37 ए एम, जुलाई 29",
    "source_end": "02:41 ए एम, जुलाई 30"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-07-30",
    "start_time_ist": "02:41",
    "end_date": "2029-07-31",
    "end_time_ist": "05:12",
    "state": "उदय (Rise)",
    "source_start": "02:41 ए एम, जुलाई 30",
    "source_end": "05:12 ए एम, जुलाई 31"
  },
  {
    "nak": "Revati",
    "start_date": "2029-07-31",
    "start_time_ist": "05:12",
    "end_date": "2029-08-01",
    "end_time_ist": "08:02",
    "state": "उदय (Rise)",
    "source_start": "05:12 ए एम, जुलाई 31",
    "source_end": "08:02 ए एम, अगस्त 01"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-08-01",
    "start_time_ist": "08:02",
    "end_date": "2029-08-02",
    "end_time_ist": "11:00",
    "state": "उदय (Rise)",
    "source_start": "08:02 ए एम, अगस्त 01",
    "source_end": "11:00 ए एम, अगस्त 02"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-08-02",
    "start_time_ist": "11:00",
    "end_date": "2029-08-03",
    "end_time_ist": "13:51",
    "state": "उदय (Rise)",
    "source_start": "11:00 ए एम, अगस्त 02",
    "source_end": "01:51 पी एम, अगस्त 03"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-08-03",
    "start_time_ist": "13:51",
    "end_date": "2029-08-04",
    "end_time_ist": "16:24",
    "state": "उदय (Rise)",
    "source_start": "01:51 पी एम, अगस्त 03",
    "source_end": "04:24 पी एम, अगस्त 04"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-08-04",
    "start_time_ist": "16:24",
    "end_date": "2029-08-05",
    "end_time_ist": "18:25",
    "state": "उदय (Rise)",
    "source_start": "04:24 पी एम, अगस्त 04",
    "source_end": "06:25 पी एम, अगस्त 05"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-08-05",
    "start_time_ist": "18:25",
    "end_date": "2029-08-06",
    "end_time_ist": "19:48",
    "state": "उदय (Rise)",
    "source_start": "06:25 पी एम, अगस्त 05",
    "source_end": "07:48 पी एम, अगस्त 06"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-08-06",
    "start_time_ist": "19:48",
    "end_date": "2029-08-07",
    "end_time_ist": "20:28",
    "state": "उदय (Rise)",
    "source_start": "07:48 पी एम, अगस्त 06",
    "source_end": "08:28 पी एम, अगस्त 07"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-08-07",
    "start_time_ist": "20:28",
    "end_date": "2029-08-08",
    "end_time_ist": "20:25",
    "state": "उदय (Rise)",
    "source_start": "08:28 पी एम, अगस्त 07",
    "source_end": "08:25 पी एम, अगस्त 08"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-08-08",
    "start_time_ist": "20:25",
    "end_date": "2029-08-09",
    "end_time_ist": "19:44",
    "state": "उदय (Rise)",
    "source_start": "08:25 पी एम, अगस्त 08",
    "source_end": "07:44 पी एम, अगस्त 09"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-08-09",
    "start_time_ist": "19:44",
    "end_date": "2029-08-10",
    "end_time_ist": "18:31",
    "state": "उदय (Rise)",
    "source_start": "07:44 पी एम, अगस्त 09",
    "source_end": "06:31 पी एम, अगस्त 10"
  },
  {
    "nak": "Magha",
    "start_date": "2029-08-10",
    "start_time_ist": "18:31",
    "end_date": "2029-08-11",
    "end_time_ist": "16:53",
    "state": "उदय (Rise)",
    "source_start": "06:31 पी एम, अगस्त 10",
    "source_end": "04:53 पी एम, अगस्त 11"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-08-11",
    "start_time_ist": "16:53",
    "end_date": "2029-08-12",
    "end_time_ist": "15:00",
    "state": "उदय (Rise)",
    "source_start": "04:53 पी एम, अगस्त 11",
    "source_end": "03:00 पी एम, अगस्त 12"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-08-12",
    "start_time_ist": "15:00",
    "end_date": "2029-08-13",
    "end_time_ist": "13:00",
    "state": "उदय (Rise)",
    "source_start": "03:00 पी एम, अगस्त 12",
    "source_end": "01:00 पी एम, अगस्त 13"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-08-13",
    "start_time_ist": "13:00",
    "end_date": "2029-08-14",
    "end_time_ist": "11:02",
    "state": "उदय (Rise)",
    "source_start": "01:00 पी एम, अगस्त 13",
    "source_end": "11:02 ए एम, अगस्त 14"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-08-14",
    "start_time_ist": "11:02",
    "end_date": "2029-08-15",
    "end_time_ist": "09:11",
    "state": "उदय (Rise)",
    "source_start": "11:02 ए एम, अगस्त 14",
    "source_end": "09:11 ए एम, अगस्त 15"
  },
  {
    "nak": "Swati",
    "start_date": "2029-08-15",
    "start_time_ist": "09:11",
    "end_date": "2029-08-16",
    "end_time_ist": "07:34",
    "state": "उदय (Rise)",
    "source_start": "09:11 ए एम, अगस्त 15",
    "source_end": "07:34 ए एम, अगस्त 16"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-08-16",
    "start_time_ist": "07:34",
    "end_date": "2029-08-17",
    "end_time_ist": "06:15",
    "state": "उदय (Rise)",
    "source_start": "07:34 ए एम, अगस्त 16",
    "source_end": "06:15 ए एम, अगस्त 17"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-08-17",
    "start_time_ist": "06:15",
    "end_date": "2029-08-18",
    "end_time_ist": "05:16",
    "state": "उदय (Rise)",
    "source_start": "06:15 ए एम, अगस्त 17",
    "source_end": "05:16 ए एम, अगस्त 18"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-08-18",
    "start_time_ist": "05:16",
    "end_date": "2029-08-19",
    "end_time_ist": "04:38",
    "state": "उदय (Rise)",
    "source_start": "05:16 ए एम, अगस्त 18",
    "source_end": "04:38 ए एम, अगस्त 19"
  },
  {
    "nak": "Mula",
    "start_date": "2029-08-19",
    "start_time_ist": "04:38",
    "end_date": "2029-08-20",
    "end_time_ist": "04:21",
    "state": "उदय (Rise)",
    "source_start": "04:38 ए एम, अगस्त 19",
    "source_end": "04:21 ए एम, अगस्त 20"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-08-20",
    "start_time_ist": "04:21",
    "end_date": "2029-08-21",
    "end_time_ist": "04:25",
    "state": "उदय (Rise)",
    "source_start": "04:21 ए एम, अगस्त 20",
    "source_end": "04:25 ए एम, अगस्त 21"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-08-21",
    "start_time_ist": "04:25",
    "end_date": "2029-08-22",
    "end_time_ist": "04:51",
    "state": "उदय (Rise)",
    "source_start": "04:25 ए एम, अगस्त 21",
    "source_end": "04:51 ए एम, अगस्त 22"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-08-22",
    "start_time_ist": "04:51",
    "end_date": "2029-08-23",
    "end_time_ist": "05:39",
    "state": "उदय (Rise)",
    "source_start": "04:51 ए एम, अगस्त 22",
    "source_end": "05:39 ए एम, अगस्त 23"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-08-23",
    "start_time_ist": "05:39",
    "end_date": "2029-08-24",
    "end_time_ist": "06:50",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, अगस्त 23",
    "source_end": "06:50 ए एम, अगस्त 24"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-08-24",
    "start_time_ist": "06:50",
    "end_date": "2029-08-25",
    "end_time_ist": "08:27",
    "state": "उदय (Rise)",
    "source_start": "06:50 ए एम, अगस्त 24",
    "source_end": "08:27 ए एम, अगस्त 25"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-08-25",
    "start_time_ist": "08:27",
    "end_date": "2029-08-26",
    "end_time_ist": "10:29",
    "state": "उदय (Rise)",
    "source_start": "08:27 ए एम, अगस्त 25",
    "source_end": "10:29 ए एम, अगस्त 26"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-08-26",
    "start_time_ist": "10:29",
    "end_date": "2029-08-27",
    "end_time_ist": "12:55",
    "state": "उदय (Rise)",
    "source_start": "10:29 ए एम, अगस्त 26",
    "source_end": "12:55 पी एम, अगस्त 27"
  },
  {
    "nak": "Revati",
    "start_date": "2029-08-27",
    "start_time_ist": "12:55",
    "end_date": "2029-08-28",
    "end_time_ist": "15:42",
    "state": "उदय (Rise)",
    "source_start": "12:55 पी एम, अगस्त 27",
    "source_end": "03:42 पी एम, अगस्त 28"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-08-28",
    "start_time_ist": "15:42",
    "end_date": "2029-08-29",
    "end_time_ist": "18:41",
    "state": "उदय (Rise)",
    "source_start": "03:42 पी एम, अगस्त 28",
    "source_end": "06:41 पी एम, अगस्त 29"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-08-29",
    "start_time_ist": "18:41",
    "end_date": "2029-08-30",
    "end_time_ist": "21:42",
    "state": "उदय (Rise)",
    "source_start": "06:41 पी एम, अगस्त 29",
    "source_end": "09:42 पी एम, अगस्त 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-08-30",
    "start_time_ist": "21:42",
    "end_date": "2029-09-01",
    "end_time_ist": "00:32",
    "state": "उदय (Rise)",
    "source_start": "09:42 पी एम, अगस्त 30",
    "source_end": "12:32 ए एम, सितम्बर 01"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-09-01",
    "start_time_ist": "00:32",
    "end_date": "2029-09-02",
    "end_time_ist": "02:58",
    "state": "उदय (Rise)",
    "source_start": "12:32 ए एम, सितम्बर 01",
    "source_end": "02:58 ए एम, सितम्बर 02"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-09-02",
    "start_time_ist": "02:58",
    "end_date": "2029-09-03",
    "end_time_ist": "04:48",
    "state": "उदय (Rise)",
    "source_start": "02:58 ए एम, सितम्बर 02",
    "source_end": "04:48 ए एम, सितम्बर 03"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-09-03",
    "start_time_ist": "04:48",
    "end_date": "2029-09-04",
    "end_time_ist": "05:52",
    "state": "उदय (Rise)",
    "source_start": "04:48 ए एम, सितम्बर 03",
    "source_end": "05:52 ए एम, सितम्बर 04"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-09-04",
    "start_time_ist": "05:52",
    "end_date": "2029-09-05",
    "end_time_ist": "06:07",
    "state": "उदय (Rise)",
    "source_start": "05:52 ए एम, सितम्बर 04",
    "source_end": "06:07 ए एम, सितम्बर 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-09-05",
    "start_time_ist": "06:07",
    "end_date": "2029-09-06",
    "end_time_ist": "05:34",
    "state": "उदय (Rise)",
    "source_start": "06:07 ए एम, सितम्बर 05",
    "source_end": "05:34 ए एम, सितम्बर 06"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-09-06",
    "start_time_ist": "05:34",
    "end_date": "2029-09-07",
    "end_time_ist": "04:17",
    "state": "उदय (Rise)",
    "source_start": "05:34 ए एम, सितम्बर 06",
    "source_end": "04:17 ए एम, सितम्बर 07"
  },
  {
    "nak": "Magha",
    "start_date": "2029-09-07",
    "start_time_ist": "04:17",
    "end_date": "2029-09-08",
    "end_time_ist": "02:25",
    "state": "उदय (Rise)",
    "source_start": "04:17 ए एम, सितम्बर 07",
    "source_end": "02:25 ए एम, सितम्बर 08"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-09-08",
    "start_time_ist": "02:25",
    "end_date": "2029-09-09",
    "end_time_ist": "00:07",
    "state": "उदय (Rise)",
    "source_start": "02:25 ए एम, सितम्बर 08",
    "source_end": "12:07 ए एम, सितम्बर 09"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-09-09",
    "start_time_ist": "00:07",
    "end_date": "2029-09-09",
    "end_time_ist": "21:33",
    "state": "उदय (Rise)",
    "source_start": "12:07 ए एम, सितम्बर 09",
    "source_end": "09:33 पी एम, सितम्बर 09"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-09-09",
    "start_time_ist": "21:33",
    "end_date": "2029-09-10",
    "end_time_ist": "18:56",
    "state": "उदय (Rise)",
    "source_start": "09:33 पी एम, सितम्बर 09",
    "source_end": "06:56 पी एम, सितम्बर 10"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-09-10",
    "start_time_ist": "18:56",
    "end_date": "2029-09-11",
    "end_time_ist": "16:25",
    "state": "उदय (Rise)",
    "source_start": "06:56 पी एम, सितम्बर 10",
    "source_end": "04:25 पी एम, सितम्बर 11"
  },
  {
    "nak": "Swati",
    "start_date": "2029-09-11",
    "start_time_ist": "16:25",
    "end_date": "2029-09-12",
    "end_time_ist": "14:10",
    "state": "उदय (Rise)",
    "source_start": "04:25 पी एम, सितम्बर 11",
    "source_end": "02:10 पी एम, सितम्बर 12"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-09-12",
    "start_time_ist": "14:10",
    "end_date": "2029-09-13",
    "end_time_ist": "12:18",
    "state": "उदय (Rise)",
    "source_start": "02:10 पी एम, सितम्बर 12",
    "source_end": "12:18 पी एम, सितम्बर 13"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-09-13",
    "start_time_ist": "12:18",
    "end_date": "2029-09-14",
    "end_time_ist": "10:55",
    "state": "उदय (Rise)",
    "source_start": "12:18 पी एम, सितम्बर 13",
    "source_end": "10:55 ए एम, सितम्बर 14"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-09-14",
    "start_time_ist": "10:55",
    "end_date": "2029-09-15",
    "end_time_ist": "10:04",
    "state": "उदय (Rise)",
    "source_start": "10:55 ए एम, सितम्बर 14",
    "source_end": "10:04 ए एम, सितम्बर 15"
  },
  {
    "nak": "Mula",
    "start_date": "2029-09-15",
    "start_time_ist": "10:04",
    "end_date": "2029-09-16",
    "end_time_ist": "09:46",
    "state": "उदय (Rise)",
    "source_start": "10:04 ए एम, सितम्बर 15",
    "source_end": "09:46 ए एम, सितम्बर 16"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-09-16",
    "start_time_ist": "09:46",
    "end_date": "2029-09-17",
    "end_time_ist": "09:59",
    "state": "उदय (Rise)",
    "source_start": "09:46 ए एम, सितम्बर 16",
    "source_end": "09:59 ए एम, सितम्बर 17"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-09-17",
    "start_time_ist": "09:59",
    "end_date": "2029-09-18",
    "end_time_ist": "10:40",
    "state": "उदय (Rise)",
    "source_start": "09:59 ए एम, सितम्बर 17",
    "source_end": "10:40 ए एम, सितम्बर 18"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-09-18",
    "start_time_ist": "10:40",
    "end_date": "2029-09-19",
    "end_time_ist": "11:47",
    "state": "उदय (Rise)",
    "source_start": "10:40 ए एम, सितम्बर 18",
    "source_end": "11:47 ए एम, सितम्बर 19"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-09-19",
    "start_time_ist": "11:47",
    "end_date": "2029-09-20",
    "end_time_ist": "13:18",
    "state": "उदय (Rise)",
    "source_start": "11:47 ए एम, सितम्बर 19",
    "source_end": "01:18 पी एम, सितम्बर 20"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-09-20",
    "start_time_ist": "13:18",
    "end_date": "2029-09-21",
    "end_time_ist": "15:09",
    "state": "उदय (Rise)",
    "source_start": "01:18 पी एम, सितम्बर 20",
    "source_end": "03:09 पी एम, सितम्बर 21"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-09-21",
    "start_time_ist": "15:09",
    "end_date": "2029-09-22",
    "end_time_ist": "17:20",
    "state": "उदय (Rise)",
    "source_start": "03:09 पी एम, सितम्बर 21",
    "source_end": "05:20 पी एम, सितम्बर 22"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-09-22",
    "start_time_ist": "17:20",
    "end_date": "2029-09-23",
    "end_time_ist": "19:50",
    "state": "उदय (Rise)",
    "source_start": "05:20 पी एम, सितम्बर 22",
    "source_end": "07:50 पी एम, सितम्बर 23"
  },
  {
    "nak": "Revati",
    "start_date": "2029-09-23",
    "start_time_ist": "19:50",
    "end_date": "2029-09-24",
    "end_time_ist": "22:36",
    "state": "उदय (Rise)",
    "source_start": "07:50 पी एम, सितम्बर 23",
    "source_end": "10:36 पी एम, सितम्बर 24"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-09-24",
    "start_time_ist": "22:36",
    "end_date": "2029-09-26",
    "end_time_ist": "01:35",
    "state": "उदय (Rise)",
    "source_start": "10:36 पी एम, सितम्बर 24",
    "source_end": "01:35 ए एम, सितम्बर 26"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-09-26",
    "start_time_ist": "01:35",
    "end_date": "2029-09-27",
    "end_time_ist": "04:40",
    "state": "उदय (Rise)",
    "source_start": "01:35 ए एम, सितम्बर 26",
    "source_end": "04:40 ए एम, सितम्बर 27"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-09-27",
    "start_time_ist": "04:40",
    "end_date": "2029-09-28",
    "end_time_ist": "07:42",
    "state": "उदय (Rise)",
    "source_start": "04:40 ए एम, सितम्बर 27",
    "source_end": "07:42 ए एम, सितम्बर 28"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-09-28",
    "start_time_ist": "07:42",
    "end_date": "2029-09-29",
    "end_time_ist": "10:28",
    "state": "उदय (Rise)",
    "source_start": "07:42 ए एम, सितम्बर 28",
    "source_end": "10:28 ए एम, सितम्बर 29"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-09-29",
    "start_time_ist": "10:28",
    "end_date": "2029-09-30",
    "end_time_ist": "12:48",
    "state": "उदय (Rise)",
    "source_start": "10:28 ए एम, सितम्बर 29",
    "source_end": "12:48 पी एम, सितम्बर 30"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-09-30",
    "start_time_ist": "12:48",
    "end_date": "2029-10-01",
    "end_time_ist": "14:28",
    "state": "उदय (Rise)",
    "source_start": "12:48 पी एम, सितम्बर 30",
    "source_end": "02:28 पी एम, अक्टूबर 01"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-10-01",
    "start_time_ist": "14:28",
    "end_date": "2029-10-02",
    "end_time_ist": "15:21",
    "state": "उदय (Rise)",
    "source_start": "02:28 पी एम, अक्टूबर 01",
    "source_end": "03:21 पी एम, अक्टूबर 02"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-10-02",
    "start_time_ist": "15:21",
    "end_date": "2029-10-03",
    "end_time_ist": "15:23",
    "state": "उदय (Rise)",
    "source_start": "03:21 पी एम, अक्टूबर 02",
    "source_end": "03:23 पी एम, अक्टूबर 03"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-10-03",
    "start_time_ist": "15:23",
    "end_date": "2029-10-04",
    "end_time_ist": "14:35",
    "state": "उदय (Rise)",
    "source_start": "03:23 पी एम, अक्टूबर 03",
    "source_end": "02:35 पी एम, अक्टूबर 04"
  },
  {
    "nak": "Magha",
    "start_date": "2029-10-04",
    "start_time_ist": "14:35",
    "end_date": "2029-10-05",
    "end_time_ist": "13:00",
    "state": "उदय (Rise)",
    "source_start": "02:35 पी एम, अक्टूबर 04",
    "source_end": "01:00 पी एम, अक्टूबर 05"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-10-05",
    "start_time_ist": "13:00",
    "end_date": "2029-10-06",
    "end_time_ist": "10:47",
    "state": "उदय (Rise)",
    "source_start": "01:00 पी एम, अक्टूबर 05",
    "source_end": "10:47 ए एम, अक्टूबर 06"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-10-06",
    "start_time_ist": "10:47",
    "end_date": "2029-10-07",
    "end_time_ist": "08:06",
    "state": "उदय (Rise)",
    "source_start": "10:47 ए एम, अक्टूबर 06",
    "source_end": "08:06 ए एम, अक्टूबर 07"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-10-07",
    "start_time_ist": "08:06",
    "end_date": "2029-10-08",
    "end_time_ist": "05:09",
    "state": "उदय (Rise)",
    "source_start": "08:06 ए एम, अक्टूबर 07",
    "source_end": "05:09 ए एम, अक्टूबर 08"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-10-08",
    "start_time_ist": "05:09",
    "end_date": "2029-10-09",
    "end_time_ist": "02:07",
    "state": "उदय (Rise)",
    "source_start": "05:09 ए एम, अक्टूबर 08",
    "source_end": "02:07 ए एम, अक्टूबर 09"
  },
  {
    "nak": "Swati",
    "start_date": "2029-10-09",
    "start_time_ist": "02:07",
    "end_date": "2029-10-09",
    "end_time_ist": "23:13",
    "state": "उदय (Rise)",
    "source_start": "02:07 ए एम, अक्टूबर 09",
    "source_end": "11:13 पी एम, अक्टूबर 09"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-10-09",
    "start_time_ist": "23:13",
    "end_date": "2029-10-10",
    "end_time_ist": "20:37",
    "state": "उदय (Rise)",
    "source_start": "11:13 पी एम, अक्टूबर 09",
    "source_end": "08:37 पी एम, अक्टूबर 10"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-10-10",
    "start_time_ist": "20:37",
    "end_date": "2029-10-11",
    "end_time_ist": "18:28",
    "state": "उदय (Rise)",
    "source_start": "08:37 पी एम, अक्टूबर 10",
    "source_end": "06:28 पी एम, अक्टूबर 11"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-10-11",
    "start_time_ist": "18:28",
    "end_date": "2029-10-12",
    "end_time_ist": "16:55",
    "state": "उदय (Rise)",
    "source_start": "06:28 पी एम, अक्टूबर 11",
    "source_end": "04:55 पी एम, अक्टूबर 12"
  },
  {
    "nak": "Mula",
    "start_date": "2029-10-12",
    "start_time_ist": "16:55",
    "end_date": "2029-10-13",
    "end_time_ist": "16:01",
    "state": "उदय (Rise)",
    "source_start": "04:55 पी एम, अक्टूबर 12",
    "source_end": "04:01 पी एम, अक्टूबर 13"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-10-13",
    "start_time_ist": "16:01",
    "end_date": "2029-10-14",
    "end_time_ist": "15:49",
    "state": "उदय (Rise)",
    "source_start": "04:01 पी एम, अक्टूबर 13",
    "source_end": "03:49 पी एम, अक्टूबर 14"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-10-14",
    "start_time_ist": "15:49",
    "end_date": "2029-10-15",
    "end_time_ist": "16:17",
    "state": "उदय (Rise)",
    "source_start": "03:49 पी एम, अक्टूबर 14",
    "source_end": "04:17 पी एम, अक्टूबर 15"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-10-15",
    "start_time_ist": "16:17",
    "end_date": "2029-10-16",
    "end_time_ist": "17:21",
    "state": "उदय (Rise)",
    "source_start": "04:17 पी एम, अक्टूबर 15",
    "source_end": "05:21 पी एम, अक्टूबर 16"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-10-16",
    "start_time_ist": "17:21",
    "end_date": "2029-10-17",
    "end_time_ist": "18:57",
    "state": "उदय (Rise)",
    "source_start": "05:21 पी एम, अक्टूबर 16",
    "source_end": "06:57 पी एम, अक्टूबर 17"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-10-17",
    "start_time_ist": "18:57",
    "end_date": "2029-10-18",
    "end_time_ist": "21:00",
    "state": "उदय (Rise)",
    "source_start": "06:57 पी एम, अक्टूबर 17",
    "source_end": "09:00 पी एम, अक्टूबर 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-10-18",
    "start_time_ist": "21:00",
    "end_date": "2029-10-19",
    "end_time_ist": "23:22",
    "state": "उदय (Rise)",
    "source_start": "09:00 पी एम, अक्टूबर 18",
    "source_end": "11:22 पी एम, अक्टूबर 19"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-10-19",
    "start_time_ist": "23:22",
    "end_date": "2029-10-21",
    "end_time_ist": "02:01",
    "state": "उदय (Rise)",
    "source_start": "11:22 पी एम, अक्टूबर 19",
    "source_end": "02:01 ए एम, अक्टूबर 21"
  },
  {
    "nak": "Revati",
    "start_date": "2029-10-21",
    "start_time_ist": "02:01",
    "end_date": "2029-10-22",
    "end_time_ist": "04:52",
    "state": "उदय (Rise)",
    "source_start": "02:01 ए एम, अक्टूबर 21",
    "source_end": "04:52 ए एम, अक्टूबर 22"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-10-22",
    "start_time_ist": "04:52",
    "end_date": "2029-10-23",
    "end_time_ist": "07:50",
    "state": "उदय (Rise)",
    "source_start": "04:52 ए एम, अक्टूबर 22",
    "source_end": "07:50 ए एम, अक्टूबर 23"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-10-23",
    "start_time_ist": "07:50",
    "end_date": "2029-10-24",
    "end_time_ist": "10:53",
    "state": "उदय (Rise)",
    "source_start": "07:50 ए एम, अक्टूबर 23",
    "source_end": "10:53 ए एम, अक्टूबर 24"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-10-24",
    "start_time_ist": "10:53",
    "end_date": "2029-10-25",
    "end_time_ist": "13:54",
    "state": "उदय (Rise)",
    "source_start": "10:53 ए एम, अक्टूबर 24",
    "source_end": "01:54 पी एम, अक्टूबर 25"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-10-25",
    "start_time_ist": "13:54",
    "end_date": "2029-10-26",
    "end_time_ist": "16:45",
    "state": "उदय (Rise)",
    "source_start": "01:54 पी एम, अक्टूबर 25",
    "source_end": "04:45 पी एम, अक्टूबर 26"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-10-26",
    "start_time_ist": "16:45",
    "end_date": "2029-10-27",
    "end_time_ist": "19:19",
    "state": "उदय (Rise)",
    "source_start": "04:45 पी एम, अक्टूबर 26",
    "source_end": "07:19 पी एम, अक्टूबर 27"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-10-27",
    "start_time_ist": "19:19",
    "end_date": "2029-10-28",
    "end_time_ist": "21:25",
    "state": "उदय (Rise)",
    "source_start": "07:19 पी एम, अक्टूबर 27",
    "source_end": "09:25 पी एम, अक्टूबर 28"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-10-28",
    "start_time_ist": "21:25",
    "end_date": "2029-10-29",
    "end_time_ist": "22:54",
    "state": "उदय (Rise)",
    "source_start": "09:25 पी एम, अक्टूबर 28",
    "source_end": "10:54 पी एम, अक्टूबर 29"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-10-29",
    "start_time_ist": "22:54",
    "end_date": "2029-10-30",
    "end_time_ist": "23:39",
    "state": "उदय (Rise)",
    "source_start": "10:54 पी एम, अक्टूबर 29",
    "source_end": "11:39 पी एम, अक्टूबर 30"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-10-30",
    "start_time_ist": "23:39",
    "end_date": "2029-10-31",
    "end_time_ist": "23:37",
    "state": "उदय (Rise)",
    "source_start": "11:39 पी एम, अक्टूबर 30",
    "source_end": "11:37 पी एम, अक्टूबर 31"
  },
  {
    "nak": "Magha",
    "start_date": "2029-10-31",
    "start_time_ist": "23:37",
    "end_date": "2029-11-01",
    "end_time_ist": "22:46",
    "state": "उदय (Rise)",
    "source_start": "11:37 पी एम, अक्टूबर 31",
    "source_end": "10:46 पी एम, नवम्बर 01"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-11-01",
    "start_time_ist": "22:46",
    "end_date": "2029-11-02",
    "end_time_ist": "21:12",
    "state": "उदय (Rise)",
    "source_start": "10:46 पी एम, नवम्बर 01",
    "source_end": "09:12 पी एम, नवम्बर 02"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-11-02",
    "start_time_ist": "21:12",
    "end_date": "2029-11-03",
    "end_time_ist": "18:59",
    "state": "उदय (Rise)",
    "source_start": "09:12 पी एम, नवम्बर 02",
    "source_end": "06:59 पी एम, नवम्बर 03"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-11-03",
    "start_time_ist": "18:59",
    "end_date": "2029-11-04",
    "end_time_ist": "16:19",
    "state": "उदय (Rise)",
    "source_start": "06:59 पी एम, नवम्बर 03",
    "source_end": "04:19 पी एम, नवम्बर 04"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-11-04",
    "start_time_ist": "16:19",
    "end_date": "2029-11-05",
    "end_time_ist": "13:20",
    "state": "उदय (Rise)",
    "source_start": "04:19 पी एम, नवम्बर 04",
    "source_end": "01:20 पी एम, नवम्बर 05"
  },
  {
    "nak": "Swati",
    "start_date": "2029-11-05",
    "start_time_ist": "13:20",
    "end_date": "2029-11-06",
    "end_time_ist": "10:15",
    "state": "उदय (Rise)",
    "source_start": "01:20 पी एम, नवम्बर 05",
    "source_end": "10:15 ए एम, नवम्बर 06"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-11-06",
    "start_time_ist": "10:15",
    "end_date": "2029-11-07",
    "end_time_ist": "07:16",
    "state": "उदय (Rise)",
    "source_start": "10:15 ए एम, नवम्बर 06",
    "source_end": "07:16 ए एम, नवम्बर 07"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-11-07",
    "start_time_ist": "07:16",
    "end_date": "2029-11-08",
    "end_time_ist": "04:33",
    "state": "उदय (Rise)",
    "source_start": "07:16 ए एम, नवम्बर 07",
    "source_end": "04:33 ए एम, नवम्बर 08"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-11-08",
    "start_time_ist": "04:33",
    "end_date": "2029-11-09",
    "end_time_ist": "02:16",
    "state": "उदय (Rise)",
    "source_start": "04:33 ए एम, नवम्बर 08",
    "source_end": "02:16 ए एम, नवम्बर 09"
  },
  {
    "nak": "Mula",
    "start_date": "2029-11-09",
    "start_time_ist": "02:16",
    "end_date": "2029-11-10",
    "end_time_ist": "00:35",
    "state": "उदय (Rise)",
    "source_start": "02:16 ए एम, नवम्बर 09",
    "source_end": "12:35 ए एम, नवम्बर 10"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-11-10",
    "start_time_ist": "00:35",
    "end_date": "2029-11-10",
    "end_time_ist": "23:35",
    "state": "उदय (Rise)",
    "source_start": "12:35 ए एम, नवम्बर 10",
    "source_end": "11:35 पी एम, नवम्बर 10"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-11-10",
    "start_time_ist": "23:35",
    "end_date": "2029-11-11",
    "end_time_ist": "23:21",
    "state": "उदय (Rise)",
    "source_start": "11:35 पी एम, नवम्बर 10",
    "source_end": "11:21 पी एम, नवम्बर 11"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-11-11",
    "start_time_ist": "23:21",
    "end_date": "2029-11-12",
    "end_time_ist": "23:53",
    "state": "उदय (Rise)",
    "source_start": "11:21 पी एम, नवम्बर 11",
    "source_end": "11:53 पी एम, नवम्बर 12"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-11-12",
    "start_time_ist": "23:53",
    "end_date": "2029-11-14",
    "end_time_ist": "01:07",
    "state": "उदय (Rise)",
    "source_start": "11:53 पी एम, नवम्बर 12",
    "source_end": "01:07 ए एम, नवम्बर 14"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-11-14",
    "start_time_ist": "01:07",
    "end_date": "2029-11-15",
    "end_time_ist": "02:59",
    "state": "उदय (Rise)",
    "source_start": "01:07 ए एम, नवम्बर 14",
    "source_end": "02:59 ए एम, नवम्बर 15"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-11-15",
    "start_time_ist": "02:59",
    "end_date": "2029-11-16",
    "end_time_ist": "05:21",
    "state": "उदय (Rise)",
    "source_start": "02:59 ए एम, नवम्बर 15",
    "source_end": "05:21 ए एम, नवम्बर 16"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-11-16",
    "start_time_ist": "05:21",
    "end_date": "2029-11-17",
    "end_time_ist": "08:04",
    "state": "उदय (Rise)",
    "source_start": "05:21 ए एम, नवम्बर 16",
    "source_end": "08:04 ए एम, नवम्बर 17"
  },
  {
    "nak": "Revati",
    "start_date": "2029-11-17",
    "start_time_ist": "08:04",
    "end_date": "2029-11-18",
    "end_time_ist": "11:00",
    "state": "उदय (Rise)",
    "source_start": "08:04 ए एम, नवम्बर 17",
    "source_end": "11:00 ए एम, नवम्बर 18"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-11-18",
    "start_time_ist": "11:00",
    "end_date": "2029-11-19",
    "end_time_ist": "14:01",
    "state": "उदय (Rise)",
    "source_start": "11:00 ए एम, नवम्बर 18",
    "source_end": "02:01 पी एम, नवम्बर 19"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-11-19",
    "start_time_ist": "14:01",
    "end_date": "2029-11-20",
    "end_time_ist": "17:01",
    "state": "उदय (Rise)",
    "source_start": "02:01 पी एम, नवम्बर 19",
    "source_end": "05:01 पी एम, नवम्बर 20"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-11-20",
    "start_time_ist": "17:01",
    "end_date": "2029-11-21",
    "end_time_ist": "19:55",
    "state": "उदय (Rise)",
    "source_start": "05:01 पी एम, नवम्बर 20",
    "source_end": "07:55 पी एम, नवम्बर 21"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-11-21",
    "start_time_ist": "19:55",
    "end_date": "2029-11-22",
    "end_time_ist": "22:37",
    "state": "उदय (Rise)",
    "source_start": "07:55 पी एम, नवम्बर 21",
    "source_end": "10:37 पी एम, नवम्बर 22"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-11-22",
    "start_time_ist": "22:37",
    "end_date": "2029-11-24",
    "end_time_ist": "01:04",
    "state": "उदय (Rise)",
    "source_start": "10:37 पी एम, नवम्बर 22",
    "source_end": "01:04 ए एम, नवम्बर 24"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-11-24",
    "start_time_ist": "01:04",
    "end_date": "2029-11-25",
    "end_time_ist": "03:09",
    "state": "उदय (Rise)",
    "source_start": "01:04 ए एम, नवम्बर 24",
    "source_end": "03:09 ए एम, नवम्बर 25"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-11-25",
    "start_time_ist": "03:09",
    "end_date": "2029-11-26",
    "end_time_ist": "04:48",
    "state": "उदय (Rise)",
    "source_start": "03:09 ए एम, नवम्बर 25",
    "source_end": "04:48 ए एम, नवम्बर 26"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-11-26",
    "start_time_ist": "04:48",
    "end_date": "2029-11-27",
    "end_time_ist": "05:55",
    "state": "उदय (Rise)",
    "source_start": "04:48 ए एम, नवम्बर 26",
    "source_end": "05:55 ए एम, नवम्बर 27"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-11-27",
    "start_time_ist": "05:55",
    "end_date": "2029-11-28",
    "end_time_ist": "06:26",
    "state": "उदय (Rise)",
    "source_start": "05:55 ए एम, नवम्बर 27",
    "source_end": "06:26 ए एम, नवम्बर 28"
  },
  {
    "nak": "Magha",
    "start_date": "2029-11-28",
    "start_time_ist": "06:26",
    "end_date": "2029-11-29",
    "end_time_ist": "06:18",
    "state": "उदय (Rise)",
    "source_start": "06:26 ए एम, नवम्बर 28",
    "source_end": "06:18 ए एम, नवम्बर 29"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-11-29",
    "start_time_ist": "06:18",
    "end_date": "2029-11-30",
    "end_time_ist": "05:32",
    "state": "उदय (Rise)",
    "source_start": "06:18 ए एम, नवम्बर 29",
    "source_end": "05:32 ए एम, नवम्बर 30"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-11-30",
    "start_time_ist": "05:32",
    "end_date": "2029-12-01",
    "end_time_ist": "04:09",
    "state": "उदय (Rise)",
    "source_start": "05:32 ए एम, नवम्बर 30",
    "source_end": "04:09 ए एम, दिसम्बर 01"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-12-01",
    "start_time_ist": "04:09",
    "end_date": "2029-12-02",
    "end_time_ist": "02:15",
    "state": "उदय (Rise)",
    "source_start": "04:09 ए एम, दिसम्बर 01",
    "source_end": "02:15 ए एम, दिसम्बर 02"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-12-02",
    "start_time_ist": "02:15",
    "end_date": "2029-12-02",
    "end_time_ist": "23:55",
    "state": "उदय (Rise)",
    "source_start": "02:15 ए एम, दिसम्बर 02",
    "source_end": "11:55 पी एम, दिसम्बर 02"
  },
  {
    "nak": "Swati",
    "start_date": "2029-12-02",
    "start_time_ist": "23:55",
    "end_date": "2029-12-03",
    "end_time_ist": "21:18",
    "state": "उदय (Rise)",
    "source_start": "11:55 पी एम, दिसम्बर 02",
    "source_end": "09:18 पी एम, दिसम्बर 03"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-12-03",
    "start_time_ist": "21:18",
    "end_date": "2029-12-04",
    "end_time_ist": "18:33",
    "state": "उदय (Rise)",
    "source_start": "09:18 पी एम, दिसम्बर 03",
    "source_end": "06:33 पी एम, दिसम्बर 04"
  },
  {
    "nak": "Anuradha",
    "start_date": "2029-12-04",
    "start_time_ist": "18:33",
    "end_date": "2029-12-05",
    "end_time_ist": "15:51",
    "state": "उदय (Rise)",
    "source_start": "06:33 पी एम, दिसम्बर 04",
    "source_end": "03:51 पी एम, दिसम्बर 05"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2029-12-05",
    "start_time_ist": "15:51",
    "end_date": "2029-12-06",
    "end_time_ist": "13:20",
    "state": "उदय (Rise)",
    "source_start": "03:51 पी एम, दिसम्बर 05",
    "source_end": "01:20 पी एम, दिसम्बर 06"
  },
  {
    "nak": "Mula",
    "start_date": "2029-12-06",
    "start_time_ist": "13:20",
    "end_date": "2029-12-07",
    "end_time_ist": "11:13",
    "state": "उदय (Rise)",
    "source_start": "01:20 पी एम, दिसम्बर 06",
    "source_end": "11:13 ए एम, दिसम्बर 07"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2029-12-07",
    "start_time_ist": "11:13",
    "end_date": "2029-12-08",
    "end_time_ist": "09:36",
    "state": "उदय (Rise)",
    "source_start": "11:13 ए एम, दिसम्बर 07",
    "source_end": "09:36 ए एम, दिसम्बर 08"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2029-12-08",
    "start_time_ist": "09:36",
    "end_date": "2029-12-09",
    "end_time_ist": "08:39",
    "state": "उदय (Rise)",
    "source_start": "09:36 ए एम, दिसम्बर 08",
    "source_end": "08:39 ए एम, दिसम्बर 09"
  },
  {
    "nak": "Shravana",
    "start_date": "2029-12-09",
    "start_time_ist": "08:39",
    "end_date": "2029-12-10",
    "end_time_ist": "08:25",
    "state": "उदय (Rise)",
    "source_start": "08:39 ए एम, दिसम्बर 09",
    "source_end": "08:25 ए एम, दिसम्बर 10"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2029-12-10",
    "start_time_ist": "08:25",
    "end_date": "2029-12-11",
    "end_time_ist": "08:59",
    "state": "उदय (Rise)",
    "source_start": "08:25 ए एम, दिसम्बर 10",
    "source_end": "08:59 ए एम, दिसम्बर 11"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2029-12-11",
    "start_time_ist": "08:59",
    "end_date": "2029-12-12",
    "end_time_ist": "10:18",
    "state": "उदय (Rise)",
    "source_start": "08:59 ए एम, दिसम्बर 11",
    "source_end": "10:18 ए एम, दिसम्बर 12"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2029-12-12",
    "start_time_ist": "10:18",
    "end_date": "2029-12-13",
    "end_time_ist": "12:17",
    "state": "उदय (Rise)",
    "source_start": "10:18 ए एम, दिसम्बर 12",
    "source_end": "12:17 पी एम, दिसम्बर 13"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2029-12-13",
    "start_time_ist": "12:17",
    "end_date": "2029-12-14",
    "end_time_ist": "14:49",
    "state": "उदय (Rise)",
    "source_start": "12:17 पी एम, दिसम्बर 13",
    "source_end": "02:49 पी एम, दिसम्बर 14"
  },
  {
    "nak": "Revati",
    "start_date": "2029-12-14",
    "start_time_ist": "14:49",
    "end_date": "2029-12-15",
    "end_time_ist": "17:42",
    "state": "उदय (Rise)",
    "source_start": "02:49 पी एम, दिसम्बर 14",
    "source_end": "05:42 पी एम, दिसम्बर 15"
  },
  {
    "nak": "Ashwini",
    "start_date": "2029-12-15",
    "start_time_ist": "17:42",
    "end_date": "2029-12-16",
    "end_time_ist": "20:45",
    "state": "उदय (Rise)",
    "source_start": "05:42 पी एम, दिसम्बर 15",
    "source_end": "08:45 पी एम, दिसम्बर 16"
  },
  {
    "nak": "Bharani",
    "start_date": "2029-12-16",
    "start_time_ist": "20:45",
    "end_date": "2029-12-17",
    "end_time_ist": "23:47",
    "state": "उदय (Rise)",
    "source_start": "08:45 पी एम, दिसम्बर 16",
    "source_end": "11:47 पी एम, दिसम्बर 17"
  },
  {
    "nak": "Krittika",
    "start_date": "2029-12-17",
    "start_time_ist": "23:47",
    "end_date": "2029-12-19",
    "end_time_ist": "02:38",
    "state": "उदय (Rise)",
    "source_start": "11:47 पी एम, दिसम्बर 17",
    "source_end": "02:38 ए एम, दिसम्बर 19"
  },
  {
    "nak": "Rohini",
    "start_date": "2029-12-19",
    "start_time_ist": "02:38",
    "end_date": "2029-12-20",
    "end_time_ist": "05:12",
    "state": "उदय (Rise)",
    "source_start": "02:38 ए एम, दिसम्बर 19",
    "source_end": "05:12 ए एम, दिसम्बर 20"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2029-12-20",
    "start_time_ist": "05:12",
    "end_date": "2029-12-21",
    "end_time_ist": "07:23",
    "state": "उदय (Rise)",
    "source_start": "05:12 ए एम, दिसम्बर 20",
    "source_end": "07:23 ए एम, दिसम्बर 21"
  },
  {
    "nak": "Ardra",
    "start_date": "2029-12-21",
    "start_time_ist": "07:23",
    "end_date": "2029-12-22",
    "end_time_ist": "09:10",
    "state": "उदय (Rise)",
    "source_start": "07:23 ए एम, दिसम्बर 21",
    "source_end": "09:10 ए एम, दिसम्बर 22"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2029-12-22",
    "start_time_ist": "09:10",
    "end_date": "2029-12-23",
    "end_time_ist": "10:31",
    "state": "उदय (Rise)",
    "source_start": "09:10 ए एम, दिसम्बर 22",
    "source_end": "10:31 ए एम, दिसम्बर 23"
  },
  {
    "nak": "Pushya",
    "start_date": "2029-12-23",
    "start_time_ist": "10:31",
    "end_date": "2029-12-24",
    "end_time_ist": "11:26",
    "state": "उदय (Rise)",
    "source_start": "10:31 ए एम, दिसम्बर 23",
    "source_end": "11:26 ए एम, दिसम्बर 24"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2029-12-24",
    "start_time_ist": "11:26",
    "end_date": "2029-12-25",
    "end_time_ist": "11:54",
    "state": "उदय (Rise)",
    "source_start": "11:26 ए एम, दिसम्बर 24",
    "source_end": "11:54 ए एम, दिसम्बर 25"
  },
  {
    "nak": "Magha",
    "start_date": "2029-12-25",
    "start_time_ist": "11:54",
    "end_date": "2029-12-26",
    "end_time_ist": "11:56",
    "state": "उदय (Rise)",
    "source_start": "11:54 ए एम, दिसम्बर 25",
    "source_end": "11:56 ए एम, दिसम्बर 26"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2029-12-26",
    "start_time_ist": "11:56",
    "end_date": "2029-12-27",
    "end_time_ist": "11:32",
    "state": "उदय (Rise)",
    "source_start": "11:56 ए एम, दिसम्बर 26",
    "source_end": "11:32 ए एम, दिसम्बर 27"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2029-12-27",
    "start_time_ist": "11:32",
    "end_date": "2029-12-28",
    "end_time_ist": "10:43",
    "state": "उदय (Rise)",
    "source_start": "11:32 ए एम, दिसम्बर 27",
    "source_end": "10:43 ए एम, दिसम्बर 28"
  },
  {
    "nak": "Hasta",
    "start_date": "2029-12-28",
    "start_time_ist": "10:43",
    "end_date": "2029-12-29",
    "end_time_ist": "09:31",
    "state": "उदय (Rise)",
    "source_start": "10:43 ए एम, दिसम्बर 28",
    "source_end": "09:31 ए एम, दिसम्बर 29"
  },
  {
    "nak": "Chitra",
    "start_date": "2029-12-29",
    "start_time_ist": "09:31",
    "end_date": "2029-12-30",
    "end_time_ist": "07:59",
    "state": "उदय (Rise)",
    "source_start": "09:31 ए एम, दिसम्बर 29",
    "source_end": "07:59 ए एम, दिसम्बर 30"
  },
  {
    "nak": "Swati",
    "start_date": "2029-12-30",
    "start_time_ist": "07:59",
    "end_date": "2029-12-31",
    "end_time_ist": "06:10",
    "state": "उदय (Rise)",
    "source_start": "07:59 ए एम, दिसम्बर 30",
    "source_end": "06:10 ए एम, दिसम्बर 31"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-12-31",
    "start_time_ist": "06:10",
    "end_date": "2030-01-01",
    "end_time_ist": "04:09",
    "state": "उदय (Rise)",
    "source_start": "06:10 ए एम, दिसम्बर 31",
    "source_end": "04:09 ए एम, जनवरी 01"
  },
  {
    "nak": "Vishakha",
    "start_date": "2029-12-31",
    "start_time_ist": "06:10",
    "end_date": "2030-01-01",
    "end_time_ist": "04:09",
    "state": "उदय (Rise)",
    "source_start": "06:10 ए एम, दिसम्बर 31",
    "source_end": "04:09 ए एम, जनवरी 01"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-01-01",
    "start_time_ist": "04:09",
    "end_date": "2030-01-02",
    "end_time_ist": "02:03",
    "state": "उदय (Rise)",
    "source_start": "04:09 ए एम, जनवरी 01",
    "source_end": "02:03 ए एम, जनवरी 02"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-01-02",
    "start_time_ist": "02:03",
    "end_date": "2030-01-02",
    "end_time_ist": "23:57",
    "state": "उदय (Rise)",
    "source_start": "02:03 ए एम, जनवरी 02",
    "source_end": "11:57 पी एम, जनवरी 02"
  },
  {
    "nak": "Mula",
    "start_date": "2030-01-02",
    "start_time_ist": "23:57",
    "end_date": "2030-01-03",
    "end_time_ist": "22:01",
    "state": "उदय (Rise)",
    "source_start": "11:57 पी एम, जनवरी 02",
    "source_end": "10:01 पी एम, जनवरी 03"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-01-03",
    "start_time_ist": "22:01",
    "end_date": "2030-01-04",
    "end_time_ist": "20:22",
    "state": "उदय (Rise)",
    "source_start": "10:01 पी एम, जनवरी 03",
    "source_end": "08:22 पी एम, जनवरी 04"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-01-04",
    "start_time_ist": "20:22",
    "end_date": "2030-01-05",
    "end_time_ist": "19:09",
    "state": "उदय (Rise)",
    "source_start": "08:22 पी एम, जनवरी 04",
    "source_end": "07:09 पी एम, जनवरी 05"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-01-05",
    "start_time_ist": "19:09",
    "end_date": "2030-01-06",
    "end_time_ist": "18:29",
    "state": "उदय (Rise)",
    "source_start": "07:09 पी एम, जनवरी 05",
    "source_end": "06:29 पी एम, जनवरी 06"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-01-06",
    "start_time_ist": "18:29",
    "end_date": "2030-01-07",
    "end_time_ist": "18:28",
    "state": "उदय (Rise)",
    "source_start": "06:29 पी एम, जनवरी 06",
    "source_end": "06:28 पी एम, जनवरी 07"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-01-07",
    "start_time_ist": "18:28",
    "end_date": "2030-01-08",
    "end_time_ist": "19:11",
    "state": "उदय (Rise)",
    "source_start": "06:28 पी एम, जनवरी 07",
    "source_end": "07:11 पी एम, जनवरी 08"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-01-08",
    "start_time_ist": "19:11",
    "end_date": "2030-01-09",
    "end_time_ist": "20:38",
    "state": "उदय (Rise)",
    "source_start": "07:11 पी एम, जनवरी 08",
    "source_end": "08:38 पी एम, जनवरी 09"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-01-09",
    "start_time_ist": "20:38",
    "end_date": "2030-01-10",
    "end_time_ist": "22:45",
    "state": "उदय (Rise)",
    "source_start": "08:38 पी एम, जनवरी 09",
    "source_end": "10:45 पी एम, जनवरी 10"
  },
  {
    "nak": "Revati",
    "start_date": "2030-01-10",
    "start_time_ist": "22:45",
    "end_date": "2030-01-12",
    "end_time_ist": "01:23",
    "state": "उदय (Rise)",
    "source_start": "10:45 पी एम, जनवरी 10",
    "source_end": "01:23 ए एम, जनवरी 12"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-01-12",
    "start_time_ist": "01:23",
    "end_date": "2030-01-13",
    "end_time_ist": "04:21",
    "state": "उदय (Rise)",
    "source_start": "01:23 ए एम, जनवरी 12",
    "source_end": "04:21 ए एम, जनवरी 13"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-01-13",
    "start_time_ist": "04:21",
    "end_date": "2030-01-14",
    "end_time_ist": "07:25",
    "state": "उदय (Rise)",
    "source_start": "04:21 ए एम, जनवरी 13",
    "source_end": "07:25 ए एम, जनवरी 14"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-01-14",
    "start_time_ist": "07:25",
    "end_date": "2030-01-15",
    "end_time_ist": "10:22",
    "state": "उदय (Rise)",
    "source_start": "07:25 ए एम, जनवरी 14",
    "source_end": "10:22 ए एम, जनवरी 15"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-01-15",
    "start_time_ist": "10:22",
    "end_date": "2030-01-16",
    "end_time_ist": "12:58",
    "state": "उदय (Rise)",
    "source_start": "10:22 ए एम, जनवरी 15",
    "source_end": "12:58 पी एम, जनवरी 16"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-01-16",
    "start_time_ist": "12:58",
    "end_date": "2030-01-17",
    "end_time_ist": "15:05",
    "state": "उदय (Rise)",
    "source_start": "12:58 पी एम, जनवरी 16",
    "source_end": "03:05 पी एम, जनवरी 17"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-01-17",
    "start_time_ist": "15:05",
    "end_date": "2030-01-18",
    "end_time_ist": "16:40",
    "state": "उदय (Rise)",
    "source_start": "03:05 पी एम, जनवरी 17",
    "source_end": "04:40 पी एम, जनवरी 18"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-01-18",
    "start_time_ist": "16:40",
    "end_date": "2030-01-19",
    "end_time_ist": "17:41",
    "state": "उदय (Rise)",
    "source_start": "04:40 पी एम, जनवरी 18",
    "source_end": "05:41 पी एम, जनवरी 19"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-01-19",
    "start_time_ist": "17:41",
    "end_date": "2030-01-20",
    "end_time_ist": "18:09",
    "state": "उदय (Rise)",
    "source_start": "05:41 पी एम, जनवरी 19",
    "source_end": "06:09 पी एम, जनवरी 20"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-01-20",
    "start_time_ist": "18:09",
    "end_date": "2030-01-21",
    "end_time_ist": "18:09",
    "state": "उदय (Rise)",
    "source_start": "06:09 पी एम, जनवरी 20",
    "source_end": "06:09 पी एम, जनवरी 21"
  },
  {
    "nak": "Magha",
    "start_date": "2030-01-21",
    "start_time_ist": "18:09",
    "end_date": "2030-01-22",
    "end_time_ist": "17:45",
    "state": "उदय (Rise)",
    "source_start": "06:09 पी एम, जनवरी 21",
    "source_end": "05:45 पी एम, जनवरी 22"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-01-22",
    "start_time_ist": "17:45",
    "end_date": "2030-01-23",
    "end_time_ist": "17:03",
    "state": "उदय (Rise)",
    "source_start": "05:45 पी एम, जनवरी 22",
    "source_end": "05:03 पी एम, जनवरी 23"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-01-23",
    "start_time_ist": "17:03",
    "end_date": "2030-01-24",
    "end_time_ist": "16:06",
    "state": "उदय (Rise)",
    "source_start": "05:03 पी एम, जनवरी 23",
    "source_end": "04:06 पी एम, जनवरी 24"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-01-24",
    "start_time_ist": "16:06",
    "end_date": "2030-01-25",
    "end_time_ist": "14:58",
    "state": "उदय (Rise)",
    "source_start": "04:06 पी एम, जनवरी 24",
    "source_end": "02:58 पी एम, जनवरी 25"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-01-25",
    "start_time_ist": "14:58",
    "end_date": "2030-01-26",
    "end_time_ist": "13:43",
    "state": "उदय (Rise)",
    "source_start": "02:58 पी एम, जनवरी 25",
    "source_end": "01:43 पी एम, जनवरी 26"
  },
  {
    "nak": "Swati",
    "start_date": "2030-01-26",
    "start_time_ist": "13:43",
    "end_date": "2030-01-27",
    "end_time_ist": "12:22",
    "state": "उदय (Rise)",
    "source_start": "01:43 पी एम, जनवरी 26",
    "source_end": "12:22 पी एम, जनवरी 27"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-01-27",
    "start_time_ist": "12:22",
    "end_date": "2030-01-28",
    "end_time_ist": "10:59",
    "state": "उदय (Rise)",
    "source_start": "12:22 पी एम, जनवरी 27",
    "source_end": "10:59 ए एम, जनवरी 28"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-01-28",
    "start_time_ist": "10:59",
    "end_date": "2030-01-29",
    "end_time_ist": "09:34",
    "state": "उदय (Rise)",
    "source_start": "10:59 ए एम, जनवरी 28",
    "source_end": "09:34 ए एम, जनवरी 29"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-01-29",
    "start_time_ist": "09:34",
    "end_date": "2030-01-30",
    "end_time_ist": "08:11",
    "state": "उदय (Rise)",
    "source_start": "09:34 ए एम, जनवरी 29",
    "source_end": "08:11 ए एम, जनवरी 30"
  },
  {
    "nak": "Mula",
    "start_date": "2030-01-30",
    "start_time_ist": "08:11",
    "end_date": "2030-01-31",
    "end_time_ist": "06:52",
    "state": "उदय (Rise)",
    "source_start": "08:11 ए एम, जनवरी 30",
    "source_end": "06:52 ए एम, जनवरी 31"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-01-31",
    "start_time_ist": "06:52",
    "end_date": "2030-02-01",
    "end_time_ist": "05:43",
    "state": "उदय (Rise)",
    "source_start": "06:52 ए एम, जनवरी 31",
    "source_end": "05:43 ए एम, फरवरी 01"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-02-01",
    "start_time_ist": "05:43",
    "end_date": "2030-02-02",
    "end_time_ist": "04:49",
    "state": "उदय (Rise)",
    "source_start": "05:43 ए एम, फरवरी 01",
    "source_end": "04:49 ए एम, फरवरी 02"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-02-02",
    "start_time_ist": "04:49",
    "end_date": "2030-02-03",
    "end_time_ist": "04:16",
    "state": "उदय (Rise)",
    "source_start": "04:49 ए एम, फरवरी 02",
    "source_end": "04:16 ए एम, फरवरी 03"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-02-03",
    "start_time_ist": "04:16",
    "end_date": "2030-02-04",
    "end_time_ist": "04:10",
    "state": "उदय (Rise)",
    "source_start": "04:16 ए एम, फरवरी 03",
    "source_end": "04:10 ए एम, फरवरी 04"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-02-04",
    "start_time_ist": "04:10",
    "end_date": "2030-02-05",
    "end_time_ist": "04:38",
    "state": "उदय (Rise)",
    "source_start": "04:10 ए एम, फरवरी 04",
    "source_end": "04:38 ए एम, फरवरी 05"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-02-05",
    "start_time_ist": "04:38",
    "end_date": "2030-02-06",
    "end_time_ist": "05:44",
    "state": "उदय (Rise)",
    "source_start": "04:38 ए एम, फरवरी 05",
    "source_end": "05:44 ए एम, फरवरी 06"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-02-06",
    "start_time_ist": "05:44",
    "end_date": "2030-02-07",
    "end_time_ist": "07:27",
    "state": "उदय (Rise)",
    "source_start": "05:44 ए एम, फरवरी 06",
    "source_end": "07:27 ए एम, फरवरी 07"
  },
  {
    "nak": "Revati",
    "start_date": "2030-02-07",
    "start_time_ist": "07:27",
    "end_date": "2030-02-08",
    "end_time_ist": "09:47",
    "state": "उदय (Rise)",
    "source_start": "07:27 ए एम, फरवरी 07",
    "source_end": "09:47 ए एम, फरवरी 08"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-02-08",
    "start_time_ist": "09:47",
    "end_date": "2030-02-09",
    "end_time_ist": "12:34",
    "state": "उदय (Rise)",
    "source_start": "09:47 ए एम, फरवरी 08",
    "source_end": "12:34 पी एम, फरवरी 09"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-02-09",
    "start_time_ist": "12:34",
    "end_date": "2030-02-10",
    "end_time_ist": "15:37",
    "state": "उदय (Rise)",
    "source_start": "12:34 पी एम, फरवरी 09",
    "source_end": "03:37 पी एम, फरवरी 10"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-02-10",
    "start_time_ist": "15:37",
    "end_date": "2030-02-11",
    "end_time_ist": "18:40",
    "state": "उदय (Rise)",
    "source_start": "03:37 पी एम, फरवरी 10",
    "source_end": "06:40 पी एम, फरवरी 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-02-11",
    "start_time_ist": "18:40",
    "end_date": "2030-02-12",
    "end_time_ist": "21:29",
    "state": "उदय (Rise)",
    "source_start": "06:40 पी एम, फरवरी 11",
    "source_end": "09:29 पी एम, फरवरी 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-02-12",
    "start_time_ist": "21:29",
    "end_date": "2030-02-13",
    "end_time_ist": "23:50",
    "state": "उदय (Rise)",
    "source_start": "09:29 पी एम, फरवरी 12",
    "source_end": "11:50 पी एम, फरवरी 13"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-02-13",
    "start_time_ist": "23:50",
    "end_date": "2030-02-15",
    "end_time_ist": "01:32",
    "state": "उदय (Rise)",
    "source_start": "11:50 पी एम, फरवरी 13",
    "source_end": "01:32 ए एम, फरवरी 15"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-02-15",
    "start_time_ist": "01:32",
    "end_date": "2030-02-16",
    "end_time_ist": "02:32",
    "state": "उदय (Rise)",
    "source_start": "01:32 ए एम, फरवरी 15",
    "source_end": "02:32 ए एम, फरवरी 16"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-02-16",
    "start_time_ist": "02:32",
    "end_date": "2030-02-17",
    "end_time_ist": "02:50",
    "state": "उदय (Rise)",
    "source_start": "02:32 ए एम, फरवरी 16",
    "source_end": "02:50 ए एम, फरवरी 17"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-02-17",
    "start_time_ist": "02:50",
    "end_date": "2030-02-18",
    "end_time_ist": "02:29",
    "state": "उदय (Rise)",
    "source_start": "02:50 ए एम, फरवरी 17",
    "source_end": "02:29 ए एम, फरवरी 18"
  },
  {
    "nak": "Magha",
    "start_date": "2030-02-18",
    "start_time_ist": "02:29",
    "end_date": "2030-02-19",
    "end_time_ist": "01:35",
    "state": "उदय (Rise)",
    "source_start": "02:29 ए एम, फरवरी 18",
    "source_end": "01:35 ए एम, फरवरी 19"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-02-19",
    "start_time_ist": "01:35",
    "end_date": "2030-02-20",
    "end_time_ist": "00:18",
    "state": "उदय (Rise)",
    "source_start": "01:35 ए एम, फरवरी 19",
    "source_end": "12:18 ए एम, फरवरी 20"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-02-20",
    "start_time_ist": "00:18",
    "end_date": "2030-02-20",
    "end_time_ist": "22:44",
    "state": "उदय (Rise)",
    "source_start": "12:18 ए एम, फरवरी 20",
    "source_end": "10:44 पी एम, फरवरी 20"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-02-20",
    "start_time_ist": "22:44",
    "end_date": "2030-02-21",
    "end_time_ist": "21:04",
    "state": "उदय (Rise)",
    "source_start": "10:44 पी एम, फरवरी 20",
    "source_end": "09:04 पी एम, फरवरी 21"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-02-21",
    "start_time_ist": "21:04",
    "end_date": "2030-02-22",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "09:04 पी एम, फरवरी 21",
    "source_end": "07:22 पी एम, फरवरी 22"
  },
  {
    "nak": "Swati",
    "start_date": "2030-02-22",
    "start_time_ist": "19:22",
    "end_date": "2030-02-23",
    "end_time_ist": "17:46",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, फरवरी 22",
    "source_end": "05:46 पी एम, फरवरी 23"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-02-23",
    "start_time_ist": "17:46",
    "end_date": "2030-02-24",
    "end_time_ist": "16:19",
    "state": "उदय (Rise)",
    "source_start": "05:46 पी एम, फरवरी 23",
    "source_end": "04:19 पी एम, फरवरी 24"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-02-24",
    "start_time_ist": "16:19",
    "end_date": "2030-02-25",
    "end_time_ist": "15:03",
    "state": "उदय (Rise)",
    "source_start": "04:19 पी एम, फरवरी 24",
    "source_end": "03:03 पी एम, फरवरी 25"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-02-25",
    "start_time_ist": "15:03",
    "end_date": "2030-02-26",
    "end_time_ist": "14:00",
    "state": "उदय (Rise)",
    "source_start": "03:03 पी एम, फरवरी 25",
    "source_end": "02:00 पी एम, फरवरी 26"
  },
  {
    "nak": "Mula",
    "start_date": "2030-02-26",
    "start_time_ist": "14:00",
    "end_date": "2030-02-27",
    "end_time_ist": "13:11",
    "state": "उदय (Rise)",
    "source_start": "02:00 पी एम, फरवरी 26",
    "source_end": "01:11 पी एम, फरवरी 27"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-02-27",
    "start_time_ist": "13:11",
    "end_date": "2030-02-28",
    "end_time_ist": "12:35",
    "state": "उदय (Rise)",
    "source_start": "01:11 पी एम, फरवरी 27",
    "source_end": "12:35 पी एम, फरवरी 28"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-02-28",
    "start_time_ist": "12:35",
    "end_date": "2030-03-01",
    "end_time_ist": "12:14",
    "state": "उदय (Rise)",
    "source_start": "12:35 पी एम, फरवरी 28",
    "source_end": "12:14 पी एम, मार्च 01"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-03-01",
    "start_time_ist": "12:14",
    "end_date": "2030-03-02",
    "end_time_ist": "12:10",
    "state": "उदय (Rise)",
    "source_start": "12:14 पी एम, मार्च 01",
    "source_end": "12:10 पी एम, मार्च 02"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-03-02",
    "start_time_ist": "12:10",
    "end_date": "2030-03-03",
    "end_time_ist": "12:26",
    "state": "उदय (Rise)",
    "source_start": "12:10 पी एम, मार्च 02",
    "source_end": "12:26 पी एम, मार्च 03"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-03-03",
    "start_time_ist": "12:26",
    "end_date": "2030-03-04",
    "end_time_ist": "13:06",
    "state": "उदय (Rise)",
    "source_start": "12:26 पी एम, मार्च 03",
    "source_end": "01:06 पी एम, मार्च 04"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-03-04",
    "start_time_ist": "13:06",
    "end_date": "2030-03-05",
    "end_time_ist": "14:14",
    "state": "उदय (Rise)",
    "source_start": "01:06 पी एम, मार्च 04",
    "source_end": "02:14 पी एम, मार्च 05"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-03-05",
    "start_time_ist": "14:14",
    "end_date": "2030-03-06",
    "end_time_ist": "15:53",
    "state": "उदय (Rise)",
    "source_start": "02:14 पी एम, मार्च 05",
    "source_end": "03:53 पी एम, मार्च 06"
  },
  {
    "nak": "Revati",
    "start_date": "2030-03-06",
    "start_time_ist": "15:53",
    "end_date": "2030-03-07",
    "end_time_ist": "18:02",
    "state": "उदय (Rise)",
    "source_start": "03:53 पी एम, मार्च 06",
    "source_end": "06:02 पी एम, मार्च 07"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-03-07",
    "start_time_ist": "18:02",
    "end_date": "2030-03-08",
    "end_time_ist": "20:40",
    "state": "उदय (Rise)",
    "source_start": "06:02 पी एम, मार्च 07",
    "source_end": "08:40 पी एम, मार्च 08"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-03-08",
    "start_time_ist": "20:40",
    "end_date": "2030-03-09",
    "end_time_ist": "23:38",
    "state": "उदय (Rise)",
    "source_start": "08:40 पी एम, मार्च 08",
    "source_end": "11:38 पी एम, मार्च 09"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-03-09",
    "start_time_ist": "23:38",
    "end_date": "2030-03-11",
    "end_time_ist": "02:46",
    "state": "उदय (Rise)",
    "source_start": "11:38 पी एम, मार्च 09",
    "source_end": "02:46 ए एम, मार्च 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-03-11",
    "start_time_ist": "02:46",
    "end_date": "2030-03-12",
    "end_time_ist": "05:48",
    "state": "उदय (Rise)",
    "source_start": "02:46 ए एम, मार्च 11",
    "source_end": "05:48 ए एम, मार्च 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-03-12",
    "start_time_ist": "05:48",
    "end_date": "2030-03-13",
    "end_time_ist": "08:30",
    "state": "उदय (Rise)",
    "source_start": "05:48 ए एम, मार्च 12",
    "source_end": "08:30 ए एम, मार्च 13"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-03-13",
    "start_time_ist": "08:30",
    "end_date": "2030-03-14",
    "end_time_ist": "10:38",
    "state": "उदय (Rise)",
    "source_start": "08:30 ए एम, मार्च 13",
    "source_end": "10:38 ए एम, मार्च 14"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-03-14",
    "start_time_ist": "10:38",
    "end_date": "2030-03-15",
    "end_time_ist": "12:01",
    "state": "उदय (Rise)",
    "source_start": "10:38 ए एम, मार्च 14",
    "source_end": "12:01 पी एम, मार्च 15"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-03-15",
    "start_time_ist": "12:01",
    "end_date": "2030-03-16",
    "end_time_ist": "12:35",
    "state": "उदय (Rise)",
    "source_start": "12:01 पी एम, मार्च 15",
    "source_end": "12:35 पी एम, मार्च 16"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-03-16",
    "start_time_ist": "12:35",
    "end_date": "2030-03-17",
    "end_time_ist": "12:21",
    "state": "उदय (Rise)",
    "source_start": "12:35 पी एम, मार्च 16",
    "source_end": "12:21 पी एम, मार्च 17"
  },
  {
    "nak": "Magha",
    "start_date": "2030-03-17",
    "start_time_ist": "12:21",
    "end_date": "2030-03-18",
    "end_time_ist": "11:23",
    "state": "उदय (Rise)",
    "source_start": "12:21 पी एम, मार्च 17",
    "source_end": "11:23 ए एम, मार्च 18"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-03-18",
    "start_time_ist": "11:23",
    "end_date": "2030-03-19",
    "end_time_ist": "09:49",
    "state": "उदय (Rise)",
    "source_start": "11:23 ए एम, मार्च 18",
    "source_end": "09:49 ए एम, मार्च 19"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-03-19",
    "start_time_ist": "09:49",
    "end_date": "2030-03-20",
    "end_time_ist": "07:49",
    "state": "उदय (Rise)",
    "source_start": "09:49 ए एम, मार्च 19",
    "source_end": "07:49 ए एम, मार्च 20"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-03-20",
    "start_time_ist": "07:49",
    "end_date": "2030-03-21",
    "end_time_ist": "05:32",
    "state": "उदय (Rise)",
    "source_start": "07:49 ए एम, मार्च 20",
    "source_end": "05:32 ए एम, मार्च 21"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-03-21",
    "start_time_ist": "05:32",
    "end_date": "2030-03-22",
    "end_time_ist": "03:10",
    "state": "उदय (Rise)",
    "source_start": "05:32 ए एम, मार्च 21",
    "source_end": "03:10 ए एम, मार्च 22"
  },
  {
    "nak": "Swati",
    "start_date": "2030-03-22",
    "start_time_ist": "03:10",
    "end_date": "2030-03-23",
    "end_time_ist": "00:51",
    "state": "उदय (Rise)",
    "source_start": "03:10 ए एम, मार्च 22",
    "source_end": "12:51 ए एम, मार्च 23"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-03-23",
    "start_time_ist": "00:51",
    "end_date": "2030-03-23",
    "end_time_ist": "22:45",
    "state": "उदय (Rise)",
    "source_start": "12:51 ए एम, मार्च 23",
    "source_end": "10:45 पी एम, मार्च 23"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-03-23",
    "start_time_ist": "22:45",
    "end_date": "2030-03-24",
    "end_time_ist": "20:57",
    "state": "उदय (Rise)",
    "source_start": "10:45 पी एम, मार्च 23",
    "source_end": "08:57 पी एम, मार्च 24"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-03-24",
    "start_time_ist": "20:57",
    "end_date": "2030-03-25",
    "end_time_ist": "19:31",
    "state": "उदय (Rise)",
    "source_start": "08:57 पी एम, मार्च 24",
    "source_end": "07:31 पी एम, मार्च 25"
  },
  {
    "nak": "Mula",
    "start_date": "2030-03-25",
    "start_time_ist": "19:31",
    "end_date": "2030-03-26",
    "end_time_ist": "18:32",
    "state": "उदय (Rise)",
    "source_start": "07:31 पी एम, मार्च 25",
    "source_end": "06:32 पी एम, मार्च 26"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-03-26",
    "start_time_ist": "18:32",
    "end_date": "2030-03-27",
    "end_time_ist": "17:58",
    "state": "उदय (Rise)",
    "source_start": "06:32 पी एम, मार्च 26",
    "source_end": "05:58 पी एम, मार्च 27"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-03-27",
    "start_time_ist": "17:58",
    "end_date": "2030-03-28",
    "end_time_ist": "17:49",
    "state": "उदय (Rise)",
    "source_start": "05:58 पी एम, मार्च 27",
    "source_end": "05:49 पी एम, मार्च 28"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-03-28",
    "start_time_ist": "17:49",
    "end_date": "2030-03-29",
    "end_time_ist": "18:06",
    "state": "उदय (Rise)",
    "source_start": "05:49 पी एम, मार्च 28",
    "source_end": "06:06 पी एम, मार्च 29"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-03-29",
    "start_time_ist": "18:06",
    "end_date": "2030-03-30",
    "end_time_ist": "18:46",
    "state": "उदय (Rise)",
    "source_start": "06:06 पी एम, मार्च 29",
    "source_end": "06:46 पी एम, मार्च 30"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-03-30",
    "start_time_ist": "18:46",
    "end_date": "2030-03-31",
    "end_time_ist": "19:49",
    "state": "उदय (Rise)",
    "source_start": "06:46 पी एम, मार्च 30",
    "source_end": "07:49 पी एम, मार्च 31"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-03-31",
    "start_time_ist": "19:49",
    "end_date": "2030-04-01",
    "end_time_ist": "21:16",
    "state": "उदय (Rise)",
    "source_start": "07:49 पी एम, मार्च 31",
    "source_end": "09:16 पी एम, अप्रैल 01"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-04-01",
    "start_time_ist": "21:16",
    "end_date": "2030-04-02",
    "end_time_ist": "23:07",
    "state": "उदय (Rise)",
    "source_start": "09:16 पी एम, अप्रैल 01",
    "source_end": "11:07 पी एम, अप्रैल 02"
  },
  {
    "nak": "Revati",
    "start_date": "2030-04-02",
    "start_time_ist": "23:07",
    "end_date": "2030-04-04",
    "end_time_ist": "01:22",
    "state": "उदय (Rise)",
    "source_start": "11:07 पी एम, अप्रैल 02",
    "source_end": "01:22 ए एम, अप्रैल 04"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-04-04",
    "start_time_ist": "01:22",
    "end_date": "2030-04-05",
    "end_time_ist": "03:59",
    "state": "उदय (Rise)",
    "source_start": "01:22 ए एम, अप्रैल 04",
    "source_end": "03:59 ए एम, अप्रैल 05"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-04-05",
    "start_time_ist": "03:59",
    "end_date": "2030-04-06",
    "end_time_ist": "06:55",
    "state": "उदय (Rise)",
    "source_start": "03:59 ए एम, अप्रैल 05",
    "source_end": "06:55 ए एम, अप्रैल 06"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-04-06",
    "start_time_ist": "06:55",
    "end_date": "2030-04-07",
    "end_time_ist": "10:03",
    "state": "उदय (Rise)",
    "source_start": "06:55 ए एम, अप्रैल 06",
    "source_end": "10:03 ए एम, अप्रैल 07"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-04-07",
    "start_time_ist": "10:03",
    "end_date": "2030-04-08",
    "end_time_ist": "13:13",
    "state": "उदय (Rise)",
    "source_start": "10:03 ए एम, अप्रैल 07",
    "source_end": "01:13 पी एम, अप्रैल 08"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-04-08",
    "start_time_ist": "13:13",
    "end_date": "2030-04-09",
    "end_time_ist": "16:11",
    "state": "उदय (Rise)",
    "source_start": "01:13 पी एम, अप्रैल 08",
    "source_end": "04:11 पी एम, अप्रैल 09"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-04-09",
    "start_time_ist": "16:11",
    "end_date": "2030-04-10",
    "end_time_ist": "18:44",
    "state": "उदय (Rise)",
    "source_start": "04:11 पी एम, अप्रैल 09",
    "source_end": "06:44 पी एम, अप्रैल 10"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-04-10",
    "start_time_ist": "18:44",
    "end_date": "2030-04-11",
    "end_time_ist": "20:40",
    "state": "उदय (Rise)",
    "source_start": "06:44 पी एम, अप्रैल 10",
    "source_end": "08:40 पी एम, अप्रैल 11"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-04-11",
    "start_time_ist": "20:40",
    "end_date": "2030-04-12",
    "end_time_ist": "21:50",
    "state": "उदय (Rise)",
    "source_start": "08:40 पी एम, अप्रैल 11",
    "source_end": "09:50 पी एम, अप्रैल 12"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-04-12",
    "start_time_ist": "21:50",
    "end_date": "2030-04-13",
    "end_time_ist": "22:09",
    "state": "उदय (Rise)",
    "source_start": "09:50 पी एम, अप्रैल 12",
    "source_end": "10:09 पी एम, अप्रैल 13"
  },
  {
    "nak": "Magha",
    "start_date": "2030-04-13",
    "start_time_ist": "22:09",
    "end_date": "2030-04-14",
    "end_time_ist": "21:38",
    "state": "उदय (Rise)",
    "source_start": "10:09 पी एम, अप्रैल 13",
    "source_end": "09:38 पी एम, अप्रैल 14"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-04-14",
    "start_time_ist": "21:38",
    "end_date": "2030-04-15",
    "end_time_ist": "20:20",
    "state": "उदय (Rise)",
    "source_start": "09:38 पी एम, अप्रैल 14",
    "source_end": "08:20 पी एम, अप्रैल 15"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-04-15",
    "start_time_ist": "20:20",
    "end_date": "2030-04-16",
    "end_time_ist": "18:24",
    "state": "उदय (Rise)",
    "source_start": "08:20 पी एम, अप्रैल 15",
    "source_end": "06:24 पी एम, अप्रैल 16"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-04-16",
    "start_time_ist": "18:24",
    "end_date": "2030-04-17",
    "end_time_ist": "15:59",
    "state": "उदय (Rise)",
    "source_start": "06:24 पी एम, अप्रैल 16",
    "source_end": "03:59 पी एम, अप्रैल 17"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-04-17",
    "start_time_ist": "15:59",
    "end_date": "2030-04-18",
    "end_time_ist": "13:16",
    "state": "उदय (Rise)",
    "source_start": "03:59 पी एम, अप्रैल 17",
    "source_end": "01:16 पी एम, अप्रैल 18"
  },
  {
    "nak": "Swati",
    "start_date": "2030-04-18",
    "start_time_ist": "13:16",
    "end_date": "2030-04-19",
    "end_time_ist": "10:26",
    "state": "उदय (Rise)",
    "source_start": "01:16 पी एम, अप्रैल 18",
    "source_end": "10:26 ए एम, अप्रैल 19"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-04-19",
    "start_time_ist": "10:26",
    "end_date": "2030-04-20",
    "end_time_ist": "07:40",
    "state": "उदय (Rise)",
    "source_start": "10:26 ए एम, अप्रैल 19",
    "source_end": "07:40 ए एम, अप्रैल 20"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-04-20",
    "start_time_ist": "07:40",
    "end_date": "2030-04-21",
    "end_time_ist": "05:07",
    "state": "उदय (Rise)",
    "source_start": "07:40 ए एम, अप्रैल 20",
    "source_end": "05:07 ए एम, अप्रैल 21"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-04-21",
    "start_time_ist": "05:07",
    "end_date": "2030-04-22",
    "end_time_ist": "02:56",
    "state": "उदय (Rise)",
    "source_start": "05:07 ए एम, अप्रैल 21",
    "source_end": "02:56 ए एम, अप्रैल 22"
  },
  {
    "nak": "Mula",
    "start_date": "2030-04-22",
    "start_time_ist": "02:56",
    "end_date": "2030-04-23",
    "end_time_ist": "01:13",
    "state": "उदय (Rise)",
    "source_start": "02:56 ए एम, अप्रैल 22",
    "source_end": "01:13 ए एम, अप्रैल 23"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-04-23",
    "start_time_ist": "01:13",
    "end_date": "2030-04-24",
    "end_time_ist": "00:04",
    "state": "उदय (Rise)",
    "source_start": "01:13 ए एम, अप्रैल 23",
    "source_end": "12:04 ए एम, अप्रैल 24"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-04-24",
    "start_time_ist": "00:04",
    "end_date": "2030-04-24",
    "end_time_ist": "23:31",
    "state": "उदय (Rise)",
    "source_start": "12:04 ए एम, अप्रैल 24",
    "source_end": "11:31 पी एम, अप्रैल 24"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-04-24",
    "start_time_ist": "23:31",
    "end_date": "2030-04-25",
    "end_time_ist": "23:35",
    "state": "उदय (Rise)",
    "source_start": "11:31 पी एम, अप्रैल 24",
    "source_end": "11:35 पी एम, अप्रैल 25"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-04-25",
    "start_time_ist": "23:35",
    "end_date": "2030-04-27",
    "end_time_ist": "00:13",
    "state": "उदय (Rise)",
    "source_start": "11:35 पी एम, अप्रैल 25",
    "source_end": "12:13 ए एम, अप्रैल 27"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-04-27",
    "start_time_ist": "00:13",
    "end_date": "2030-04-28",
    "end_time_ist": "01:24",
    "state": "उदय (Rise)",
    "source_start": "12:13 ए एम, अप्रैल 27",
    "source_end": "01:24 ए एम, अप्रैल 28"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-04-28",
    "start_time_ist": "01:24",
    "end_date": "2030-04-29",
    "end_time_ist": "03:04",
    "state": "उदय (Rise)",
    "source_start": "01:24 ए एम, अप्रैल 28",
    "source_end": "03:04 ए एम, अप्रैल 29"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-04-29",
    "start_time_ist": "03:04",
    "end_date": "2030-04-30",
    "end_time_ist": "05:10",
    "state": "उदय (Rise)",
    "source_start": "03:04 ए एम, अप्रैल 29",
    "source_end": "05:10 ए एम, अप्रैल 30"
  },
  {
    "nak": "Revati",
    "start_date": "2030-04-30",
    "start_time_ist": "05:10",
    "end_date": "2030-05-01",
    "end_time_ist": "07:37",
    "state": "उदय (Rise)",
    "source_start": "05:10 ए एम, अप्रैल 30",
    "source_end": "07:37 ए एम, मई 01"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-05-01",
    "start_time_ist": "07:37",
    "end_date": "2030-05-02",
    "end_time_ist": "10:23",
    "state": "उदय (Rise)",
    "source_start": "07:37 ए एम, मई 01",
    "source_end": "10:23 ए एम, मई 02"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-05-02",
    "start_time_ist": "10:23",
    "end_date": "2030-05-03",
    "end_time_ist": "13:22",
    "state": "उदय (Rise)",
    "source_start": "10:23 ए एम, मई 02",
    "source_end": "01:22 पी एम, मई 03"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-05-03",
    "start_time_ist": "13:22",
    "end_date": "2030-05-04",
    "end_time_ist": "16:30",
    "state": "उदय (Rise)",
    "source_start": "01:22 पी एम, मई 03",
    "source_end": "04:30 पी एम, मई 04"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-05-04",
    "start_time_ist": "16:30",
    "end_date": "2030-05-05",
    "end_time_ist": "19:39",
    "state": "उदय (Rise)",
    "source_start": "04:30 पी एम, मई 04",
    "source_end": "07:39 पी एम, मई 05"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-05-05",
    "start_time_ist": "19:39",
    "end_date": "2030-05-06",
    "end_time_ist": "22:41",
    "state": "उदय (Rise)",
    "source_start": "07:39 पी एम, मई 05",
    "source_end": "10:41 पी एम, मई 06"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-05-06",
    "start_time_ist": "22:41",
    "end_date": "2030-05-08",
    "end_time_ist": "01:27",
    "state": "उदय (Rise)",
    "source_start": "10:41 पी एम, मई 06",
    "source_end": "01:27 ए एम, मई 08"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-05-08",
    "start_time_ist": "01:27",
    "end_date": "2030-05-09",
    "end_time_ist": "03:46",
    "state": "उदय (Rise)",
    "source_start": "01:27 ए एम, मई 08",
    "source_end": "03:46 ए एम, मई 09"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-05-09",
    "start_time_ist": "03:46",
    "end_date": "2030-05-10",
    "end_time_ist": "05:28",
    "state": "उदय (Rise)",
    "source_start": "03:46 ए एम, मई 09",
    "source_end": "05:28 ए एम, मई 10"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-05-10",
    "start_time_ist": "05:28",
    "end_date": "2030-05-11",
    "end_time_ist": "06:26",
    "state": "उदय (Rise)",
    "source_start": "05:28 ए एम, मई 10",
    "source_end": "06:26 ए एम, मई 11"
  },
  {
    "nak": "Magha",
    "start_date": "2030-05-11",
    "start_time_ist": "06:26",
    "end_date": "2030-05-12",
    "end_time_ist": "06:37",
    "state": "उदय (Rise)",
    "source_start": "06:26 ए एम, मई 11",
    "source_end": "06:37 ए एम, मई 12"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-05-12",
    "start_time_ist": "06:37",
    "end_date": "2030-05-13",
    "end_time_ist": "06:00",
    "state": "उदय (Rise)",
    "source_start": "06:37 ए एम, मई 12",
    "source_end": "06:00 ए एम, मई 13"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-05-13",
    "start_time_ist": "06:00",
    "end_date": "2030-05-14",
    "end_time_ist": "04:39",
    "state": "उदय (Rise)",
    "source_start": "06:00 ए एम, मई 13",
    "source_end": "04:39 ए एम, मई 14"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-05-14",
    "start_time_ist": "04:39",
    "end_date": "2030-05-15",
    "end_time_ist": "02:39",
    "state": "उदय (Rise)",
    "source_start": "04:39 ए एम, मई 14",
    "source_end": "02:39 ए एम, मई 15"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-05-15",
    "start_time_ist": "02:39",
    "end_date": "2030-05-16",
    "end_time_ist": "00:10",
    "state": "उदय (Rise)",
    "source_start": "02:39 ए एम, मई 15",
    "source_end": "12:10 ए एम, मई 16"
  },
  {
    "nak": "Swati",
    "start_date": "2030-05-16",
    "start_time_ist": "00:10",
    "end_date": "2030-05-16",
    "end_time_ist": "21:22",
    "state": "उदय (Rise)",
    "source_start": "12:10 ए एम, मई 16",
    "source_end": "09:22 पी एम, मई 16"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-05-16",
    "start_time_ist": "21:22",
    "end_date": "2030-05-17",
    "end_time_ist": "18:23",
    "state": "उदय (Rise)",
    "source_start": "09:22 पी एम, मई 16",
    "source_end": "06:23 पी एम, मई 17"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-05-17",
    "start_time_ist": "18:23",
    "end_date": "2030-05-18",
    "end_time_ist": "15:26",
    "state": "उदय (Rise)",
    "source_start": "06:23 पी एम, मई 17",
    "source_end": "03:26 पी एम, मई 18"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-05-18",
    "start_time_ist": "15:26",
    "end_date": "2030-05-19",
    "end_time_ist": "12:40",
    "state": "उदय (Rise)",
    "source_start": "03:26 पी एम, मई 18",
    "source_end": "12:40 पी एम, मई 19"
  },
  {
    "nak": "Mula",
    "start_date": "2030-05-19",
    "start_time_ist": "12:40",
    "end_date": "2030-05-20",
    "end_time_ist": "10:15",
    "state": "उदय (Rise)",
    "source_start": "12:40 पी एम, मई 19",
    "source_end": "10:15 ए एम, मई 20"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-05-20",
    "start_time_ist": "10:15",
    "end_date": "2030-05-21",
    "end_time_ist": "08:19",
    "state": "उदय (Rise)",
    "source_start": "10:15 ए एम, मई 20",
    "source_end": "08:19 ए एम, मई 21"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-05-21",
    "start_time_ist": "08:19",
    "end_date": "2030-05-22",
    "end_time_ist": "07:01",
    "state": "उदय (Rise)",
    "source_start": "08:19 ए एम, मई 21",
    "source_end": "07:01 ए एम, मई 22"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-05-22",
    "start_time_ist": "07:01",
    "end_date": "2030-05-23",
    "end_time_ist": "06:23",
    "state": "उदय (Rise)",
    "source_start": "07:01 ए एम, मई 22",
    "source_end": "06:23 ए एम, मई 23"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-05-23",
    "start_time_ist": "06:23",
    "end_date": "2030-05-24",
    "end_time_ist": "06:30",
    "state": "उदय (Rise)",
    "source_start": "06:23 ए एम, मई 23",
    "source_end": "06:30 ए एम, मई 24"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-05-24",
    "start_time_ist": "06:30",
    "end_date": "2030-05-25",
    "end_time_ist": "07:20",
    "state": "उदय (Rise)",
    "source_start": "06:30 ए एम, मई 24",
    "source_end": "07:20 ए एम, मई 25"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-05-25",
    "start_time_ist": "07:20",
    "end_date": "2030-05-26",
    "end_time_ist": "08:50",
    "state": "उदय (Rise)",
    "source_start": "07:20 ए एम, मई 25",
    "source_end": "08:50 ए एम, मई 26"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-05-26",
    "start_time_ist": "08:49",
    "end_date": "2030-05-27",
    "end_time_ist": "10:54",
    "state": "उदय (Rise)",
    "source_start": "08:49 ए एम, मई 26",
    "source_end": "10:54 ए एम, मई 27"
  },
  {
    "nak": "Revati",
    "start_date": "2030-05-27",
    "start_time_ist": "10:54",
    "end_date": "2030-05-28",
    "end_time_ist": "13:26",
    "state": "उदय (Rise)",
    "source_start": "10:54 ए एम, मई 27",
    "source_end": "01:26 पी एम, मई 28"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-05-28",
    "start_time_ist": "13:26",
    "end_date": "2030-05-29",
    "end_time_ist": "16:18",
    "state": "उदय (Rise)",
    "source_start": "01:26 पी एम, मई 28",
    "source_end": "04:18 पी एम, मई 29"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-05-29",
    "start_time_ist": "16:18",
    "end_date": "2030-05-30",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "04:18 पी एम, मई 29",
    "source_end": "07:22 पी एम, मई 30"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-05-30",
    "start_time_ist": "19:22",
    "end_date": "2030-05-31",
    "end_time_ist": "22:31",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, मई 30",
    "source_end": "10:31 पी एम, मई 31"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-05-31",
    "start_time_ist": "22:31",
    "end_date": "2030-06-02",
    "end_time_ist": "01:38",
    "state": "उदय (Rise)",
    "source_start": "10:31 पी एम, मई 31",
    "source_end": "01:38 ए एम, जून 02"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-06-02",
    "start_time_ist": "01:38",
    "end_date": "2030-06-03",
    "end_time_ist": "04:36",
    "state": "उदय (Rise)",
    "source_start": "01:38 ए एम, जून 02",
    "source_end": "04:36 ए एम, जून 03"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-06-03",
    "start_time_ist": "04:36",
    "end_date": "2030-06-04",
    "end_time_ist": "07:18",
    "state": "उदय (Rise)",
    "source_start": "04:36 ए एम, जून 03",
    "source_end": "07:18 ए एम, जून 04"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-06-04",
    "start_time_ist": "07:18",
    "end_date": "2030-06-05",
    "end_time_ist": "09:39",
    "state": "उदय (Rise)",
    "source_start": "07:18 ए एम, जून 04",
    "source_end": "09:39 ए एम, जून 05"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-06-05",
    "start_time_ist": "09:39",
    "end_date": "2030-06-06",
    "end_time_ist": "11:33",
    "state": "उदय (Rise)",
    "source_start": "09:39 ए एम, जून 05",
    "source_end": "11:33 ए एम, जून 06"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-06-06",
    "start_time_ist": "11:33",
    "end_date": "2030-06-07",
    "end_time_ist": "12:53",
    "state": "उदय (Rise)",
    "source_start": "11:33 ए एम, जून 06",
    "source_end": "12:53 पी एम, जून 07"
  },
  {
    "nak": "Magha",
    "start_date": "2030-06-07",
    "start_time_ist": "12:53",
    "end_date": "2030-06-08",
    "end_time_ist": "13:37",
    "state": "उदय (Rise)",
    "source_start": "12:53 पी एम, जून 07",
    "source_end": "01:37 पी एम, जून 08"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-06-08",
    "start_time_ist": "13:37",
    "end_date": "2030-06-09",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "01:37 पी एम, जून 08",
    "source_end": "01:40 पी एम, जून 09"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-06-09",
    "start_time_ist": "13:40",
    "end_date": "2030-06-10",
    "end_time_ist": "13:03",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, जून 09",
    "source_end": "01:03 पी एम, जून 10"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-06-10",
    "start_time_ist": "13:03",
    "end_date": "2030-06-11",
    "end_time_ist": "11:48",
    "state": "उदय (Rise)",
    "source_start": "01:03 पी एम, जून 10",
    "source_end": "11:48 ए एम, जून 11"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-06-11",
    "start_time_ist": "11:48",
    "end_date": "2030-06-12",
    "end_time_ist": "09:59",
    "state": "उदय (Rise)",
    "source_start": "11:48 ए एम, जून 11",
    "source_end": "09:59 ए एम, जून 12"
  },
  {
    "nak": "Swati",
    "start_date": "2030-06-12",
    "start_time_ist": "09:59",
    "end_date": "2030-06-13",
    "end_time_ist": "07:43",
    "state": "उदय (Rise)",
    "source_start": "09:59 ए एम, जून 12",
    "source_end": "07:43 ए एम, जून 13"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-06-13",
    "start_time_ist": "07:43",
    "end_date": "2030-06-14",
    "end_time_ist": "05:06",
    "state": "उदय (Rise)",
    "source_start": "07:43 ए एम, जून 13",
    "source_end": "05:06 ए एम, जून 14"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-06-14",
    "start_time_ist": "05:06",
    "end_date": "2030-06-15",
    "end_time_ist": "02:18",
    "state": "उदय (Rise)",
    "source_start": "05:06 ए एम, जून 14",
    "source_end": "02:18 ए एम, जून 15"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-06-15",
    "start_time_ist": "02:18",
    "end_date": "2030-06-15",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "02:18 ए एम, जून 15",
    "source_end": "11:29 पी एम, जून 15"
  },
  {
    "nak": "Mula",
    "start_date": "2030-06-15",
    "start_time_ist": "23:29",
    "end_date": "2030-06-16",
    "end_time_ist": "20:48",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, जून 15",
    "source_end": "08:48 पी एम, जून 16"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-06-16",
    "start_time_ist": "20:48",
    "end_date": "2030-06-17",
    "end_time_ist": "18:25",
    "state": "उदय (Rise)",
    "source_start": "08:48 पी एम, जून 16",
    "source_end": "06:25 पी एम, जून 17"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-06-17",
    "start_time_ist": "18:25",
    "end_date": "2030-06-18",
    "end_time_ist": "16:30",
    "state": "उदय (Rise)",
    "source_start": "06:25 पी एम, जून 17",
    "source_end": "04:30 पी एम, जून 18"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-06-18",
    "start_time_ist": "16:30",
    "end_date": "2030-06-19",
    "end_time_ist": "15:11",
    "state": "उदय (Rise)",
    "source_start": "04:30 पी एम, जून 18",
    "source_end": "03:11 पी एम, जून 19"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-06-19",
    "start_time_ist": "15:11",
    "end_date": "2030-06-20",
    "end_time_ist": "14:34",
    "state": "उदय (Rise)",
    "source_start": "03:11 पी एम, जून 19",
    "source_end": "02:34 पी एम, जून 20"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-06-20",
    "start_time_ist": "14:34",
    "end_date": "2030-06-21",
    "end_time_ist": "14:45",
    "state": "उदय (Rise)",
    "source_start": "02:34 पी एम, जून 20",
    "source_end": "02:45 पी एम, जून 21"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-06-21",
    "start_time_ist": "14:45",
    "end_date": "2030-06-22",
    "end_time_ist": "15:42",
    "state": "उदय (Rise)",
    "source_start": "02:45 पी एम, जून 21",
    "source_end": "03:42 पी एम, जून 22"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-06-22",
    "start_time_ist": "15:42",
    "end_date": "2030-06-23",
    "end_time_ist": "17:24",
    "state": "उदय (Rise)",
    "source_start": "03:42 पी एम, जून 22",
    "source_end": "05:24 पी एम, जून 23"
  },
  {
    "nak": "Revati",
    "start_date": "2030-06-23",
    "start_time_ist": "17:24",
    "end_date": "2030-06-24",
    "end_time_ist": "19:44",
    "state": "उदय (Rise)",
    "source_start": "05:24 पी एम, जून 23",
    "source_end": "07:44 पी एम, जून 24"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-06-24",
    "start_time_ist": "19:44",
    "end_date": "2030-06-25",
    "end_time_ist": "22:32",
    "state": "उदय (Rise)",
    "source_start": "07:44 पी एम, जून 24",
    "source_end": "10:32 पी एम, जून 25"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-06-25",
    "start_time_ist": "22:32",
    "end_date": "2030-06-27",
    "end_time_ist": "01:36",
    "state": "उदय (Rise)",
    "source_start": "10:32 पी एम, जून 25",
    "source_end": "01:36 ए एम, जून 27"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-06-27",
    "start_time_ist": "01:36",
    "end_date": "2030-06-28",
    "end_time_ist": "04:46",
    "state": "उदय (Rise)",
    "source_start": "01:36 ए एम, जून 27",
    "source_end": "04:46 ए एम, जून 28"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-06-28",
    "start_time_ist": "04:46",
    "end_date": "2030-06-29",
    "end_time_ist": "07:51",
    "state": "उदय (Rise)",
    "source_start": "04:46 ए एम, जून 28",
    "source_end": "07:51 ए एम, जून 29"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-06-29",
    "start_time_ist": "07:51",
    "end_date": "2030-06-30",
    "end_time_ist": "10:43",
    "state": "उदय (Rise)",
    "source_start": "07:51 ए एम, जून 29",
    "source_end": "10:43 ए एम, जून 30"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-06-30",
    "start_time_ist": "10:43",
    "end_date": "2030-07-01",
    "end_time_ist": "13:15",
    "state": "उदय (Rise)",
    "source_start": "10:43 ए एम, जून 30",
    "source_end": "01:15 पी एम, जुलाई 01"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-07-01",
    "start_time_ist": "13:15",
    "end_date": "2030-07-02",
    "end_time_ist": "15:25",
    "state": "उदय (Rise)",
    "source_start": "01:15 पी एम, जुलाई 01",
    "source_end": "03:25 पी एम, जुलाई 02"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-07-02",
    "start_time_ist": "15:25",
    "end_date": "2030-07-03",
    "end_time_ist": "17:08",
    "state": "उदय (Rise)",
    "source_start": "03:25 पी एम, जुलाई 02",
    "source_end": "05:08 पी एम, जुलाई 03"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-07-03",
    "start_time_ist": "17:08",
    "end_date": "2030-07-04",
    "end_time_ist": "18:25",
    "state": "उदय (Rise)",
    "source_start": "05:08 पी एम, जुलाई 03",
    "source_end": "06:25 पी एम, जुलाई 04"
  },
  {
    "nak": "Magha",
    "start_date": "2030-07-04",
    "start_time_ist": "18:25",
    "end_date": "2030-07-05",
    "end_time_ist": "19:13",
    "state": "उदय (Rise)",
    "source_start": "06:25 पी एम, जुलाई 04",
    "source_end": "07:13 पी एम, जुलाई 05"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-07-05",
    "start_time_ist": "19:13",
    "end_date": "2030-07-06",
    "end_time_ist": "19:32",
    "state": "उदय (Rise)",
    "source_start": "07:13 पी एम, जुलाई 05",
    "source_end": "07:32 पी एम, जुलाई 06"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-07-06",
    "start_time_ist": "19:32",
    "end_date": "2030-07-07",
    "end_time_ist": "19:22",
    "state": "उदय (Rise)",
    "source_start": "07:32 पी एम, जुलाई 06",
    "source_end": "07:22 पी एम, जुलाई 07"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-07-07",
    "start_time_ist": "19:22",
    "end_date": "2030-07-08",
    "end_time_ist": "18:43",
    "state": "उदय (Rise)",
    "source_start": "07:22 पी एम, जुलाई 07",
    "source_end": "06:43 पी एम, जुलाई 08"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-07-08",
    "start_time_ist": "18:43",
    "end_date": "2030-07-09",
    "end_time_ist": "17:36",
    "state": "उदय (Rise)",
    "source_start": "06:43 पी एम, जुलाई 08",
    "source_end": "05:36 पी एम, जुलाई 09"
  },
  {
    "nak": "Swati",
    "start_date": "2030-07-09",
    "start_time_ist": "17:36",
    "end_date": "2030-07-10",
    "end_time_ist": "16:03",
    "state": "उदय (Rise)",
    "source_start": "05:36 पी एम, जुलाई 09",
    "source_end": "04:03 पी एम, जुलाई 10"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-07-10",
    "start_time_ist": "16:03",
    "end_date": "2030-07-11",
    "end_time_ist": "14:08",
    "state": "उदय (Rise)",
    "source_start": "04:03 पी एम, जुलाई 10",
    "source_end": "02:08 पी एम, जुलाई 11"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-07-11",
    "start_time_ist": "14:08",
    "end_date": "2030-07-12",
    "end_time_ist": "11:57",
    "state": "उदय (Rise)",
    "source_start": "02:08 पी एम, जुलाई 11",
    "source_end": "11:57 ए एम, जुलाई 12"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-07-12",
    "start_time_ist": "11:57",
    "end_date": "2030-07-13",
    "end_time_ist": "09:35",
    "state": "उदय (Rise)",
    "source_start": "11:57 ए एम, जुलाई 12",
    "source_end": "09:35 ए एम, जुलाई 13"
  },
  {
    "nak": "Mula",
    "start_date": "2030-07-13",
    "start_time_ist": "09:35",
    "end_date": "2030-07-14",
    "end_time_ist": "07:10",
    "state": "उदय (Rise)",
    "source_start": "09:35 ए एम, जुलाई 13",
    "source_end": "07:10 ए एम, जुलाई 14"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-07-14",
    "start_time_ist": "07:10",
    "end_date": "2030-07-15",
    "end_time_ist": "04:52",
    "state": "उदय (Rise)",
    "source_start": "07:10 ए एम, जुलाई 14",
    "source_end": "04:52 ए एम, जुलाई 15"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-07-15",
    "start_time_ist": "04:52",
    "end_date": "2030-07-16",
    "end_time_ist": "02:49",
    "state": "उदय (Rise)",
    "source_start": "04:52 ए एम, जुलाई 15",
    "source_end": "02:49 ए एम, जुलाई 16"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-07-16",
    "start_time_ist": "02:49",
    "end_date": "2030-07-17",
    "end_time_ist": "01:11",
    "state": "उदय (Rise)",
    "source_start": "02:49 ए एम, जुलाई 16",
    "source_end": "01:11 ए एम, जुलाई 17"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-07-17",
    "start_time_ist": "01:11",
    "end_date": "2030-07-18",
    "end_time_ist": "00:06",
    "state": "उदय (Rise)",
    "source_start": "01:11 ए एम, जुलाई 17",
    "source_end": "12:06 ए एम, जुलाई 18"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-07-18",
    "start_time_ist": "00:06",
    "end_date": "2030-07-18",
    "end_time_ist": "23:42",
    "state": "उदय (Rise)",
    "source_start": "12:06 ए एम, जुलाई 18",
    "source_end": "11:42 पी एम, जुलाई 18"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-07-18",
    "start_time_ist": "23:42",
    "end_date": "2030-07-20",
    "end_time_ist": "00:04",
    "state": "उदय (Rise)",
    "source_start": "11:42 पी एम, जुलाई 18",
    "source_end": "12:04 ए एम, जुलाई 20"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-07-20",
    "start_time_ist": "00:04",
    "end_date": "2030-07-21",
    "end_time_ist": "01:14",
    "state": "उदय (Rise)",
    "source_start": "12:04 ए एम, जुलाई 20",
    "source_end": "01:14 ए एम, जुलाई 21"
  },
  {
    "nak": "Revati",
    "start_date": "2030-07-21",
    "start_time_ist": "01:14",
    "end_date": "2030-07-22",
    "end_time_ist": "03:08",
    "state": "उदय (Rise)",
    "source_start": "01:14 ए एम, जुलाई 21",
    "source_end": "03:08 ए एम, जुलाई 22"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-07-22",
    "start_time_ist": "03:08",
    "end_date": "2030-07-23",
    "end_time_ist": "05:39",
    "state": "उदय (Rise)",
    "source_start": "03:08 ए एम, जुलाई 22",
    "source_end": "05:39 ए एम, जुलाई 23"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-07-23",
    "start_time_ist": "05:39",
    "end_date": "2030-07-24",
    "end_time_ist": "08:35",
    "state": "उदय (Rise)",
    "source_start": "05:39 ए एम, जुलाई 23",
    "source_end": "08:35 ए एम, जुलाई 24"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-07-24",
    "start_time_ist": "08:35",
    "end_date": "2030-07-25",
    "end_time_ist": "11:43",
    "state": "उदय (Rise)",
    "source_start": "08:35 ए एम, जुलाई 24",
    "source_end": "11:43 ए एम, जुलाई 25"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-07-25",
    "start_time_ist": "11:43",
    "end_date": "2030-07-26",
    "end_time_ist": "14:48",
    "state": "उदय (Rise)",
    "source_start": "11:43 ए एम, जुलाई 25",
    "source_end": "02:48 पी एम, जुलाई 26"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-07-26",
    "start_time_ist": "14:48",
    "end_date": "2030-07-27",
    "end_time_ist": "17:38",
    "state": "उदय (Rise)",
    "source_start": "02:48 पी एम, जुलाई 26",
    "source_end": "05:38 पी एम, जुलाई 27"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-07-27",
    "start_time_ist": "17:38",
    "end_date": "2030-07-28",
    "end_time_ist": "20:05",
    "state": "उदय (Rise)",
    "source_start": "05:38 पी एम, जुलाई 27",
    "source_end": "08:05 पी एम, जुलाई 28"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-07-28",
    "start_time_ist": "20:05",
    "end_date": "2030-07-29",
    "end_time_ist": "22:02",
    "state": "उदय (Rise)",
    "source_start": "08:05 पी एम, जुलाई 28",
    "source_end": "10:02 पी एम, जुलाई 29"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-07-29",
    "start_time_ist": "22:02",
    "end_date": "2030-07-30",
    "end_time_ist": "23:29",
    "state": "उदय (Rise)",
    "source_start": "10:02 पी एम, जुलाई 29",
    "source_end": "11:29 पी एम, जुलाई 30"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-07-30",
    "start_time_ist": "23:29",
    "end_date": "2030-08-01",
    "end_time_ist": "00:26",
    "state": "उदय (Rise)",
    "source_start": "11:29 पी एम, जुलाई 30",
    "source_end": "12:26 ए एम, अगस्त 01"
  },
  {
    "nak": "Magha",
    "start_date": "2030-08-01",
    "start_time_ist": "00:26",
    "end_date": "2030-08-02",
    "end_time_ist": "00:56",
    "state": "उदय (Rise)",
    "source_start": "12:26 ए एम, अगस्त 01",
    "source_end": "12:56 ए एम, अगस्त 02"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-08-02",
    "start_time_ist": "00:56",
    "end_date": "2030-08-03",
    "end_time_ist": "01:01",
    "state": "उदय (Rise)",
    "source_start": "12:56 ए एम, अगस्त 02",
    "source_end": "01:01 ए एम, अगस्त 03"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-08-03",
    "start_time_ist": "01:01",
    "end_date": "2030-08-04",
    "end_time_ist": "00:45",
    "state": "उदय (Rise)",
    "source_start": "01:01 ए एम, अगस्त 03",
    "source_end": "12:45 ए एम, अगस्त 04"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-08-04",
    "start_time_ist": "00:45",
    "end_date": "2030-08-05",
    "end_time_ist": "00:11",
    "state": "उदय (Rise)",
    "source_start": "12:45 ए एम, अगस्त 04",
    "source_end": "12:11 ए एम, अगस्त 05"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-08-05",
    "start_time_ist": "00:11",
    "end_date": "2030-08-05",
    "end_time_ist": "23:19",
    "state": "उदय (Rise)",
    "source_start": "12:11 ए एम, अगस्त 05",
    "source_end": "11:19 पी एम, अगस्त 05"
  },
  {
    "nak": "Swati",
    "start_date": "2030-08-05",
    "start_time_ist": "23:19",
    "end_date": "2030-08-06",
    "end_time_ist": "22:13",
    "state": "उदय (Rise)",
    "source_start": "11:19 पी एम, अगस्त 05",
    "source_end": "10:13 पी एम, अगस्त 06"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-08-06",
    "start_time_ist": "22:13",
    "end_date": "2030-08-07",
    "end_time_ist": "20:53",
    "state": "उदय (Rise)",
    "source_start": "10:13 पी एम, अगस्त 06",
    "source_end": "08:53 पी एम, अगस्त 07"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-08-07",
    "start_time_ist": "20:53",
    "end_date": "2030-08-08",
    "end_time_ist": "19:20",
    "state": "उदय (Rise)",
    "source_start": "08:53 पी एम, अगस्त 07",
    "source_end": "07:20 पी एम, अगस्त 08"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-08-08",
    "start_time_ist": "19:20",
    "end_date": "2030-08-09",
    "end_time_ist": "17:38",
    "state": "उदय (Rise)",
    "source_start": "07:20 पी एम, अगस्त 08",
    "source_end": "05:38 पी एम, अगस्त 09"
  },
  {
    "nak": "Mula",
    "start_date": "2030-08-09",
    "start_time_ist": "17:38",
    "end_date": "2030-08-10",
    "end_time_ist": "15:50",
    "state": "उदय (Rise)",
    "source_start": "05:38 पी एम, अगस्त 09",
    "source_end": "03:50 पी एम, अगस्त 10"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-08-10",
    "start_time_ist": "15:50",
    "end_date": "2030-08-11",
    "end_time_ist": "14:02",
    "state": "उदय (Rise)",
    "source_start": "03:50 पी एम, अगस्त 10",
    "source_end": "02:02 पी एम, अगस्त 11"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-08-11",
    "start_time_ist": "14:02",
    "end_date": "2030-08-12",
    "end_time_ist": "12:21",
    "state": "उदय (Rise)",
    "source_start": "02:02 पी एम, अगस्त 11",
    "source_end": "12:21 पी एम, अगस्त 12"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-08-12",
    "start_time_ist": "12:21",
    "end_date": "2030-08-13",
    "end_time_ist": "10:53",
    "state": "उदय (Rise)",
    "source_start": "12:21 पी एम, अगस्त 12",
    "source_end": "10:53 ए एम, अगस्त 13"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-08-13",
    "start_time_ist": "10:53",
    "end_date": "2030-08-14",
    "end_time_ist": "09:48",
    "state": "उदय (Rise)",
    "source_start": "10:53 ए एम, अगस्त 13",
    "source_end": "09:48 ए एम, अगस्त 14"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-08-14",
    "start_time_ist": "09:48",
    "end_date": "2030-08-15",
    "end_time_ist": "09:13",
    "state": "उदय (Rise)",
    "source_start": "09:48 ए एम, अगस्त 14",
    "source_end": "09:13 ए एम, अगस्त 15"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-08-15",
    "start_time_ist": "09:13",
    "end_date": "2030-08-16",
    "end_time_ist": "09:16",
    "state": "उदय (Rise)",
    "source_start": "09:13 ए एम, अगस्त 15",
    "source_end": "09:16 ए एम, अगस्त 16"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-08-16",
    "start_time_ist": "09:16",
    "end_date": "2030-08-17",
    "end_time_ist": "10:01",
    "state": "उदय (Rise)",
    "source_start": "09:16 ए एम, अगस्त 16",
    "source_end": "10:01 ए एम, अगस्त 17"
  },
  {
    "nak": "Revati",
    "start_date": "2030-08-17",
    "start_time_ist": "10:01",
    "end_date": "2030-08-18",
    "end_time_ist": "11:30",
    "state": "उदय (Rise)",
    "source_start": "10:01 ए एम, अगस्त 17",
    "source_end": "11:30 ए एम, अगस्त 18"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-08-18",
    "start_time_ist": "11:30",
    "end_date": "2030-08-19",
    "end_time_ist": "13:40",
    "state": "उदय (Rise)",
    "source_start": "11:30 ए एम, अगस्त 18",
    "source_end": "01:40 पी एम, अगस्त 19"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-08-19",
    "start_time_ist": "13:40",
    "end_date": "2030-08-20",
    "end_time_ist": "16:22",
    "state": "उदय (Rise)",
    "source_start": "01:40 पी एम, अगस्त 19",
    "source_end": "04:22 पी एम, अगस्त 20"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-08-20",
    "start_time_ist": "16:22",
    "end_date": "2030-08-21",
    "end_time_ist": "19:24",
    "state": "उदय (Rise)",
    "source_start": "04:22 पी एम, अगस्त 20",
    "source_end": "07:24 पी एम, अगस्त 21"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-08-21",
    "start_time_ist": "19:24",
    "end_date": "2030-08-22",
    "end_time_ist": "22:30",
    "state": "उदय (Rise)",
    "source_start": "07:24 पी एम, अगस्त 21",
    "source_end": "10:30 पी एम, अगस्त 22"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-08-22",
    "start_time_ist": "22:30",
    "end_date": "2030-08-24",
    "end_time_ist": "01:25",
    "state": "उदय (Rise)",
    "source_start": "10:30 पी एम, अगस्त 22",
    "source_end": "01:25 ए एम, अगस्त 24"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-08-24",
    "start_time_ist": "01:25",
    "end_date": "2030-08-25",
    "end_time_ist": "03:57",
    "state": "उदय (Rise)",
    "source_start": "01:25 ए एम, अगस्त 24",
    "source_end": "03:57 ए एम, अगस्त 25"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-08-25",
    "start_time_ist": "03:57",
    "end_date": "2030-08-26",
    "end_time_ist": "05:54",
    "state": "उदय (Rise)",
    "source_start": "03:57 ए एम, अगस्त 25",
    "source_end": "05:54 ए एम, अगस्त 26"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-08-26",
    "start_time_ist": "05:54",
    "end_date": "2030-08-27",
    "end_time_ist": "07:14",
    "state": "उदय (Rise)",
    "source_start": "05:54 ए एम, अगस्त 26",
    "source_end": "07:14 ए एम, अगस्त 27"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-08-27",
    "start_time_ist": "07:14",
    "end_date": "2030-08-28",
    "end_time_ist": "07:57",
    "state": "उदय (Rise)",
    "source_start": "07:14 ए एम, अगस्त 27",
    "source_end": "07:57 ए एम, अगस्त 28"
  },
  {
    "nak": "Magha",
    "start_date": "2030-08-28",
    "start_time_ist": "07:57",
    "end_date": "2030-08-29",
    "end_time_ist": "08:04",
    "state": "उदय (Rise)",
    "source_start": "07:57 ए एम, अगस्त 28",
    "source_end": "08:04 ए एम, अगस्त 29"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-08-29",
    "start_time_ist": "08:04",
    "end_date": "2030-08-30",
    "end_time_ist": "07:44",
    "state": "उदय (Rise)",
    "source_start": "08:04 ए एम, अगस्त 29",
    "source_end": "07:44 ए एम, अगस्त 30"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-08-30",
    "start_time_ist": "07:44",
    "end_date": "2030-08-31",
    "end_time_ist": "07:00",
    "state": "उदय (Rise)",
    "source_start": "07:44 ए एम, अगस्त 30",
    "source_end": "07:00 ए एम, अगस्त 31"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-08-31",
    "start_time_ist": "07:00",
    "end_date": "2030-09-01",
    "end_time_ist": "06:01",
    "state": "उदय (Rise)",
    "source_start": "07:00 ए एम, अगस्त 31",
    "source_end": "06:01 ए एम, सितम्बर 01"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-09-01",
    "start_time_ist": "06:01",
    "end_date": "2030-09-02",
    "end_time_ist": "04:51",
    "state": "उदय (Rise)",
    "source_start": "06:01 ए एम, सितम्बर 01",
    "source_end": "04:51 ए एम, सितम्बर 02"
  },
  {
    "nak": "Swati",
    "start_date": "2030-09-02",
    "start_time_ist": "04:51",
    "end_date": "2030-09-03",
    "end_time_ist": "03:35",
    "state": "उदय (Rise)",
    "source_start": "04:51 ए एम, सितम्बर 02",
    "source_end": "03:35 ए एम, सितम्बर 03"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-09-03",
    "start_time_ist": "03:35",
    "end_date": "2030-09-04",
    "end_time_ist": "02:16",
    "state": "उदय (Rise)",
    "source_start": "03:35 ए एम, सितम्बर 03",
    "source_end": "02:16 ए एम, सितम्बर 04"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-09-04",
    "start_time_ist": "02:16",
    "end_date": "2030-09-05",
    "end_time_ist": "00:56",
    "state": "उदय (Rise)",
    "source_start": "02:16 ए एम, सितम्बर 04",
    "source_end": "12:56 ए एम, सितम्बर 05"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-09-05",
    "start_time_ist": "00:56",
    "end_date": "2030-09-05",
    "end_time_ist": "23:37",
    "state": "उदय (Rise)",
    "source_start": "12:56 ए एम, सितम्बर 05",
    "source_end": "11:37 पी एम, सितम्बर 05"
  },
  {
    "nak": "Mula",
    "start_date": "2030-09-05",
    "start_time_ist": "23:37",
    "end_date": "2030-09-06",
    "end_time_ist": "22:19",
    "state": "उदय (Rise)",
    "source_start": "11:37 पी एम, सितम्बर 05",
    "source_end": "10:19 पी एम, सितम्बर 06"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-09-06",
    "start_time_ist": "22:19",
    "end_date": "2030-09-07",
    "end_time_ist": "21:05",
    "state": "उदय (Rise)",
    "source_start": "10:19 पी एम, सितम्बर 06",
    "source_end": "09:05 पी एम, सितम्बर 07"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-09-07",
    "start_time_ist": "21:05",
    "end_date": "2030-09-08",
    "end_time_ist": "19:58",
    "state": "उदय (Rise)",
    "source_start": "09:05 पी एम, सितम्बर 07",
    "source_end": "07:58 पी एम, सितम्बर 08"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-09-08",
    "start_time_ist": "19:58",
    "end_date": "2030-09-09",
    "end_time_ist": "19:00",
    "state": "उदय (Rise)",
    "source_start": "07:58 पी एम, सितम्बर 08",
    "source_end": "07:00 पी एम, सितम्बर 09"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-09-09",
    "start_time_ist": "19:00",
    "end_date": "2030-09-10",
    "end_time_ist": "18:19",
    "state": "उदय (Rise)",
    "source_start": "07:00 पी एम, सितम्बर 09",
    "source_end": "06:19 पी एम, सितम्बर 10"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-09-10",
    "start_time_ist": "18:19",
    "end_date": "2030-09-11",
    "end_time_ist": "17:59",
    "state": "उदय (Rise)",
    "source_start": "06:19 पी एम, सितम्बर 10",
    "source_end": "05:59 पी एम, सितम्बर 11"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-09-11",
    "start_time_ist": "17:59",
    "end_date": "2030-09-12",
    "end_time_ist": "18:07",
    "state": "उदय (Rise)",
    "source_start": "05:59 पी एम, सितम्बर 11",
    "source_end": "06:07 पी एम, सितम्बर 12"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-09-12",
    "start_time_ist": "18:07",
    "end_date": "2030-09-13",
    "end_time_ist": "18:48",
    "state": "उदय (Rise)",
    "source_start": "06:07 पी एम, सितम्बर 12",
    "source_end": "06:48 पी एम, सितम्बर 13"
  },
  {
    "nak": "Revati",
    "start_date": "2030-09-13",
    "start_time_ist": "18:48",
    "end_date": "2030-09-14",
    "end_time_ist": "20:06",
    "state": "उदय (Rise)",
    "source_start": "06:48 पी एम, सितम्बर 13",
    "source_end": "08:06 पी एम, सितम्बर 14"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-09-14",
    "start_time_ist": "20:06",
    "end_date": "2030-09-15",
    "end_time_ist": "22:02",
    "state": "उदय (Rise)",
    "source_start": "08:06 पी एम, सितम्बर 14",
    "source_end": "10:02 पी एम, सितम्बर 15"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-09-15",
    "start_time_ist": "22:02",
    "end_date": "2030-09-17",
    "end_time_ist": "00:31",
    "state": "उदय (Rise)",
    "source_start": "10:02 पी एम, सितम्बर 15",
    "source_end": "12:31 ए एम, सितम्बर 17"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-09-17",
    "start_time_ist": "00:31",
    "end_date": "2030-09-18",
    "end_time_ist": "03:25",
    "state": "उदय (Rise)",
    "source_start": "12:31 ए एम, सितम्बर 17",
    "source_end": "03:25 ए एम, सितम्बर 18"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-09-18",
    "start_time_ist": "03:25",
    "end_date": "2030-09-19",
    "end_time_ist": "06:32",
    "state": "उदय (Rise)",
    "source_start": "03:25 ए एम, सितम्बर 18",
    "source_end": "06:32 ए एम, सितम्बर 19"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-09-19",
    "start_time_ist": "06:32",
    "end_date": "2030-09-20",
    "end_time_ist": "09:35",
    "state": "उदय (Rise)",
    "source_start": "06:32 ए एम, सितम्बर 19",
    "source_end": "09:35 ए एम, सितम्बर 20"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-09-20",
    "start_time_ist": "09:35",
    "end_date": "2030-09-21",
    "end_time_ist": "12:21",
    "state": "उदय (Rise)",
    "source_start": "09:35 ए एम, सितम्बर 20",
    "source_end": "12:21 पी एम, सितम्बर 21"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-09-21",
    "start_time_ist": "12:21",
    "end_date": "2030-09-22",
    "end_time_ist": "14:34",
    "state": "उदय (Rise)",
    "source_start": "12:21 पी एम, सितम्बर 21",
    "source_end": "02:34 पी एम, सितम्बर 22"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-09-22",
    "start_time_ist": "14:34",
    "end_date": "2030-09-23",
    "end_time_ist": "16:07",
    "state": "उदय (Rise)",
    "source_start": "02:34 पी एम, सितम्बर 22",
    "source_end": "04:07 पी एम, सितम्बर 23"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-09-23",
    "start_time_ist": "16:07",
    "end_date": "2030-09-24",
    "end_time_ist": "16:55",
    "state": "उदय (Rise)",
    "source_start": "04:07 पी एम, सितम्बर 23",
    "source_end": "04:55 पी एम, सितम्बर 24"
  },
  {
    "nak": "Magha",
    "start_date": "2030-09-24",
    "start_time_ist": "16:55",
    "end_date": "2030-09-25",
    "end_time_ist": "16:59",
    "state": "उदय (Rise)",
    "source_start": "04:55 पी एम, सितम्बर 24",
    "source_end": "04:59 पी एम, सितम्बर 25"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-09-25",
    "start_time_ist": "16:59",
    "end_date": "2030-09-26",
    "end_time_ist": "16:25",
    "state": "उदय (Rise)",
    "source_start": "04:59 पी एम, सितम्बर 25",
    "source_end": "04:25 पी एम, सितम्बर 26"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-09-26",
    "start_time_ist": "16:25",
    "end_date": "2030-09-27",
    "end_time_ist": "15:18",
    "state": "उदय (Rise)",
    "source_start": "04:25 पी एम, सितम्बर 26",
    "source_end": "03:18 पी एम, सितम्बर 27"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-09-27",
    "start_time_ist": "15:18",
    "end_date": "2030-09-28",
    "end_time_ist": "13:48",
    "state": "उदय (Rise)",
    "source_start": "03:18 पी एम, सितम्बर 27",
    "source_end": "01:48 पी एम, सितम्बर 28"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-09-28",
    "start_time_ist": "13:48",
    "end_date": "2030-09-29",
    "end_time_ist": "12:03",
    "state": "उदय (Rise)",
    "source_start": "01:48 पी एम, सितम्बर 28",
    "source_end": "12:03 पी एम, सितम्बर 29"
  },
  {
    "nak": "Swati",
    "start_date": "2030-09-29",
    "start_time_ist": "12:03",
    "end_date": "2030-09-30",
    "end_time_ist": "10:12",
    "state": "उदय (Rise)",
    "source_start": "12:03 पी एम, सितम्बर 29",
    "source_end": "10:12 ए एम, सितम्बर 30"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-09-30",
    "start_time_ist": "10:12",
    "end_date": "2030-10-01",
    "end_time_ist": "08:21",
    "state": "उदय (Rise)",
    "source_start": "10:12 ए एम, सितम्बर 30",
    "source_end": "08:21 ए एम, अक्टूबर 01"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-10-01",
    "start_time_ist": "08:21",
    "end_date": "2030-10-02",
    "end_time_ist": "06:36",
    "state": "उदय (Rise)",
    "source_start": "08:21 ए एम, अक्टूबर 01",
    "source_end": "06:36 ए एम, अक्टूबर 02"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-10-02",
    "start_time_ist": "06:36",
    "end_date": "2030-10-03",
    "end_time_ist": "05:02",
    "state": "उदय (Rise)",
    "source_start": "06:36 ए एम, अक्टूबर 02",
    "source_end": "05:02 ए एम, अक्टूबर 03"
  },
  {
    "nak": "Mula",
    "start_date": "2030-10-03",
    "start_time_ist": "05:02",
    "end_date": "2030-10-04",
    "end_time_ist": "03:41",
    "state": "उदय (Rise)",
    "source_start": "05:02 ए एम, अक्टूबर 03",
    "source_end": "03:41 ए एम, अक्टूबर 04"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-10-04",
    "start_time_ist": "03:41",
    "end_date": "2030-10-05",
    "end_time_ist": "02:35",
    "state": "उदय (Rise)",
    "source_start": "03:41 ए एम, अक्टूबर 04",
    "source_end": "02:35 ए एम, अक्टूबर 05"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-10-05",
    "start_time_ist": "02:35",
    "end_date": "2030-10-06",
    "end_time_ist": "01:45",
    "state": "उदय (Rise)",
    "source_start": "02:35 ए एम, अक्टूबर 05",
    "source_end": "01:45 ए एम, अक्टूबर 06"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-10-06",
    "start_time_ist": "01:45",
    "end_date": "2030-10-07",
    "end_time_ist": "01:12",
    "state": "उदय (Rise)",
    "source_start": "01:45 ए एम, अक्टूबर 06",
    "source_end": "01:12 ए एम, अक्टूबर 07"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-10-07",
    "start_time_ist": "01:12",
    "end_date": "2030-10-08",
    "end_time_ist": "00:59",
    "state": "उदय (Rise)",
    "source_start": "01:12 ए एम, अक्टूबर 07",
    "source_end": "12:59 ए एम, अक्टूबर 08"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-10-08",
    "start_time_ist": "00:59",
    "end_date": "2030-10-09",
    "end_time_ist": "01:06",
    "state": "उदय (Rise)",
    "source_start": "12:59 ए एम, अक्टूबर 08",
    "source_end": "01:06 ए एम, अक्टूबर 09"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-10-09",
    "start_time_ist": "01:06",
    "end_date": "2030-10-10",
    "end_time_ist": "01:37",
    "state": "उदय (Rise)",
    "source_start": "01:06 ए एम, अक्टूबर 09",
    "source_end": "01:37 ए एम, अक्टूबर 10"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-10-10",
    "start_time_ist": "01:37",
    "end_date": "2030-10-11",
    "end_time_ist": "02:34",
    "state": "उदय (Rise)",
    "source_start": "01:37 ए एम, अक्टूबर 10",
    "source_end": "02:34 ए एम, अक्टूबर 11"
  },
  {
    "nak": "Revati",
    "start_date": "2030-10-11",
    "start_time_ist": "02:34",
    "end_date": "2030-10-12",
    "end_time_ist": "04:00",
    "state": "उदय (Rise)",
    "source_start": "02:34 ए एम, अक्टूबर 11",
    "source_end": "04:00 ए एम, अक्टूबर 12"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-10-12",
    "start_time_ist": "04:00",
    "end_date": "2030-10-13",
    "end_time_ist": "05:56",
    "state": "उदय (Rise)",
    "source_start": "04:00 ए एम, अक्टूबर 12",
    "source_end": "05:56 ए एम, अक्टूबर 13"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-10-13",
    "start_time_ist": "05:56",
    "end_date": "2030-10-14",
    "end_time_ist": "08:21",
    "state": "उदय (Rise)",
    "source_start": "05:56 ए एम, अक्टूबर 13",
    "source_end": "08:21 ए एम, अक्टूबर 14"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-10-14",
    "start_time_ist": "08:21",
    "end_date": "2030-10-15",
    "end_time_ist": "11:10",
    "state": "उदय (Rise)",
    "source_start": "08:21 ए एम, अक्टूबर 14",
    "source_end": "11:10 ए एम, अक्टूबर 15"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-10-15",
    "start_time_ist": "11:10",
    "end_date": "2030-10-16",
    "end_time_ist": "14:15",
    "state": "उदय (Rise)",
    "source_start": "11:10 ए एम, अक्टूबर 15",
    "source_end": "02:15 पी एम, अक्टूबर 16"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-10-16",
    "start_time_ist": "14:15",
    "end_date": "2030-10-17",
    "end_time_ist": "17:24",
    "state": "उदय (Rise)",
    "source_start": "02:15 पी एम, अक्टूबर 16",
    "source_end": "05:24 पी एम, अक्टूबर 17"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-10-17",
    "start_time_ist": "17:24",
    "end_date": "2030-10-18",
    "end_time_ist": "20:24",
    "state": "उदय (Rise)",
    "source_start": "05:24 पी एम, अक्टूबर 17",
    "source_end": "08:24 पी एम, अक्टूबर 18"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-10-18",
    "start_time_ist": "20:24",
    "end_date": "2030-10-19",
    "end_time_ist": "23:01",
    "state": "उदय (Rise)",
    "source_start": "08:24 पी एम, अक्टूबर 18",
    "source_end": "11:01 पी एम, अक्टूबर 19"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-10-19",
    "start_time_ist": "23:01",
    "end_date": "2030-10-21",
    "end_time_ist": "01:02",
    "state": "उदय (Rise)",
    "source_start": "11:01 पी एम, अक्टूबर 19",
    "source_end": "01:02 ए एम, अक्टूबर 21"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-10-21",
    "start_time_ist": "01:02",
    "end_date": "2030-10-22",
    "end_time_ist": "02:18",
    "state": "उदय (Rise)",
    "source_start": "01:02 ए एम, अक्टूबर 21",
    "source_end": "02:18 ए एम, अक्टूबर 22"
  },
  {
    "nak": "Magha",
    "start_date": "2030-10-22",
    "start_time_ist": "02:18",
    "end_date": "2030-10-23",
    "end_time_ist": "02:47",
    "state": "उदय (Rise)",
    "source_start": "02:18 ए एम, अक्टूबर 22",
    "source_end": "02:47 ए एम, अक्टूबर 23"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-10-23",
    "start_time_ist": "02:47",
    "end_date": "2030-10-24",
    "end_time_ist": "02:27",
    "state": "उदय (Rise)",
    "source_start": "02:47 ए एम, अक्टूबर 23",
    "source_end": "02:27 ए एम, अक्टूबर 24"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-10-24",
    "start_time_ist": "02:27",
    "end_date": "2030-10-25",
    "end_time_ist": "01:25",
    "state": "उदय (Rise)",
    "source_start": "02:27 ए एम, अक्टूबर 24",
    "source_end": "01:25 ए एम, अक्टूबर 25"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-10-25",
    "start_time_ist": "01:25",
    "end_date": "2030-10-25",
    "end_time_ist": "23:47",
    "state": "उदय (Rise)",
    "source_start": "01:25 ए एम, अक्टूबर 25",
    "source_end": "11:47 पी एम, अक्टूबर 25"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-10-25",
    "start_time_ist": "23:47",
    "end_date": "2030-10-26",
    "end_time_ist": "21:42",
    "state": "उदय (Rise)",
    "source_start": "11:47 पी एम, अक्टूबर 25",
    "source_end": "09:42 पी एम, अक्टूबर 26"
  },
  {
    "nak": "Swati",
    "start_date": "2030-10-26",
    "start_time_ist": "21:42",
    "end_date": "2030-10-27",
    "end_time_ist": "19:20",
    "state": "उदय (Rise)",
    "source_start": "09:42 पी एम, अक्टूबर 26",
    "source_end": "07:20 पी एम, अक्टूबर 27"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-10-27",
    "start_time_ist": "19:20",
    "end_date": "2030-10-28",
    "end_time_ist": "16:50",
    "state": "उदय (Rise)",
    "source_start": "07:20 पी एम, अक्टूबर 27",
    "source_end": "04:50 पी एम, अक्टूबर 28"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-10-28",
    "start_time_ist": "16:50",
    "end_date": "2030-10-29",
    "end_time_ist": "14:23",
    "state": "उदय (Rise)",
    "source_start": "04:50 पी एम, अक्टूबर 28",
    "source_end": "02:23 पी एम, अक्टूबर 29"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-10-29",
    "start_time_ist": "14:23",
    "end_date": "2030-10-30",
    "end_time_ist": "12:05",
    "state": "उदय (Rise)",
    "source_start": "02:23 पी एम, अक्टूबर 29",
    "source_end": "12:05 पी एम, अक्टूबर 30"
  },
  {
    "nak": "Mula",
    "start_date": "2030-10-30",
    "start_time_ist": "12:05",
    "end_date": "2030-10-31",
    "end_time_ist": "10:05",
    "state": "उदय (Rise)",
    "source_start": "12:05 पी एम, अक्टूबर 30",
    "source_end": "10:05 ए एम, अक्टूबर 31"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-10-31",
    "start_time_ist": "10:05",
    "end_date": "2030-11-01",
    "end_time_ist": "08:29",
    "state": "उदय (Rise)",
    "source_start": "10:05 ए एम, अक्टूबर 31",
    "source_end": "08:29 ए एम, नवम्बर 01"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-11-01",
    "start_time_ist": "08:29",
    "end_date": "2030-11-02",
    "end_time_ist": "07:19",
    "state": "उदय (Rise)",
    "source_start": "08:29 ए एम, नवम्बर 01",
    "source_end": "07:19 ए एम, नवम्बर 02"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-11-02",
    "start_time_ist": "07:19",
    "end_date": "2030-11-03",
    "end_time_ist": "06:38",
    "state": "उदय (Rise)",
    "source_start": "07:19 ए एम, नवम्बर 02",
    "source_end": "06:38 ए एम, नवम्बर 03"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-11-03",
    "start_time_ist": "06:38",
    "end_date": "2030-11-04",
    "end_time_ist": "06:28",
    "state": "उदय (Rise)",
    "source_start": "06:38 ए एम, नवम्बर 03",
    "source_end": "06:28 ए एम, नवम्बर 04"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-11-04",
    "start_time_ist": "06:28",
    "end_date": "2030-11-05",
    "end_time_ist": "06:48",
    "state": "उदय (Rise)",
    "source_start": "06:28 ए एम, नवम्बर 04",
    "source_end": "06:48 ए एम, नवम्बर 05"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-11-05",
    "start_time_ist": "06:48",
    "end_date": "2030-11-06",
    "end_time_ist": "07:38",
    "state": "उदय (Rise)",
    "source_start": "06:48 ए एम, नवम्बर 05",
    "source_end": "07:38 ए एम, नवम्बर 06"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-11-06",
    "start_time_ist": "07:38",
    "end_date": "2030-11-07",
    "end_time_ist": "08:56",
    "state": "उदय (Rise)",
    "source_start": "07:38 ए एम, नवम्बर 06",
    "source_end": "08:56 ए एम, नवम्बर 07"
  },
  {
    "nak": "Revati",
    "start_date": "2030-11-07",
    "start_time_ist": "08:56",
    "end_date": "2030-11-08",
    "end_time_ist": "10:41",
    "state": "उदय (Rise)",
    "source_start": "08:56 ए एम, नवम्बर 07",
    "source_end": "10:41 ए एम, नवम्बर 08"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-11-08",
    "start_time_ist": "10:41",
    "end_date": "2030-11-09",
    "end_time_ist": "12:50",
    "state": "उदय (Rise)",
    "source_start": "10:41 ए एम, नवम्बर 08",
    "source_end": "12:50 पी एम, नवम्बर 09"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-11-09",
    "start_time_ist": "12:50",
    "end_date": "2030-11-10",
    "end_time_ist": "15:21",
    "state": "उदय (Rise)",
    "source_start": "12:50 पी एम, नवम्बर 09",
    "source_end": "03:21 पी एम, नवम्बर 10"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-11-10",
    "start_time_ist": "15:21",
    "end_date": "2030-11-11",
    "end_time_ist": "18:11",
    "state": "उदय (Rise)",
    "source_start": "03:21 पी एम, नवम्बर 10",
    "source_end": "06:11 पी एम, नवम्बर 11"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-11-11",
    "start_time_ist": "18:11",
    "end_date": "2030-11-12",
    "end_time_ist": "21:15",
    "state": "उदय (Rise)",
    "source_start": "06:11 पी एम, नवम्बर 11",
    "source_end": "09:15 पी एम, नवम्बर 12"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-11-12",
    "start_time_ist": "21:15",
    "end_date": "2030-11-14",
    "end_time_ist": "00:24",
    "state": "उदय (Rise)",
    "source_start": "09:15 पी एम, नवम्बर 12",
    "source_end": "12:24 ए एम, नवम्बर 14"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-11-14",
    "start_time_ist": "00:24",
    "end_date": "2030-11-15",
    "end_time_ist": "03:30",
    "state": "उदय (Rise)",
    "source_start": "12:24 ए एम, नवम्बर 14",
    "source_end": "03:30 ए एम, नवम्बर 15"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-11-15",
    "start_time_ist": "03:30",
    "end_date": "2030-11-16",
    "end_time_ist": "06:23",
    "state": "उदय (Rise)",
    "source_start": "03:30 ए एम, नवम्बर 15",
    "source_end": "06:23 ए एम, नवम्बर 16"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-11-16",
    "start_time_ist": "06:23",
    "end_date": "2030-11-17",
    "end_time_ist": "08:50",
    "state": "उदय (Rise)",
    "source_start": "06:23 ए एम, नवम्बर 16",
    "source_end": "08:50 ए एम, नवम्बर 17"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-11-17",
    "start_time_ist": "08:50",
    "end_date": "2030-11-18",
    "end_time_ist": "10:42",
    "state": "उदय (Rise)",
    "source_start": "08:50 ए एम, नवम्बर 17",
    "source_end": "10:42 ए एम, नवम्बर 18"
  },
  {
    "nak": "Magha",
    "start_date": "2030-11-18",
    "start_time_ist": "10:42",
    "end_date": "2030-11-19",
    "end_time_ist": "11:50",
    "state": "उदय (Rise)",
    "source_start": "10:42 ए एम, नवम्बर 18",
    "source_end": "11:50 ए एम, नवम्बर 19"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-11-19",
    "start_time_ist": "11:50",
    "end_date": "2030-11-20",
    "end_time_ist": "12:12",
    "state": "उदय (Rise)",
    "source_start": "11:50 ए एम, नवम्बर 19",
    "source_end": "12:12 पी एम, नवम्बर 20"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-11-20",
    "start_time_ist": "12:12",
    "end_date": "2030-11-21",
    "end_time_ist": "11:45",
    "state": "उदय (Rise)",
    "source_start": "12:12 पी एम, नवम्बर 20",
    "source_end": "11:45 ए एम, नवम्बर 21"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-11-21",
    "start_time_ist": "11:45",
    "end_date": "2030-11-22",
    "end_time_ist": "10:34",
    "state": "उदय (Rise)",
    "source_start": "11:45 ए एम, नवम्बर 21",
    "source_end": "10:34 ए एम, नवम्बर 22"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-11-22",
    "start_time_ist": "10:34",
    "end_date": "2030-11-23",
    "end_time_ist": "08:44",
    "state": "उदय (Rise)",
    "source_start": "10:34 ए एम, नवम्बर 22",
    "source_end": "08:44 ए एम, नवम्बर 23"
  },
  {
    "nak": "Swati",
    "start_date": "2030-11-23",
    "start_time_ist": "08:44",
    "end_date": "2030-11-24",
    "end_time_ist": "06:23",
    "state": "उदय (Rise)",
    "source_start": "08:44 ए एम, नवम्बर 23",
    "source_end": "06:23 ए एम, नवम्बर 24"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-11-24",
    "start_time_ist": "06:23",
    "end_date": "2030-11-25",
    "end_time_ist": "03:41",
    "state": "उदय (Rise)",
    "source_start": "06:23 ए एम, नवम्बर 24",
    "source_end": "03:41 ए एम, नवम्बर 25"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-11-25",
    "start_time_ist": "03:41",
    "end_date": "2030-11-26",
    "end_time_ist": "00:48",
    "state": "उदय (Rise)",
    "source_start": "03:41 ए एम, नवम्बर 25",
    "source_end": "12:48 ए एम, नवम्बर 26"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-11-26",
    "start_time_ist": "00:48",
    "end_date": "2030-11-26",
    "end_time_ist": "21:54",
    "state": "उदय (Rise)",
    "source_start": "12:48 ए एम, नवम्बर 26",
    "source_end": "09:54 पी एम, नवम्बर 26"
  },
  {
    "nak": "Mula",
    "start_date": "2030-11-26",
    "start_time_ist": "21:54",
    "end_date": "2030-11-27",
    "end_time_ist": "19:09",
    "state": "उदय (Rise)",
    "source_start": "09:54 पी एम, नवम्बर 26",
    "source_end": "07:09 पी एम, नवम्बर 27"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-11-27",
    "start_time_ist": "19:09",
    "end_date": "2030-11-28",
    "end_time_ist": "16:44",
    "state": "उदय (Rise)",
    "source_start": "07:09 पी एम, नवम्बर 27",
    "source_end": "04:44 पी एम, नवम्बर 28"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-11-28",
    "start_time_ist": "16:44",
    "end_date": "2030-11-29",
    "end_time_ist": "14:45",
    "state": "उदय (Rise)",
    "source_start": "04:44 पी एम, नवम्बर 28",
    "source_end": "02:45 पी एम, नवम्बर 29"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-11-29",
    "start_time_ist": "14:45",
    "end_date": "2030-11-30",
    "end_time_ist": "13:22",
    "state": "उदय (Rise)",
    "source_start": "02:45 पी एम, नवम्बर 29",
    "source_end": "01:22 पी एम, नवम्बर 30"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-11-30",
    "start_time_ist": "13:22",
    "end_date": "2030-12-01",
    "end_time_ist": "12:38",
    "state": "उदय (Rise)",
    "source_start": "01:22 पी एम, नवम्बर 30",
    "source_end": "12:38 पी एम, दिसम्बर 01"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-12-01",
    "start_time_ist": "12:38",
    "end_date": "2030-12-02",
    "end_time_ist": "12:36",
    "state": "उदय (Rise)",
    "source_start": "12:38 पी एम, दिसम्बर 01",
    "source_end": "12:36 पी एम, दिसम्बर 02"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-12-02",
    "start_time_ist": "12:36",
    "end_date": "2030-12-03",
    "end_time_ist": "13:16",
    "state": "उदय (Rise)",
    "source_start": "12:36 पी एम, दिसम्बर 02",
    "source_end": "01:16 पी एम, दिसम्बर 03"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-12-03",
    "start_time_ist": "13:16",
    "end_date": "2030-12-04",
    "end_time_ist": "14:35",
    "state": "उदय (Rise)",
    "source_start": "01:16 पी एम, दिसम्बर 03",
    "source_end": "02:35 पी एम, दिसम्बर 04"
  },
  {
    "nak": "Revati",
    "start_date": "2030-12-04",
    "start_time_ist": "14:35",
    "end_date": "2030-12-05",
    "end_time_ist": "16:29",
    "state": "उदय (Rise)",
    "source_start": "02:35 पी एम, दिसम्बर 04",
    "source_end": "04:29 पी एम, दिसम्बर 05"
  },
  {
    "nak": "Ashwini",
    "start_date": "2030-12-05",
    "start_time_ist": "16:29",
    "end_date": "2030-12-06",
    "end_time_ist": "18:51",
    "state": "उदय (Rise)",
    "source_start": "04:29 पी एम, दिसम्बर 05",
    "source_end": "06:51 पी एम, दिसम्बर 06"
  },
  {
    "nak": "Bharani",
    "start_date": "2030-12-06",
    "start_time_ist": "18:51",
    "end_date": "2030-12-07",
    "end_time_ist": "21:34",
    "state": "उदय (Rise)",
    "source_start": "06:51 पी एम, दिसम्बर 06",
    "source_end": "09:34 पी एम, दिसम्बर 07"
  },
  {
    "nak": "Krittika",
    "start_date": "2030-12-07",
    "start_time_ist": "21:34",
    "end_date": "2030-12-09",
    "end_time_ist": "00:31",
    "state": "उदय (Rise)",
    "source_start": "09:34 पी एम, दिसम्बर 07",
    "source_end": "12:31 ए एम, दिसम्बर 09"
  },
  {
    "nak": "Rohini",
    "start_date": "2030-12-09",
    "start_time_ist": "00:31",
    "end_date": "2030-12-10",
    "end_time_ist": "03:36",
    "state": "उदय (Rise)",
    "source_start": "12:31 ए एम, दिसम्बर 09",
    "source_end": "03:36 ए एम, दिसम्बर 10"
  },
  {
    "nak": "Mrigashira",
    "start_date": "2030-12-10",
    "start_time_ist": "03:36",
    "end_date": "2030-12-11",
    "end_time_ist": "06:43",
    "state": "उदय (Rise)",
    "source_start": "03:36 ए एम, दिसम्बर 10",
    "source_end": "06:43 ए एम, दिसम्बर 11"
  },
  {
    "nak": "Ardra",
    "start_date": "2030-12-11",
    "start_time_ist": "06:43",
    "end_date": "2030-12-12",
    "end_time_ist": "09:46",
    "state": "उदय (Rise)",
    "source_start": "06:43 ए एम, दिसम्बर 11",
    "source_end": "09:46 ए एम, दिसम्बर 12"
  },
  {
    "nak": "Punarvasu",
    "start_date": "2030-12-12",
    "start_time_ist": "09:46",
    "end_date": "2030-12-13",
    "end_time_ist": "12:37",
    "state": "उदय (Rise)",
    "source_start": "09:46 ए एम, दिसम्बर 12",
    "source_end": "12:37 पी एम, दिसम्बर 13"
  },
  {
    "nak": "Pushya",
    "start_date": "2030-12-13",
    "start_time_ist": "12:37",
    "end_date": "2030-12-14",
    "end_time_ist": "15:12",
    "state": "उदय (Rise)",
    "source_start": "12:37 पी एम, दिसम्बर 13",
    "source_end": "03:12 पी एम, दिसम्बर 14"
  },
  {
    "nak": "Ashlesha",
    "start_date": "2030-12-14",
    "start_time_ist": "15:12",
    "end_date": "2030-12-15",
    "end_time_ist": "17:22",
    "state": "उदय (Rise)",
    "source_start": "03:12 पी एम, दिसम्बर 14",
    "source_end": "05:22 पी एम, दिसम्बर 15"
  },
  {
    "nak": "Magha",
    "start_date": "2030-12-15",
    "start_time_ist": "17:22",
    "end_date": "2030-12-16",
    "end_time_ist": "19:01",
    "state": "उदय (Rise)",
    "source_start": "05:22 पी एम, दिसम्बर 15",
    "source_end": "07:01 पी एम, दिसम्बर 16"
  },
  {
    "nak": "पूर्वा फाल्गुनी (Purva Phalguni",
    "start_date": "2030-12-16",
    "start_time_ist": "19:01",
    "end_date": "2030-12-17",
    "end_time_ist": "20:03",
    "state": "उदय (Rise)",
    "source_start": "07:01 पी एम, दिसम्बर 16",
    "source_end": "08:03 पी एम, दिसम्बर 17"
  },
  {
    "nak": "उत्तर फाल्गुनी (Uttara Phalguni",
    "start_date": "2030-12-17",
    "start_time_ist": "20:03",
    "end_date": "2030-12-18",
    "end_time_ist": "20:24",
    "state": "उदय (Rise)",
    "source_start": "08:03 पी एम, दिसम्बर 17",
    "source_end": "08:24 पी एम, दिसम्बर 18"
  },
  {
    "nak": "Hasta",
    "start_date": "2030-12-18",
    "start_time_ist": "20:24",
    "end_date": "2030-12-19",
    "end_time_ist": "20:02",
    "state": "उदय (Rise)",
    "source_start": "08:24 पी एम, दिसम्बर 18",
    "source_end": "08:02 पी एम, दिसम्बर 19"
  },
  {
    "nak": "Chitra",
    "start_date": "2030-12-19",
    "start_time_ist": "20:02",
    "end_date": "2030-12-20",
    "end_time_ist": "18:58",
    "state": "उदय (Rise)",
    "source_start": "08:02 पी एम, दिसम्बर 19",
    "source_end": "06:58 पी एम, दिसम्बर 20"
  },
  {
    "nak": "Swati",
    "start_date": "2030-12-20",
    "start_time_ist": "18:58",
    "end_date": "2030-12-21",
    "end_time_ist": "17:15",
    "state": "उदय (Rise)",
    "source_start": "06:58 पी एम, दिसम्बर 20",
    "source_end": "05:15 पी एम, दिसम्बर 21"
  },
  {
    "nak": "Vishakha",
    "start_date": "2030-12-21",
    "start_time_ist": "17:15",
    "end_date": "2030-12-22",
    "end_time_ist": "15:00",
    "state": "उदय (Rise)",
    "source_start": "05:15 पी एम, दिसम्बर 21",
    "source_end": "03:00 पी एम, दिसम्बर 22"
  },
  {
    "nak": "Anuradha",
    "start_date": "2030-12-22",
    "start_time_ist": "15:00",
    "end_date": "2030-12-23",
    "end_time_ist": "12:20",
    "state": "उदय (Rise)",
    "source_start": "03:00 पी एम, दिसम्बर 22",
    "source_end": "12:20 पी एम, दिसम्बर 23"
  },
  {
    "nak": "Jyeshtha",
    "start_date": "2030-12-23",
    "start_time_ist": "12:20",
    "end_date": "2030-12-24",
    "end_time_ist": "09:24",
    "state": "उदय (Rise)",
    "source_start": "12:20 पी एम, दिसम्बर 23",
    "source_end": "09:24 ए एम, दिसम्बर 24"
  },
  {
    "nak": "Mula",
    "start_date": "2030-12-24",
    "start_time_ist": "09:24",
    "end_date": "2030-12-25",
    "end_time_ist": "06:24",
    "state": "उदय (Rise)",
    "source_start": "09:24 ए एम, दिसम्बर 24",
    "source_end": "06:24 ए एम, दिसम्बर 25"
  },
  {
    "nak": "Purva Ashadha",
    "start_date": "2030-12-25",
    "start_time_ist": "06:24",
    "end_date": "2030-12-26",
    "end_time_ist": "03:29",
    "state": "उदय (Rise)",
    "source_start": "06:24 ए एम, दिसम्बर 25",
    "source_end": "03:29 ए एम, दिसम्बर 26"
  },
  {
    "nak": "Uttara Ashadha",
    "start_date": "2030-12-26",
    "start_time_ist": "03:29",
    "end_date": "2030-12-27",
    "end_time_ist": "00:51",
    "state": "उदय (Rise)",
    "source_start": "03:29 ए एम, दिसम्बर 26",
    "source_end": "12:51 ए एम, दिसम्बर 27"
  },
  {
    "nak": "Shravana",
    "start_date": "2030-12-27",
    "start_time_ist": "00:51",
    "end_date": "2030-12-27",
    "end_time_ist": "22:40",
    "state": "उदय (Rise)",
    "source_start": "12:51 ए एम, दिसम्बर 27",
    "source_end": "10:40 पी एम, दिसम्बर 27"
  },
  {
    "nak": "Dhanishta",
    "start_date": "2030-12-27",
    "start_time_ist": "22:40",
    "end_date": "2030-12-28",
    "end_time_ist": "21:06",
    "state": "उदय (Rise)",
    "source_start": "10:40 पी एम, दिसम्बर 27",
    "source_end": "09:06 पी एम, दिसम्बर 28"
  },
  {
    "nak": "Shatabhisha",
    "start_date": "2030-12-28",
    "start_time_ist": "21:06",
    "end_date": "2030-12-29",
    "end_time_ist": "20:16",
    "state": "उदय (Rise)",
    "source_start": "09:06 पी एम, दिसम्बर 28",
    "source_end": "08:16 पी एम, दिसम्बर 29"
  },
  {
    "nak": "पूर्वाभाद्रपद (Purva Bhadrapada",
    "start_date": "2030-12-29",
    "start_time_ist": "20:16",
    "end_date": "2030-12-30",
    "end_time_ist": "20:15",
    "state": "उदय (Rise)",
    "source_start": "08:16 पी एम, दिसम्बर 29",
    "source_end": "08:15 पी एम, दिसम्बर 30"
  },
  {
    "nak": "उत्तरभाद्रपद (Uttara Bhadrapada",
    "start_date": "2030-12-30",
    "start_time_ist": "20:15",
    "end_date": "2030-12-31",
    "end_time_ist": "21:04",
    "state": "उदय (Rise)",
    "source_start": "08:15 पी एम, दिसम्बर 30",
    "source_end": "09:04 पी एम, दिसम्बर 31"
  },
  {
    "nak": "Revati",
    "start_date": "2030-12-31",
    "start_time_ist": "21:04",
    "end_date": "2031-01-01",
    "end_time_ist": "22:39",
    "state": "उदय (Rise)",
    "source_start": "09:04 पी एम, दिसम्बर 31",
    "source_end": "10:39 पी एम, जनवरी 01"
  }
];

if (typeof module !== 'undefined' && module.exports) module.exports = JplMasterDatabase;
