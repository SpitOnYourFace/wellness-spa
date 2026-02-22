# Wellness-spa Full Redesign - Design Document

**Date:** 2026-02-22
**Status:** Approved

## Overview

Complete visual redesign from dark "Noir Luxe" theme to light elegant SPA theme, plus all features from IMPROVEMENTS.md, therapist/pressure selection, and backend fixes.

## Visual Theme

- **Style:** Light elegant SPA
- **Background:** Cream/beige (#FAFAF8)
- **Primary accent:** Sage green (#8BA888)
- **Secondary:** Lavender (#C8B8DB)
- **Accent:** Warm beige (#F5E6D3)
- **Fonts:** Playfair Display (headings) + Lato (body)
- **Effects:** Glassmorphism, soft shadows, smooth transitions

## Frontend Changes

### 1. Light Theme (style.css)
- Replace all dark tokens with light equivalents
- Update hero section to use config hero image with light overlay
- Glassmorphism service cards
- Branded scrollbar (sage green)
- Animated service icons on hover

### 2. Service Cards Enhancement
- Show service description text
- Glassmorphism glass effect with gradient borders
- Animated hover states

### 3. Booking Modal
- Therapist selection dropdown (from config.json)
- Massage pressure selection (from config.json)
- Progress indicator already exists - keep it

### 4. Toast Notifications
- Enhanced with icon types (success, error, info)

### 5. Admin Panel (admin-style.css)
- Already light theme - harmonize with new client-side colors

## Backend Changes

### 1. Database Schema
- Add `therapist` TEXT column to appointments
- Add `massage_pressure` TEXT column to appointments

### 2. Booking API (/api/book)
- Accept therapist and massagePressure fields
- Store in database

### 3. Chart Data Bug Fix
- Fix SQL: `bookings` -> `appointments` table name

### 4. Admin Schedule
- Use config.json work hours instead of hardcoded array

### 5. Admin Display
- Show therapist and massage pressure in admin tables

## Implementation Order

1. Backend fixes (DB schema, API, SQL bug)
2. Client CSS theme (dark -> light)
3. Client HTML (therapist/pressure fields, descriptions)
4. Client JS (new fields logic)
5. Admin updates (show new fields)
