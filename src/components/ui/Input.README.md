# Input Component

A versatile input component supporting multiple input types with labels, validation, and states. Implements Apple-inspired design with soft borders and smooth focus transitions.

## Requirements

Validates: Requirements 1.1, 1.2, 1.5, 8.1, 8.6, 9.5, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 17.6, 19.3

## Features

- **Multiple Input Types**: text, email, password, number, textarea
- **Label Support**: Clear labels with 8px spacing above input
- **Validation States**: Error messages with clear visual indicators
- **Accessibility**: ARIA labels, error associations, keyboard navigation
- **Responsive**: Full-width design that adapts to container
- **Smooth Transitions**: 200ms focus transitions with accent border
- **Disabled State**: Visual feedback for non-interactive inputs

## Usage

### Basic Text Input

```tsx
import { Input } from './components/ui/Input';

<Input
  type="text"
  label="Full Name"
  placeholder="Enter your full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Email Input with Validation

```tsx
<Input
  type="email"
  label="Email Address"
  placeholder="you@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={emailError}
  required
/>
```

### Password Input

```tsx
<Input
  type="password"
  label="Password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
```

### Number Input

```tsx
<Input
  type="number"
  label="Age"
  placeholder="Enter your age"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
```

### Textarea

```tsx
<Input
  type="textarea"
  label="Message"
  placeholder="Enter your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={6}
/>
```

### Disabled Input

```tsx
<Input
  type="text"
  label="Username"
  value="johndoe"
  disabled
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'textarea'` | `'text'` | Input type |
| `label` | `string` | - | Label text displayed above input (required) |
| `placeholder` | `string` | - | Placeholder text |
| `error` | `string` | - | Error message to display |
| `disabled` | `boolean` | `false` | Disabled state |
| `required` | `boolean` | `false` | Required field indicator |
| `value` | `string \| number` | - | Input value |
| `onChange` | `function` | - | Change handler |
| `onBlur` | `function` | - | Blur handler |
| `rows` | `number` | `4` | Number of rows for textarea |
| `className` | `string` | `''` | Additional CSS classes |

## Design Specifications

### Dimensions
- **Height**: 48px (h-12) for all input types except textarea
- **Padding**: 16px horizontal (px-4)
- **Border Radius**: 20px (rounded-xl)

### Borders
- **Width**: 1px
- **Opacity**: 15% on neutral colors
- **Focus**: 2px accent border with 200ms transition
- **Error**: Solid error color border

### Typography
- **Label**: 14px (text-sm), font-medium, 8px bottom margin
- **Input**: 15px (text-base), neutral-700 (light) / neutral-200 (dark)
- **Placeholder**: neutral-400
- **Error**: 14px (text-sm), error-500

### Colors
- **Background**: neutral-50 (light) / neutral-800 (dark)
- **Border**: neutral-200/15 (light) / neutral-700/15 (dark)
- **Focus Ring**: primary-500 with 20% opacity
- **Error Border**: error-500
- **Error Ring**: error-500 with 20% opacity

### States
- **Default**: Subtle border, neutral background
- **Focus**: Primary border, ring with 20% opacity
- **Error**: Error border, error ring, error message with icon
- **Disabled**: 50% opacity, cursor-not-allowed

## Accessibility

- **ARIA Labels**: All inputs have associated labels
- **Error Association**: Error messages linked via `aria-describedby`
- **Invalid State**: `aria-invalid` set when error exists
- **Required Indicator**: Visual asterisk for required fields
- **Keyboard Navigation**: Full keyboard support
- **Focus Indicators**: Clear focus ring for keyboard users

## Examples

See `Input.example.tsx` for comprehensive examples including:
- All input types
- Validation states
- Form layouts
- Responsive grids
- Error handling

## Testing

Run tests with:
```bash
npm test Input.test.tsx
```

Tests cover:
- All input types (text, email, password, number, textarea)
- Label rendering and association
- Height and dimension specifications
- Border radius and border styles
- Focus states and transitions
- Error states and messages
- Disabled and required states
- Placeholder text
- User interactions (onChange, onBlur)
- Accessibility attributes
- Custom props and ref forwarding
