---
title: "Contrails - 3D Flight Visualization Map"
description: "A 3D flight visualization map that plots historical flight paths from FlightRadar24 CSV exports as extruded, altitude-accurate tracks over an interactive globe."
startDate: 2026-06-28
endDate: 2026-07-30
status: "completed"
technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "deck.gl", "MapLibre GL JS", "Neon", "NextAuth.js", "PapaParse", "Vercel"]
categories: ["Aviation", "Entertainment"]
featured: false
draft: false
liveUrl: "https://contrails.danglorioso.com"
githubUrl: "https://github.com/danglorioso/contrails"
favicon: "contrails.ico"
priority: 6
---

## Project Overview

Contrails turns raw ADS-B flight logs into an interactive 3D map. Instead of a flat 2D track, each flight is rendered as an extruded path in three-dimensional space — altitude becomes height, so climbs, descents, and holding patterns are visible at a glance rather than buried in a data table.

## Data Pipeline

- **CSV ingestion** from FlightRadar24's exportable flight history format, the same data produced by ADS-B receivers like my own Raspberry Pi setup
- **Track cleaning** to filter out incomplete or low-confidence position reports before rendering
- **Coordinate + altitude normalization** converting raw lat/lon/altitude rows into a continuous 3D flight path

## 3D Visualization

- **Altitude-accurate extrusion** so climb and descent profiles are visible directly on the map, not just in a side panel
- **Free-form camera controls** for orbiting, tilting, and zooming around individual flights or entire sessions
- **Multi-flight overlay** for comparing several flights — or an entire day of captured traffic — on the same globe

## Technical Approach

The frontend is built with Next.js and React, rendering flight trails through deck.gl's WebGL-powered `PathLayer` over a MapLibre GL basemap. Flight data is ingested via PapaParse from FlightRadar24 CSV exports and persisted to a serverless Postgres database on Neon, with NextAuth.js gating the admin panel used to manage uploads.

## Future Development

Planned additions include animated playback of flights along their tracks, side-by-side comparison of multiple sessions, and support for live-streaming positions directly from a receiver rather than exported CSVs.
