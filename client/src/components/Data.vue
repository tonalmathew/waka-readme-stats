<template>
  <div class="data">
    <!-- <p>{{ User.data.languages }}</p> -->
    <table>
        <tr class="name-and-percent" v-for="lang in User">
          <td>{{ lang.name }}</td>
          <td>({{ lang.text }})</td>
          <td style="width: 50%;">
            <div class= "progress">
              <div
                class="bar text-center top"
                style="margin: 0; color: white;"
                :style= "{width: lang.percent + '%', 'backgroundColor': '#16ce40'}"
              >
              </div>
              </div>
          </td>
          <td>({{ lang.percent }} %)</td>
        </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Data',
  data () {
    return {
      User: []
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    // const link = `http://${process.env.PORT}/status`
    axios.get('http://localhost:8081/status/')
      .then((response) => {
        console.log(response.data.data.languages)
        this.User = response.data.data.languages
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-and-percent {
    font-family: 'Roboto Mono', monospace;
}

.progress {
    margin:5px 0!important;
    padding:0;
    width:100%;
    height:20px;
    overflow:hidden;
    background:#e5e5e5;
    border-radius:20px;
  }

  .bar {
    padding: 0;
    margin: 5px 0;
    position:relative;
    float:left;
    min-width:1%;
    height:100%;
  }

</style>
