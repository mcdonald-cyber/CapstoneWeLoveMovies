



function getCritics(critic_id){
    return knex("critics")
    .select("*")
    .where({ critic_id })
    .first()
}
async function waitForCritics(reviewObject){
    const critic = await getCritics(reviewObject.critic_id)
    const combined = {...reviewObject, critic}
    return combined;
}
function readReviewCritics(review_id) {
    return knex(tableName)
    .select("*")
    .where({ review_id })
    .first()
    .then((data)=> waitForCritics(data))
}