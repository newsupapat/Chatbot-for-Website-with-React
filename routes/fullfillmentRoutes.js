const { WebhookClient } = require('dialogflow-fulfillment')

const mongoose = require('mongoose')
const Demand = mongoose.model('demand')
const Coupon = mongoose.model('coupon')
module.exports = app => {
  app.post('/', async (req, res) => {
    const agent = new WebhookClient({ request: req, response: res })

    function fallback (agent) {
      agent.add('New เองงงงงงง')
    }
    function New (agent) {
      agent.add('New เองงงงงงง')
    }
    async function learn (agent) {
      console.log(agent.parameters)
      Demand.findOne({ course: agent.parameters.course }, function (
        err,
        course
      ) {
        console.log(course)
        if (course !== null) {
          course.counter++
          course.save()
        } else {
          const demand = new Demand({ course: agent.parameters.course })
          demand.save()
        }
      })
      let responseText = `You want to learn about ${agent.parameters.course}
        Here is a link all my course google`
      let coupon = await Coupon.findOne({ course: agent.parameters.course })
      if (coupon !== null) {
        responseText = `You want to learn about ${agent.parameters.course}
        Here is a link ${coupon.link}`
      }
      agent.add(responseText)
    }
    let intentMap = new Map()

    intentMap.set('New', New)
    intentMap.set('Default Fallback Intent', fallback)
    intentMap.set('learn courses', learn)

    agent.handleRequest(intentMap)
  })
}
