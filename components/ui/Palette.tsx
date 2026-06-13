import React from "react";

type Swatch = {
  name: string;
  colorClass: string;
  textClass?: string;
};

const sections: { title: string; swatches: Swatch[] }[] = [
  {
    title: "Core",
    swatches: [
      { name: "background (#F4F4F2)", colorClass: "bg-background", textClass: "text-foreground" },
      { name: "foreground (#004F45)", colorClass: "bg-foreground", textClass: "text-background" },
      { name: "border (#D7DDD8)", colorClass: "bg-border", textClass: "text-foreground" },
      { name: "input (#FFFFFF)", colorClass: "bg-input", textClass: "text-foreground" },
      { name: "ring (#2D9C8F)", colorClass: "bg-ring", textClass: "text-background" },
    ],
  },
  {
    title: "Surface",
    swatches: [
      { name: "card", colorClass: "bg-card", textClass: "text-card-foreground" },
      { name: "card-foreground", colorClass: "bg-card-foreground", textClass: "text-card" },
      { name: "popover", colorClass: "bg-popover", textClass: "text-popover-foreground" },
      { name: "popover-foreground", colorClass: "bg-popover-foreground", textClass: "text-popover" },
    ],
  },
  {
    title: "Semantic",
    swatches: [
      { name: "primary (#004F45)", colorClass: "bg-primary", textClass: "text-primary-foreground" },
      { name: "primary-foreground", colorClass: "bg-primary-foreground", textClass: "text-primary" },

      { name: "secondary (#2D9C8F)", colorClass: "bg-secondary", textClass: "text-secondary-foreground" },
      { name: "secondary-foreground", colorClass: "bg-secondary-foreground", textClass: "text-secondary" },

      { name: "muted (#A7D6D0)", colorClass: "bg-muted", textClass: "text-muted-foreground" },
      { name: "muted-foreground", colorClass: "bg-muted-foreground", textClass: "text-muted" },

      { name: "accent (#C9E5E1)", colorClass: "bg-accent", textClass: "text-accent-foreground" },
      { name: "accent-foreground", colorClass: "bg-accent-foreground", textClass: "text-accent" },

      { name: "destructive", colorClass: "bg-destructive", textClass: "text-background" },
    ],
  },
  {
    title: "Charts",
    swatches: [
      { name: "chart-1 (#004F45)", colorClass: "bg-chart-1", textClass: "text-background" },
      { name: "chart-2 (#2D9C8F)", colorClass: "bg-chart-2", textClass: "text-background" },
      { name: "chart-3 (#A7D6D0)", colorClass: "bg-chart-3", textClass: "text-foreground" },
      { name: "chart-4 (#5F6663)", colorClass: "bg-chart-4", textClass: "text-background" },
      { name: "chart-5 (#E7ECE8)", colorClass: "bg-chart-5", textClass: "text-foreground" },
    ],
  },
  {
    title: "Sidebar",
    swatches: [
      { name: "sidebar", colorClass: "bg-sidebar", textClass: "text-sidebar-foreground" },
      { name: "sidebar-foreground", colorClass: "bg-sidebar-foreground", textClass: "text-sidebar" },

      { name: "sidebar-primary", colorClass: "bg-sidebar-primary", textClass: "text-sidebar-primary-foreground" },

      {
        name: "sidebar-primary-foreground",
        colorClass: "bg-sidebar-primary-foreground",
        textClass: "text-sidebar-primary",
      },

      { name: "sidebar-accent", colorClass: "bg-sidebar-accent", textClass: "text-sidebar-accent-foreground" },

      {
        name: "sidebar-accent-foreground",
        colorClass: "bg-sidebar-accent-foreground",
        textClass: "text-sidebar-accent",
      },

      { name: "sidebar-border", colorClass: "bg-sidebar-border", textClass: "text-sidebar-foreground" },
      { name: "sidebar-ring", colorClass: "bg-sidebar-ring", textClass: "text-sidebar-primary-foreground" },
    ],
  },
];

const Palette = () => {
  return (
    <section className="space-y-6">
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
            {section.title}
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {section.swatches.map((swatch) => (
              <div
                key={swatch.name}
                className={`rounded-lg border border-border p-3 shadow-sm ${swatch.colorClass} ${swatch.textClass ?? "text-foreground"}`}
              >
                <p className="text-xs font-semibold">--{swatch.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Palette;
