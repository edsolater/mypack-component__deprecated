// /**
//  * @deprecated
//  */
// export const getSlotName = (classNames, slotName = '') =>
//   classNames[slotName] || classNames[`Slot_${slotName}`]
/**
 *
 * @param {ReactNode} reactNode
 * @return {ReactNode[]}
 */
const arrayChildNodes = reactNode => [reactNode].flat()
