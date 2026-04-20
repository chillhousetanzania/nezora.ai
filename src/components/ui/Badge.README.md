# Badge Component

A compact badge component for displaying status, categories, or labels with semantic colors and reduced saturation backgrounds.

## Requirements

- **1.1**: Extreme whitespace with proper padding
- **1.4**: Refined color palette with semantic colors
- **11.3**: Semantic colors with reduced saturation
- **19.7**: Component library consistency

## Features

- **5 Variants**: default, success, warning, error, primary
- **2 Sizes**: sm (8px padding, 12px text), md (12px padding, 14px text)
- **Icon Support**: Optional icon element
- **Pill Shape**: Rounded-full border radius
- **Semantic Colors**: Reduced saturation backgrounds for visual comfort
- **Dark Mode**: Full dark mode support
- **Accessibility**: Proper ARIA support

## Usage

### Basic Usage

```tsx
import { Badge } from '@/components/ui/Badge';

// Default badge
<Badge>Default</Badge>

// With variant
<Badge variant="success">Success</Badge>

// With size
<Badge size="md" variant="primary">Primary</Badge>

// With icon
import { Check } from 'lucide-react';
<Badge variant="success" icon={<Check />}>Approved</Badge>
```

### Variants

```tsx
<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="primary">Primary</Badge>
```

### Sizes

```tsx
// Small: 8px padding (px-2 py-0.5), 12px text (text-xs)
<Badge size="sm">Small</Badge>

// Medium: 12px padding (px-3 py-1), 14px text (text-sm)
<Badge size="md">Medium</Badge>
```

### With Icons

```tsx
import { Check, AlertTriangle, X, Star } from 'lucide-react';

<Badge variant="success" icon={<Check />}>Approved</Badge>
<Badge variant="warning" icon={<AlertTriangle />}>Pending</Badge>
<Badge variant="error" icon={<X />}>Rejected</Badge>
<Badge variant="primary" icon={<Star />}>Featured</Badge>
```

### Real-world Examples

#### Status Indicators

```tsx
<Badge variant="success" size="sm">Online</Badge>
<Badge variant="warning" size="sm">Busy</Badge>
<Badge variant="error" size="sm">Offline</Badge>
```

#### Content Status

```tsx
<Badge variant="default">Draft</Badge>
<Badge variant="warning">Pending Review</Badge>
<Badge variant="success" icon={<Check />}>Approved</Badge>
<Badge variant="primary">Published</Badge>
```

#### Platform Tags

```tsx
<Badge variant="primary" size="sm">Instagram</Badge>
<Badge variant="primary" size="sm">Twitter</Badge>
<Badge variant="primary" size="sm">LinkedIn</Badge>
```

#### In Context (Card)

```tsx
<Card padding="md">
  <div className="flex items-start justify-between">
    <div>
      <h3>Social Media Post</h3>
      <p>Created by Maven • 2 hours ago</p>
    </div>
    <Badge variant="warning" size="sm">Pending</Badge>
  </div>
  
  <p>Check out our latest product launch! 🚀</p>
  
  <div className="flex gap-2">
    <Badge variant="primary" size="sm">Instagram</Badge>
    <Badge variant="default" size="sm">#product</Badge>
    <Badge variant="default" size="sm">#launch</Badge>
  </div>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'success' \| 'warning' \| 'error' \| 'primary'` | `'default'` | Visual style variant with semantic colors |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size (sm: 8px padding, md: 12px padding) |
| `icon` | `ReactNode` | `undefined` | Optional icon element |
| `children` | `ReactNode` | - | Badge content (required) |
| `className` | `string` | `''` | Additional CSS classes |
| `aria-label` | `string` | `undefined` | Accessibility label |
| `role` | `string` | `undefined` | ARIA role |

## Design Specifications

### Size Specifications

- **Small (sm)**:
  - Padding: 8px horizontal, 2px vertical (px-2 py-0.5)
  - Text: 12px (text-xs)
  - Icon: 12px (w-3 h-3)

- **Medium (md)**:
  - Padding: 12px horizontal, 4px vertical (px-3 py-1)
  - Text: 14px (text-sm)
  - Icon: 16px (w-4 h-4)

### Variant Specifications

All variants use semantic colors with reduced saturation backgrounds:

- **Default**: Neutral gray background
- **Success**: Green with 50% saturation background
- **Warning**: Amber with 50% saturation background
- **Error**: Red with 50% saturation background
- **Primary**: Purple with reduced saturation background

### Border Radius

- All badges use `rounded-full` for pill shape

## Accessibility

- Renders as semantic `<span>` element
- Supports `aria-label` for screen readers
- Supports custom `role` attribute
- High contrast text colors for readability
- Dark mode support with appropriate color adjustments

## Best Practices

1. **Use semantic variants**: Choose variants that match the meaning (success for positive, error for negative)
2. **Keep text short**: Badges are designed for brief labels (1-2 words)
3. **Use icons sparingly**: Icons work best for common statuses (check, warning, error)
4. **Group related badges**: Use consistent sizing when displaying multiple badges together
5. **Consider context**: Use smaller badges in compact layouts, larger in spacious designs

## Examples

See `Badge.example.tsx` for comprehensive examples including:
- All variants and sizes
- Icon usage
- Real-world status indicators
- Content status badges
- Platform tags
- Priority levels
- In-context usage with cards
