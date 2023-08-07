import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const counter = ref(0)

    const increase = () => {
      counter.value += 1
    }

    const decrease = () => {
      counter.value -= 1
    }

    return () => (
      <div>
        <h1>home page</h1>
        <button style={{ width: '200px' }} onClick={increase}>+</button>
        <button style={{ width: '200px' }} onClick={decrease}>-</button>
        <h2>{counter.value}</h2>
        <router-link to={{ name: 'detail-page', params: { id: '10' } }}>on detail page</router-link>
      </div>
    )
  },
})
