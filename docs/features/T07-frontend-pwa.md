# T7: Frontend & PWA

## Übersicht
React-basierte Webapp mit shadcn/ui + Tailwind CSS. PWA-ready für spätere App-Veröffentlichung. Responsive Design von Anfang an (Mobile-First).

## Tech-Stack
- **React** (mit TypeScript)
- **Tailwind CSS** für Styling
- **shadcn/ui** als Komponenten-Basis (Buttons, Dialogs, Tooltips, Tabs, Toasts etc.)
- **Vite** als Build-Tool

## Design-Prinzipien
- **Dunkles Theme** (Metin2-Feeling)
- **Mobile-First**: Touch-optimiert, responsive
- **Game-UI**: Custom-Komponenten für HP-Balken, Inventar-Grid, Kampf-Log etc.
- **Keine Hover-only Interaktionen** (muss auf Touch funktionieren)
- **Performant**: Viele Live-Updates durch Tick-Events effizient rendern

## PWA-Anforderungen
- PWA Manifest (installierbar auf Homescreen)
- Service Worker (Grundlage für Offline/Caching)
- Responsive Meta-Tags
- App-Icons in verschiedenen Größen
- Push-Notification fähig (WebPush API)

## Spätere App-Optionen
- **PWA → Play Store** via TWA/PWABuilder
- **Capacitor** für native Shell (iOS + Android) falls nötig
- Backend-API bleibt identisch (API-First)

## Vorgemerkt (bei Bedarf in Implementierung)
- Framer Motion (Animationen)
- dnd-kit oder React DnD (Drag & Drop für Inventar/Equipment)

## API-First
- Frontend kommuniziert ausschließlich über REST + WebSocket mit Backend
- Kein direkter DB-Zugriff
- Frontend ist austauschbar (React Native etc. könnte gleiche API nutzen)

## Festgelegt
- **React + TypeScript + Vite**
- **Tailwind CSS + shadcn/ui**
- **Dunkles Theme**
- **PWA-ready von Anfang an**
- **Mobile-First / Responsive**

## Offene Punkte
- [ ] Farbschema / Theme definieren (Metin2-inspiriert)
- [ ] Game-spezifische Komponenten designen (HP-Balken, Inventar etc.)
- [ ] PWA Icons und Splash Screens
- [ ] Routing-Struktur (Seiten/Views)
