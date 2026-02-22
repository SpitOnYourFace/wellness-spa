# Wellness-spa Full Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform wellness-spa from dark Noir Luxe theme to light elegant SPA theme, add therapist/pressure selection, fix backend bugs, and implement all IMPROVEMENTS.md features.

**Architecture:** Vanilla HTML/CSS/JS frontend with Node.js/Express/SQLite backend. Config-driven via config.json. Changes span CSS theme tokens, HTML form fields, JS logic, and Express API routes with SQLite schema updates.

**Tech Stack:** HTML5, CSS3 (custom properties), Vanilla JS, Node.js, Express, SQLite3, Chart.js, AOS, Font Awesome

---

## Task 1: Fix Backend Chart SQL Bug
- File: server.js line 724
- Change table name from `bookings` to `appointments`

## Task 2: Add DB Columns for Therapist & Massage Pressure
- File: server.js - CREATE TABLE and migrations
- Add `therapist TEXT` and `massagePressure TEXT` columns

## Task 3: Update Booking API to Accept New Fields
- File: server.js /api/book endpoint
- Accept, validate, and store therapist + massagePressure

## Task 4: Sync Admin Schedule Hours with Config
- File: admin.html - replace hardcoded WORK_HOURS with config fetch

## Task 5: Light Theme CSS - Full client page redesign
- File: style.css - replace all dark tokens with light SPA theme
- Glassmorphism cards, updated buttons, modals, forms

## Task 6: Update Google Fonts
- File: index.html - Playfair Display + Lato

## Task 7: Add Therapist & Pressure Selection to Booking Form
- File: index.html - add select elements, populate from config

## Task 8: Add Service Descriptions to Cards
- File: index.html + style.css

## Task 9: Update Admin to Show Therapist & Pressure
- File: admin.html - add info in table rows and schedule view

## Task 10: Update Hero Background for Light Theme
- File: index.html - light overlay on hero image

## Task 11: Enhanced Toast Notifications
- File: index.html + style.css

## Task 12: Animated Service Icons (verify)
- File: style.css

## Task 13: Admin Panel Color Consistency
- File: admin-style.css

## Task 14: Update Inline Styles for Light Theme
- File: index.html inline style block

## Task 15: Final Verification and Cleanup
