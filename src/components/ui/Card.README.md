# Card Component

A versatile card component implementing Apple-inspired design principles with soft shadows, rounded corners, and smooth hover interactions. Supports multiple variants and padding sizes.

## Requirements

**Validates: Requirements 1.1, 1.2, 1.3, 1.6, 8.1, 8.6, 10.1, 10.2, 10.3, 10.4, 10.5, 10.7, 19.2**

- ✅ 1.1: Extreme whitespace with generous padding (16px-32px)
- ✅ 1.2: Soft, rounded corners (rounded-2xl = 24px)
- ✅ 1.3: Refined color palette with soft backgrounds
- ✅ 1.6: Subtle depth with soft shadows (max 8px blur, 20% opacity)
- ✅ 8.1: Hover scale transform (1.01) with 200ms duration
- ✅ 8.6: Natural easing functions (ease-out)
- ✅ 10.1: Soft cards with 16-24px border radius
- ✅ 10.2: Subtle shadows instead of borders for depth
- ✅ 10.3: Generous internal padding (minimum 24px)
- ✅ 10.4: Minimal borders (1px, 10% opacity)
- ✅ 10.5: Subtle background colors
- ✅ 10.7: Subtle shadow increase on hover
- ✅ 19.2: Reusable card component with consistent styling

## Features

### Variants

- **Default**: Solid white/dark background with subtle border and shadow-soft-md
- **Glass**: Translucent background (60% opacity) with backdrop-blur-xl effect
- **Elevated**: Solid background with stronger shadow-soft-lg for emphasis

### Padding Sizes

- **Small (sm)**: 16px padding (p-4)
- **Medium (md)**: 24px padding (p-6) - default
- **Large (lg)**: 32px padding (p-8)

### States

- **Hoverable**: Enable hover effects with scale 1.01 and shadow increase
- **Default**: No hover effects

### Props

```typescript
interface CardProps {
  variant?: 'default' | 'glass' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  children: ReactNode;
  className?: string;
  // ... all native div props
}
```

## Usage

### Basic Usage

```tsx
import { Card } from '@/components/ui';

<Card variant="default" padding="md">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

### Glass Variant

```tsx
<Card variant="glass" padding="lg">
  <h3>Glass Card</h3>
  <p>Translucent with backdrop blur</p>
</Card>
```

### Hoverable Card

```tsx
<Card variant="default" padding="md" hoverable>
  <h3>Interactive Card</h3>
  <p>Hover to see scale and shadow animation</p>
</Card>
```

### Different Padding Sizes

```tsx
<Card padding="sm">Compact card</Card>
<Card padding="md">Standard card</Card>
<Card padding="lg">Spacious card</Card>
```

### With Custom Content

```tsx
<Card variant="default" padding="lg" hoverable>
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary-500" />
    </div>
    <div className="flex-1">
      <h3 className="font-heading text-lg font-semibold mb-2">Title</h3>
      <p className="text-neutral-600 dark:text-neutral-400">Description</p>
    </div>
  </div>
</Card>
```

## Micro-Interactions

The Card component includes smooth micro-interactions when `hoverable` is enabled:

- **Hover**: Scale 1.01, shadow increase to shadow-soft-xl (200ms ease-out)
- **Transition**: All properties animated with 200ms duration

All animations respect the user's `prefers-reduced-motion` setting.

## Accessibility

- ✅ Semantic HTML (uses native div element)
- ✅ Supports all native div props (role, aria-label, etc.)
- ✅ Respects prefers-reduced-motion
- ✅ Keyboard accessible when interactive
- ✅ Proper cursor indication (pointer when hoverable)

## Design Tokens

The Card component uses design tokens from `tailwind.config.js`:

- **Colors**: `neutral-*` for backgrounds and borders
- **Spacing**: `p-4`, `p-6`, `p-8` (16px, 24px, 32px)
- **Border Radius**: `rounded-2xl` (24px)
- **Shadows**: `shadow-soft-md`, `shadow-soft-lg`, `shadow-soft-xl`
- **Borders**: `border-neutral-200/10`, `border-neutral-700/10` (1px, 10% opacity)
- **Transitions**: `duration-normal` (200ms), `ease-out`
- **Backdrop**: `backdrop-blur-xl` for glass variant

## Common Use Cases

### Metric Card

```tsx
<Card variant="default" padding="lg">
  <div className="flex items-start justify-between mb-4">
    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center">
      <TrendingUp className="w-6 h-6 text-primary-500" />
    </div>
    <Badge variant="success">+12%</Badge>
  </div>
  <h3 className="font-heading text-4xl font-semibold">2,847</h3>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Total Engagements</p>
</Card>
```

### Agent Status Card

```tsx
<Card variant="default" padding="lg" hoverable>
  <div className="flex items-start gap-4">
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-3xl">
      🤖
    </div>
    <div className="flex-1">
      <h3 className="font-heading text-lg font-semibold">Agent Name</h3>
      <p className="text-sm text-neutral-500">Current task description</p>
    </div>
  </div>
</Card>
```

### AI Insight Card

```tsx
<Card variant="glass" padding="lg" hoverable>
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
      <Sparkles className="w-5 h-5 text-primary-500" />
    </div>
    <div className="flex-1">
      <h3 className="font-heading text-lg font-semibold mb-2">Insight Title</h3>
      <p className="text-neutral-600 dark:text-neutral-400">Insight description</p>
    </div>
  </div>
</Card>
```

### Content Preview Card

```tsx
<Card variant="default" padding="md" hoverable>
  <div className="flex items-center justify-between mb-3">
    <Badge variant="primary">Platform</Badge>
    <Badge variant="warning">Status</Badge>
  </div>
  <div className="aspect-square rounded-xl mb-3 bg-gradient-to-br from-purple-500 to-pink-500 p-6">
    <p className="text-white text-center">Content preview</p>
  </div>
  <p className="text-sm text-neutral-600 dark:text-neutral-400">Content description</p>
</Card>
```

## Examples

See `Card.example.tsx` for comprehensive usage examples including:

- All variants (default, glass, elevated)
- All padding sizes (sm, md, lg)
- Hoverable states
- Real-world use cases (metrics, agent status, insights, content grids)

## Testing

Run tests with:

```bash
npm test
```

The test suite covers:
- All variants (default, glass, elevated)
- All padding sizes (sm, md, lg)
- Base styles (rounded corners, borders, transitions)
- Hoverable state (cursor-pointer class)
- Interactions (click, mouseEnter, mouseLeave handlers)
- Custom props (className, ref forwarding, native div props)
- Content rendering (children, nested content)

## Performance

- Uses CSS transforms for GPU acceleration
- Framer Motion for optimized animations
- No layout recalculations during interactions
- Maintains 60fps animation performance
- Efficient backdrop-blur for glass variant

## Design Guidelines

### When to Use Each Variant

- **Default**: Primary content containers, standard cards throughout the app
- **Glass**: Hero sections, overlays, AI insights, special emphasis areas
- **Elevated**: Modals, important notifications, featured content

### When to Use Each Padding Size

- **Small (sm)**: Dense layouts, compact information, mobile views
- **Medium (md)**: Standard cards, most use cases (default)
- **Large (lg)**: Hero sections, featured content, spacious layouts

### When to Enable Hoverable

- Enable for interactive cards (clickable, navigable)
- Disable for static content containers
- Use with onClick handlers for clear interaction feedback
