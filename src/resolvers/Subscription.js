const newLink = {
  subscribe: (parent, args, ctx, info) => {
    // Not working
    // https://github.com/graphcool/prisma/issues/1734
    // return ctx.db.subscription.link(
    //   { where: { mutation_in: ['CREATED'] } },
    //   info,
    // )
    return ctx.db.subscription.link({}, info)
  },
}

const newVote = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.vote({}, info)
  },
}

module.exports = {
  newLink,
  newVote,
}
