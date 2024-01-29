import { setActivePinia, createPinia } from 'pinia'
import { describe, it, beforeEach, expect } from 'vitest'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counterStore = useCounterStore()
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('decrements', () => {
    const counterStore = useCounterStore()
    counterStore.decrement()
    expect(counterStore.count).toBe(-1)
  })
})
