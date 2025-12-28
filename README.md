# Import-Your-Code (Obsidian Plugin)

## Überblick

**Import-Your-Code** ist ein Obsidian-Plugin zur automatisierten Indexierung und Darstellung von Projektdateien innerhalb eines Vaults.
Es ist die **konzeptionelle und architektonische Weiterentwicklung** des ursprünglichen Skripts
[`obsidian-auto-import`](https://github.com/ElodinderBarde/obsidian-auto-import).

Während das Skript als **einmaliges, imperatives Hilfsmittel** gedacht war, verfolgt dieses Plugin einen **strukturierten, erweiterbaren und benutzerkonfigurierbaren Ansatz**.

---

## 1️⃣ IST-Zustand (aktueller Stand)

### Herkunft & Basis

Der aktuelle Stand bildet den **funktionalen Kern** des ursprünglichen Skripts ab:

* rekursive Dateierfassung
* Klassifikation nach Sprache / Ordner
* Markdown-basierter Output
* Wikilinks als kleinster gemeinsamer Nenner

Das ursprüngliche Skript diente dabei als **Referenz für das gewünschte Endlayout und Verhalten**, nicht als Code-Vorlage.

### Aktuelle Architektur

Das Plugin ist **modular aufgebaut** und trennt klar zwischen:

* **Traversal**
  Erfassen aller Dateien im Zielordner (rekursiv)

* **Classification**
  Zuordnung von Dateien zu Kategorien anhand von:

    * Root-Ordnern
    * Dateiendungen
    * konfigurierbaren Sprachprofilen

* **Rendering**
  Entscheidung *wie* eine Datei dargestellt wird (Link, Embed, Asset, Skip)

* **Output**
  Erzeugung strukturierter Markdown-Sections

### Zentrale Modelle

* `FileDescriptor`
  Repräsentiert jede Datei im Zielbereich (inkl. Pfad & Metadaten)

* `LanguageProfile`
  Definiert:

    * Projekt-/Sprachkontext
    * Root-Ordner
    * Regeln pro Dateityp

* `RenderRule`
  Einheitliche Darstellungsvorschrift über ein explizites Zustandsmodell:

  ```ts
  mode: "link" | "embed" | "asset" | "skip"
  ```

### Aktueller Funktionsumfang

✔ Alle Dateien werden erfasst
✔ Jede Datei ist **mindestens als Wikilink darstellbar**
✔ Klassifikation ist **regelbasiert und erweiterbar**
✔ Code kompiliert sauber
✔ Fundament für Mehrprojekt-Support ist gelegt

⚠ Noch nicht aktiv nutzbar im Obsidian-UI
⚠ Renderer bildet das alte Layout noch nicht vollständig nach
⚠ Settings-UI ist noch leer

---

## 2️⃣ SOLL-Zustand (Zielbild)

### Zielsetzung

Das Plugin soll **alles leisten, was das ursprüngliche Skript nicht konnte**, ohne dessen Einfachheit im Default-Fall zu verlieren.

Der **Base-Zustand** soll dem ursprünglichen Script entsprechen:

* Standard-Root: `Quellcode`
* automatische Indexierung
* sofort nutzbarer Markdown-Output

Darüber hinaus soll das Plugin **erweiterbar, personalisierbar und zukunftssicher** sein.

---

### Geplante Funktionen

#### 🔧 Konfiguration & Erweiterbarkeit

* Benutzer können:

    * neue Sprachen / Profile hinzufügen
    * Regeln pro Dateityp definieren
    * Darstellungsmodi anpassen
* Keine Hardcodierung von Sprachen oder Extensions
* Konfiguration über Plugin-Settings (persistiert im Vault)

#### 🧩 Mehrere Projekte

* Erkennung mehrerer Projektstrukturen innerhalb eines Vaults
* Separate Root-Ordner pro Projekt
* Saubere Trennung der Ausgabe

#### 📝 Rendering & Layout

* Nachbildung des ursprünglichen Skript-Layouts als Default
* Optionale Layout-Anpassungen:

    * Section-Titel
    * Gruppierungslogik
    * Darstellung pro Dateityp
* Vorbereitung für zukünftige Renderer (z. B. Tabellen, Codeblöcke)

#### 🔗 Vollständige Indexierung

* **ALLE Dateien werden indexiert**
* Auch nicht darstellbare Formate erscheinen:

    * als Wikilink
    * oder als Asset-Referenz
* Keine „stillen Auslassungen“

#### 🧠 Zukunftssicherheit

* Render-Modell ist explizit (`RenderMode`)
* Neue Modi können ergänzt werden, ohne bestehende Logik zu brechen
* Grundlage für:

    * Encoding-Sonderfälle
    * Assets
    * externe Ressourcen

---

## Abgrenzung zum ursprünglichen Skript

| Aspekt             | Skript       | Plugin       |
| ------------------ | ------------ | ------------ |
| Architektur        | monolithisch | modular      |
| Erweiterbarkeit    | nein         | ja           |
| User-Konfiguration | nein         | ja           |
| Mehrprojekte       | nein         | geplant      |
| Rendering          | fix          | regelbasiert |
| Wartbarkeit        | begrenzt     | hoch         |

---

## Fazit

Dieses Plugin ist **keine Kopie**, sondern eine **bewusste Evolution**:

> vom *einfachen Script*
> hin zu einem *sauberen, erweiterbaren Obsidian-Plugin*

Der aktuelle Stand stellt einen **stabilen Grundstein** dar, auf dem die weiteren Schritte – Renderer, Settings-UI, Default-Profile – **ohne Architekturbruch** umgesetzt werden können.

---

Wenn du willst, können wir als Nächstes gezielt eines dieser Themen angehen:

* **Renderer → exaktes Layout wie im alten Script**
* **DefaultLanguageProfiles (Quellcode, Markdown, Assets)**
* **Settings-Tab (User-Konfiguration)**
* **Mehrprojekt-Erkennung**

Sag einfach, womit wir weitermachen.
