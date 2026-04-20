# Button Component

A versatile button component implementing Apple-inspired design principles with smooth micro-interactions, multiple variants, sizes, and states.

## Requirements

**Validates: Requirements 1.1, 1.2, 1.3, 1.5, 1.6, 8.1, 8.2, 8.6, 13.1, 13.2, 19.1**

- ✅ 1.1: Extreme whitespace with generous padding
- ✅ 1.2: Soft, rounded corners (rounded-xl = 20px)
- ✅ 1.3: Refined color palette with soft grays and subtle accents
- ✅ 1.5: Clean typography with font-medium weight
- ✅ 1.6: Subtle depth with soft shadows
- ✅ 8.1: Hover scale transform (1.02) with 200ms duration
- ✅ 8.2: Active scale transform (0.98) with 100ms duration
- ✅ 8.6: Natural easing functions (ease-out)
- ✅ 13.1: Minimum 48px height for medium size
- ✅ 13.2: Clear focus states with 2px ring
- ✅ 19.1: Reusable component with consistent styling

## Features

### Variants

- **Primary**: Gradient background (primary → secondary), white text, glow on hover
- **Secondary**: Neutral background, primary text, subtle shadow
- **Ghost**: Transparent background, primary text, background on hover
- **Danger**: Error color background, white text

### Sizes

- **Small (sm)**: 40px height, 16px horizontal padding
- **Medium (md)**: 48px height, 24px horizontal padding (default)
- **Large (lg)**: 56px height, 32px horizontal padding

### States

- **Disabled**: 50% opacity, cursor not allowed
- **Loading**: Spinner animation, button disabled
- **Focus**: 2px ring with primary color

### Props

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  // ... all native button props
}
```

## Usage

### Basic Usage

```tsx
import { Button } from '@/components/ui';

<Button variant="primary">Click me</Button>
```

### With Icon

```tsx
import { Heart } from 'lucide-react';

<Button variant="primary" icon={<Heart />}>
  Like
</Button>

<Button variant="secondary" icon={<Download />} iconPosition="right">
  Download
</Button>
```

### Loading State

```tsx
<Button variant="primary" loading>
  Processing...
</Button>
```

### Full Width

```tsx
<Button variant="primary" fullWidth>
  Submit Form
</Button>
```

### Different Sizes

```tsx
<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="md">Medium</Button>
<Button variant="primary" size="lg">Large</Button>
```

## Micro-Interactions

The Button component includes smooth micro-interactions:

- **Hover**: Scale 1.02, shadow increase (200ms ease-out)
- **Active**: Scale 0.98 (100ms ease-out)
- **Focus**: 2px ring with primary color
- **Loading**: Spinner replaces icon, button disabled

All animations respect the user's `prefers-reduced-motion` setting.

## Accessibility

- ✅ Keyboard accessible with visible focus indicators
- ✅ Proper disabled state handling
- ✅ ARIA-compliant (uses native button element)
- ✅ Respects prefers-reduced-motion
- ✅ Minimum 44px touch target on mobile

## Design Tokens

The Button component uses design tokens from `tailwind.config.js`:

- **Colors**: `primary-500`, `secondary-500`, `neutral-*`, `error-500`
- **Spacing**: `px-4`, `px-6`, `px-8` (16px, 24px, 32px)
- **Border Radius**: `rounded-xl` (20px)
- **Shadows**: `shadow-soft-sm`, `shadow-glow-primary`
- **Transitions**: `duration-normal` (200ms), `ease-out`

## Examples

See `Button.example.tsx` for comprehensive usage examples including:

- All variants and sizes
- Icon combinations
- Loading and disabled states
- Full width buttons
- Real-world use cases (approval flows, forms, cards)

## Testing

Run tests with:

```bash
npm test
```

The test suite covers:
- All variants (primary, secondary, ghost, danger)
- All sizes (sm, md, lg)
- All states (disabled, loading)
- Icon positioning (left, right)
- Layout options (inline, full width)
- Base styles (rounded corners, font weight, transitions, focus states)
- Interactions (click handlers, disabled behavior)
- Custom props (className, ref forwarding, native button props)

## Performance

- Uses CSS transforms for GPU acceleration
- Framer Motion for optimized animations
- No layout recalculations during interactions
- Maintains 60fps animation performance
