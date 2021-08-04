import '../styles/main.scss'
import Vue from 'vue'
import axios from 'axios'

const app = new Vue({
  el: '#app',
  data: {
    jobs: {}
  },
  async created () {
    await this.fetchData()
  },
  methods: {
    async fetchData () {
      const response = await axios.get('./src/data/jobs.json')
      this.jobs = { ...response.data }
    },
    getJobs (group) {
      return this.jobs[group]
    },
    recurring (array) {
      return array.length
    }
  },
  filters: {
    jobTitle (object) {
      return Object.keys(object)[0]
    },
    jobLocation (object) {
      return Object.values(object)[0]
    }
  }
})
