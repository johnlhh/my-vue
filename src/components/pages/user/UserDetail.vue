<template>

  <div>
    <template v-if="detail">
      <div>
        <div>
          id: {{detail.id}}
        </div>
        <div>
          name: {{detail.name}}
        </div>
      </div>
    </template>
  </div>


</template>

<script>
  import {getUserDetail} from '@/api/users'

  export default {
    data() {
      return {
        detail: null,
        listLoading: true
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        getUserDetail(this.$route.query).then(data => {
          this.detail = data
          console.log(data)
          this.listLoading = false
        })
      }
    }
  }
</script>
