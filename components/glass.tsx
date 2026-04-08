'use client';

import { forwardRef, ElementType, ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type GlassVariant = 'glass' | 'glass-card' | 'glass-pill' | 'glass-button';

interface GlassProps<T extends ElementType = 'div'> {
  as?: T;
  variant?: GlassVariant;
  hoverable?: boolean;
  glowBorder?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type PolymorphicProps<T extends ElementType> = GlassProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof GlassProps<T>>;

export const Glass = forwardRef(function Glass<T extends ElementType = 'div'>(
  {
    as,
    variant = 'glass',
    hoverable = false,
    glowBorder = false,
    className,
    children,
    ...props
  }: PolymorphicProps<T>,
  ref: React.Ref<Element>
) {
  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={cn(
        variant,
        hoverable && 'hoverable',
        glowBorder && 'glow-border',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType = 'div'>(
  props: PolymorphicProps<T> & { ref?: React.Ref<Element> }
) => React.ReactElement | null;

export const GlassCard = forwardRef(function GlassCard<T extends ElementType = 'div'>(
  {
    as,
    hoverable = true,
    className,
    children,
    ...props
  }: Omit<PolymorphicProps<T>, 'variant'>,
  ref: React.Ref<Element>
) {
  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={cn('glass-card', hoverable && 'hoverable', className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType = 'div'>(
  props: Omit<PolymorphicProps<T>, 'variant'> & { ref?: React.Ref<Element> }
) => React.ReactElement | null;

export const GlassPill = forwardRef(function GlassPill<T extends ElementType = 'span'>(
  {
    as,
    className,
    children,
    ...props
  }: Omit<PolymorphicProps<T>, 'variant' | 'hoverable'>,
  ref: React.Ref<Element>
) {
  const Component = as || 'span';

  return (
    <Component
      ref={ref}
      className={cn('glass-pill', className)}
      {...props}
    >
      {children}
    </Component>
  );
}) as <T extends ElementType = 'span'>(
  props: Omit<PolymorphicProps<T>, 'variant' | 'hoverable'> & { ref?: React.Ref<Element> }
) => React.ReactElement | null;
