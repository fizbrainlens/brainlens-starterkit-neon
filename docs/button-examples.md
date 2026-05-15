# Base UI Button - Contoh Penggunaan

## Migrasi dari shadcn/radix-ui ke Base UI

### Perubahan Utama

| Sebelum (shadcn/radix) | Sesudah (Base UI) |
|------------------------|-------------------|
| `asChild={true}` | `render={<CustomElement />}` |
| `Slot` dari `radix-ui` | `render` prop dari Base UI |
| CVA untuk variants | Manual function + `cn()` |

---

## Contoh Penggunaan

### 1. Button Dasar

```tsx
import { Button } from "@/components/ui/button";

// Button default
<Button>Click me</Button>

// Dengan variant
<Button variant="outline">Outline Button</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost Button</Button>

// Dengan size
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔔</Button>
```

### 2. Render sebagai Link (Next.js)

**Sebelum (dengan asChild):**
```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

**Sesudah (dengan render prop):**
```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button 
  render={<Link href="/dashboard" />} 
  nativeButton={false}
>
  Go to Dashboard
</Button>
```

### 3. Render sebagai Custom Component

```tsx
import { Button } from "@/components/ui/button";

// Custom button component
const CustomButton = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`custom-class ${className}`} {...props} />
);

// Gunakan dengan render prop
<Button 
  render={<CustomButton />} 
  nativeButton={false}
>
  Custom Styled Button
</Button>
```

### 4. Render sebagai Element Lain (div, span, dll)

```tsx
import { Button } from "@/components/ui/button";

// Render sebagai div
<Button 
  render={<div />} 
  nativeButton={false}
  className="cursor-pointer"
>
  Div Button
</Button>

// Render sebagai span
<Button 
  render={<span />} 
  nativeButton={false}
>
  Span Button
</Button>
```

### 5. Loading State dengan focusableWhenDisabled

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

function SaveButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      disabled={loading}
      focusableWhenDisabled
      onClick={async () => {
        setLoading(true);
        await saveData();
        setLoading(false);
      }}
    >
      {loading ? "Saving..." : "Save"}
    </Button>
  );
}
```

### 6. Semua Variants

```tsx
import { Button } from "@/components/ui/button";

<div className="space-y-2">
  <Button variant="default">Default</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="link">Link</Button>
</div>
```

### 7. Semua Sizes

```tsx
import { Button } from "@/components/ui/button";

<div className="space-x-2">
  <Button size="xs">XS</Button>
  <Button size="sm">SM</Button>
  <Button size="default">Default</Button>
  <Button size="lg">LG</Button>
  <Button size="icon-xs">🔔</Button>
  <Button size="icon-sm">🔔</Button>
  <Button size="icon">🔔</Button>
  <Button size="icon-lg">🔔</Button>
</div>
```

### 8. className Function (Base UI Feature)

```tsx
import { Button } from "@/components/ui/button";

// className sebagai function untuk styling berdasarkan state
<Button
  className={(state) =>
    state.disabled
      ? "opacity-50 cursor-not-allowed"
      : "hover:bg-primary/80"
  }
>
  State-based Styling
</Button>
```

---

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"default"` | Visual variant style |
| `size` | `"default" \| "xs" \| "sm" \| "lg" \| "icon" \| "icon-xs" \| "icon-sm" \| "icon-lg"` | `"default"` | Size variant |
| `render` | `ReactElement \| ((props, state) => ReactElement)` | - | Custom element untuk render |
| `nativeButton` | `boolean` | `true` | Apakah render sebagai native `<button>` |
| `focusableWhenDisabled` | `boolean` | `false` | Apakah button tetap focusable saat disabled |
| `className` | `string \| ((state) => string)` | - | CSS classes |
| `disabled` | `boolean` | `false` | Disable button |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Button type |

---

## Data Attributes

Button akan expose data attributes berikut untuk styling:

- `data-slot="button"` - Identifier slot
- `data-variant="{variant}"` - Variant saat ini
- `data-size="{size}"` - Size saat ini
- `data-disabled` - Present saat button disabled

Contoh styling dengan data attributes:

```css
button[data-variant="destructive"] {
  @apply bg-red-500;
}

button[data-size="lg"] {
  @apply text-lg;
}

button[data-disabled] {
  @apply opacity-50 cursor-not-allowed;
}
```
