import cookie from "js-cookie"
import Router from "next/router"
import { CommentText } from "semantic-ui-react"

export function handleLogin(token) {
  cookie.set("token", token)
  Router.push("/account")
}

export function redirectUser(ctx, location){
  if(ctx.req){
    ctx.res.writeHead(302, {Location: location})
    ctx.res.end()
  } else {
    Router.push(location)
  }
}