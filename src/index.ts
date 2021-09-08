/**
 * Super duper simple logger
 * @param msg - A string to or object to log
 * @param color - Any CSS color value ( named | hex | rgb | hsl )
 * @param bgColor - Same as {@link color} ⇧
 * @param cs - Optional additional CSS
 * @param fontSize - Any number
 * @returns {void}
 */
export const log = (
  msg: string | any, // .
  color = "lightblue",
  fontSize = 15,
  bgColor = "transparent"
): void => {
  if (process?.env?.NODE_ENV && process?.env?.NODE_ENV != "development") return

  if (typeof msg == "string")
    return void console.log(
      `%c${msg}`,
      `size:${fontSize}px;color:${color};background: ${bgColor};border:1px solid ${color};padding:5px;`
    )

  console.log(msg)
}
