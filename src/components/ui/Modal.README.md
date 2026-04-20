# Modal Component

A flexible modal dialog component with backdrop blur, smooth animations, and multiple sizes. Implements Apple-inspired design with generous padding and soft shadows.

## Requirements

Implements requirements: 1.1, 1.2, 1.6, 8.3, 8.6, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 19.4

## Features

- **Multiple Sizes**: sm (448px), md (512px), lg (672px), xl (896px), full (1280px)
- **Backdrop Blur**: 8px blur with 80% opacity for depth
- **Smooth Animations**: Scale (0.95 to 1.0) and fade (0 to 1) over 300ms
- **Close Options**: Close button, backdrop click, and Escape key
- **Accessibility**: Full ARIA support and keyboard navigation
- **Body Scroll Lock**: Prevents background scrolling when modal is open
- **Generous Padding**: 32px internal padding for comfortable content spacing
- **48px Touch Target**: Close button meets minimum touch target size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls modal visibility |
| `onClose` | `() => void` | - | Callback when modal should close |
| `title` | `string` | - | Modal title |
| `description` | `string` | - | Optional description below title |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Modal size |
| `closeOnBackdrop` | `boolean` | `true` | Allow closing by clicking backdrop |
| `closeOnEscape` | `boolean` | `true` | Allow closing with Escape key |
| `children` | `ReactNode` | - | Modal content |
| `className` | `string` | `''` | Additional CSS classes for modal content |

## Usage

### Basic Modal

```tsx
import { Modal, Button } from '@/components/ui';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        description="Optional description"
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Size Variants

```tsx
// Small modal (448px)
<Modal size="sm" isOpen={isOpen} onClose={onClose} title="Small Modal">
  <p>Content</p>
</Modal>

// Medium modal (512px) - default
<Modal size="md" isOpen={isOpen} onClose={onClose} title="Medium Modal">
  <p>Content</p>
</Modal>

// Large modal (672px)
<Modal size="lg" isOpen={isOpen} onClose={onClose} title="Large Modal">
  <p>Content</p>
</Modal>

// Extra large modal (896px)
<Modal size="xl" isOpen={isOpen} onClose={onClose} title="XL Modal">
  <p>Content</p>
</Modal>

// Full width modal (1280px)
<Modal size="full" isOpen={isOpen} onClose={onClose} title="Full Modal">
  <p>Content</p>
</Modal>
```

### Form Modal

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Create New Item"
  description="Fill out the form below"
  size="md"
>
  <form onSubmit={handleSubmit}>
    <Input label="Name" value={name} onChange={setName} />
    <Input label="Email" type="email" value={email} onChange={setEmail} />
    
    <div className="flex gap-3 pt-4">
      <Button type="submit" variant="primary" fullWidth>
        Create
      </Button>
      <Button type="button" variant="ghost" onClick={onClose}>
        Cancel
      </Button>
    </div>
  </form>
</Modal>
```

### Confirmation Modal

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Confirm Deletion"
  description="Are you sure? This action cannot be undone."
  size="sm"
>
  <div className="flex gap-3 pt-4">
    <Button variant="danger" fullWidth onClick={handleDelete}>
      Delete
    </Button>
    <Button variant="ghost" onClick={onClose}>
      Cancel
    </Button>
  </div>
</Modal>
```

### Disable Close Options

```tsx
// Prevent closing on backdrop click
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Important"
  closeOnBackdrop={false}
>
  <p>You must use the close button</p>
</Modal>

// Prevent closing with Escape key
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Important"
  closeOnEscape={false}
>
  <p>You must use the close button</p>
</Modal>
```

### Long Content with Scroll

```tsx
<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Terms and Conditions"
  size="lg"
>
  <div className="max-h-96 overflow-y-auto space-y-4">
    {/* Long content */}
    <p>Lorem ipsum...</p>
    <p>Lorem ipsum...</p>
    {/* ... */}
  </div>
  
  <div className="flex gap-3 pt-4 sticky bottom-0 bg-white dark:bg-neutral-800">
    <Button variant="primary" fullWidth onClick={onClose}>
      Accept
    </Button>
  </div>
</Modal>
```

## Design Specifications

### Sizes

- **sm**: `max-w-md` (448px)
- **md**: `max-w-lg` (512px) - default
- **lg**: `max-w-2xl` (672px)
- **xl**: `max-w-4xl` (896px)
- **full**: `max-w-7xl` (1280px)

### Styling

- **Border Radius**: `rounded-2xl` (24px)
- **Padding**: `p-8` (32px)
- **Shadow**: `shadow-soft-xl`
- **Backdrop**: `bg-neutral-900/80 backdrop-blur-sm` (80% opacity, 8px blur)

### Animations

- **Open**: Fade in (0 to 1 opacity) + scale up (0.95 to 1.0) over 300ms
- **Close**: Fade out (1 to 0 opacity) + scale down (1.0 to 0.95) over 300ms
- **Easing**: `cubic-bezier(0, 0, 0.2, 1)` (ease-out)

### Close Button

- **Size**: 48px × 48px (w-12 h-12)
- **Position**: Top-right corner
- **Border Radius**: `rounded-xl` (20px)
- **Hover**: Background color change
- **Focus**: Ring with primary color

## Accessibility

- **ARIA Attributes**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`
- **Keyboard Navigation**: Escape key to close (when enabled)
- **Focus Management**: Close button is keyboard accessible
- **Screen Readers**: Proper labeling for all interactive elements
- **Body Scroll Lock**: Prevents background scrolling when modal is open

## Best Practices

1. **Always provide a title**: Required for accessibility
2. **Use appropriate size**: Choose size based on content amount
3. **Provide clear actions**: Include confirm/cancel buttons
4. **Handle close properly**: Always implement onClose callback
5. **Consider mobile**: Test on small screens
6. **Avoid nested modals**: Don't open modals from within modals
7. **Keep content focused**: Modals should have a single purpose
8. **Use descriptions**: Add context with the description prop

## Examples

See `Modal.example.tsx` for comprehensive examples including:
- Basic modal
- All size variants
- Form modal
- Confirmation modal
- Long content with scroll
- Custom close behavior
