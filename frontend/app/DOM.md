# front-end
    Document Object Model (DOM)
    │
    ├── Document
    │   ├── Methods
    │   │   ├── getElementById(id)
    │   │   ├── getElementsByClassName(className)
    │   │   ├── getElementsByTagName(tagName)
    │   │   ├── querySelector(selector)
    │   │   ├── querySelectorAll(selector)
    │   │   ├── createElement(tagName)
    │   │   ├── createTextNode(data)
    │   │   ├── getElementById(id)
    │   │   └── getElementsByName(name)
    │   │
    │   ├── Properties
    │   │   ├── body
    │   │   ├── head
    │   │   ├── title
    │   │   ├── URL
    │   │   ├── documentElement
    │   │   └── forms
    │   │
    │   └── Events
    │       ├── load
    │       ├── DOMContentLoaded
    │       └── unload
    │
    ├── Element
    │   ├── Methods
    │   │   ├── getAttribute(name)
    │   │   ├── setAttribute(name, value)
    │   │   ├── removeAttribute(name)
    │   │   ├── appendChild(child)
    │   │   ├── removeChild(child)
    │   │   ├── insertBefore(newNode, referenceNode)
    │   │   ├── cloneNode(deep)
    │   │   ├── addEventListener(event, function)
    │   │   ├── removeEventListener(event, function)
    │   │   └── classList
    │   │       ├── add(className)
    │   │       ├── remove(className)
    │   │       ├── toggle(className)
    │   │       └── contains(className)
    │   │
    │   ├── Properties
    │   │   ├── innerHTML
    │   │   ├── outerHTML
    │   │   ├── textContent
    │   │   ├── className
    │   │   ├── id
    │   │   ├── children
    │   │   ├── parentNode
    │   │   ├── firstChild
    │   │   ├── lastChild
    │   │   ├── nextSibling
    │   │   ├── previousSibling
    │   │   └── style
    │   │
    │   └── Events
    │       ├── click
    │       ├── dblclick
    │       ├── mouseover
    │       ├── mouseout
    │       ├── keydown
    │       ├── keyup
    │       ├── focus
    │       ├── blur
    │       └── change
    │
    ├── Event
    │   ├── Properties
    │   │   ├── type
    │   │   ├── target
    │   │   ├── currentTarget
    │   │   ├── bubbles
    │   │   ├── cancelable
    │   │   └── timeStamp
    │   │
    │   ├── Methods
    │   │   ├── preventDefault()
    │   │   ├── stopPropagation()
    │   │   └── stopImmediatePropagation()
    │   │
    │   └── Event Types
    │       ├── UIEvent
    │       ├── FocusEvent
    │       ├── MouseEvent
    │       ├── KeyboardEvent
    │       ├── InputEvent
    │       ├── DragEvent
    │       ├── WheelEvent
    │       ├── TouchEvent
    │       └── CustomEvent
    │
    ├── Window
    │   ├── Methods
    │   │   ├── alert(message)
    │   │   ├── confirm(message)
    │   │   ├── prompt(message, default)
    │   │   ├── open(url, name, specs)
    │   │   ├── close()
    │   │   ├── setTimeout(function, delay)
    │   │   ├── clearTimeout(timeoutID)
    │   │   ├── setInterval(function, delay)
    │   │   ├── clearInterval(intervalID)
    │   │   ├── addEventListener(event, function)
    │   │   └── removeEventListener(event, function)
    │   │
    │   ├── Properties
    │   │   ├── document
    │   │   ├── innerHeight
    │   │   ├── innerWidth
    │   │   ├── outerHeight
    │   │   ├── outerWidth
    │   │   ├── location
    │   │   ├── history
    │   │   ├── navigator
    │   │   └── localStorage
    │   │
    │   └── Events
    │       ├── load
    │       ├── resize
    │       ├── scroll
    │       └── unload
    │
    └── Node
        ├── Methods
        │   ├── appendChild(child)
        │   ├── removeChild(child)
        │   ├── cloneNode(deep)
        │   └── replaceChild(newChild, oldChild)
        │
        ├── Properties
        │   ├── nodeType
        │   ├── nodeName
        │   ├── nodeValue
        │   ├── parentNode
        │   ├── childNodes
        │   ├── firstChild
        │   ├── lastChild
        │   └── nextSibling
        │
        └── Types
            ├── Element
            ├── Attribute
            ├── Text
            ├── CDATASection
            ├── EntityReference
            ├── Entity
            ├── ProcessingInstruction
            ├── Comment
            ├── Document
            ├── DocumentType
            ├── DocumentFragment
            └── Notation
    


# DOM
    Document Object Model (DOM)
    │
    ├── Document
    │   ├── Methods
    │   │   ├── getElementById(id)
    │   │   ├── getElementsByClassName(className)
    │   │   ├── getElementsByTagName(tagName)
    │   │   ├── querySelector(selector)
    │   │   ├── querySelectorAll(selector)
    │   │   ├── createElement(tagName)
    │   │   ├── createTextNode(data)
    │   │   ├── getElementById(id)
    │   │   └── getElementsByName(name)
    │   │
    │   ├── Properties
    │   │   ├── body
    │   │   ├── head
    │   │   ├── title
    │   │   ├── URL
    │   │   ├── documentElement
    │   │   └── forms
    │   │
    │   └── Events
    │       ├── load
    │       ├── DOMContentLoaded
    │       └── unload
    │
    ├── Element
    │   ├── Methods
    │   │   ├── getAttribute(name)
    │   │   ├── setAttribute(name, value)
    │   │   ├── removeAttribute(name)
    │   │   ├── appendChild(child)
    │   │   ├── removeChild(child)
    │   │   ├── insertBefore(newNode, referenceNode)
    │   │   ├── cloneNode(deep)
    │   │   ├── addEventListener(event, function)
    │   │   ├── removeEventListener(event, function)
    │   │   └── classList
    │   │       ├── add(className)
    │   │       ├── remove(className)
    │   │       ├── toggle(className)
    │   │       └── contains(className)
    │   │
    │   ├── Properties
    │   │   ├── innerHTML
    │   │   ├── outerHTML
    │   │   ├── textContent
    │   │   ├── className
    │   │   ├── id
    │   │   ├── children
    │   │   ├── parentNode
    │   │   ├── firstChild
    │   │   ├── lastChild
    │   │   ├── nextSibling
    │   │   ├── previousSibling
    │   │   └── style
    │   │
    │   └── Events
    │       ├── click
    │       ├── dblclick
    │       ├── mouseover
    │       ├── mouseout
    │       ├── keydown
    │       ├── keyup
    │       ├── focus
    │       ├── blur
    │       └── change
    │
    ├── Event
    │   ├── Properties
    │   │   ├── type
    │   │   ├── target
    │   │   ├── currentTarget
    │   │   ├── bubbles
    │   │   ├── cancelable
    │   │   └── timeStamp
    │   │
    │   ├── Methods
    │   │   ├── preventDefault()
    │   │   ├── stopPropagation()
    │   │   └── stopImmediatePropagation()
    │   │
    │   └── Event Types
    │       ├── UIEvent
    │       ├── FocusEvent
    │       ├── MouseEvent
    │       ├── KeyboardEvent
    │       ├── InputEvent
    │       ├── DragEvent
    │       ├── WheelEvent
    │       ├── TouchEvent
    │       └── CustomEvent
    │
    ├── Window
    │   ├── Methods
    │   │   ├── alert(message)
    │   │   ├── confirm(message)
    │   │   ├── prompt(message, default)
    │   │   ├── open(url, name, specs)
    │   │   ├── close()
    │   │   ├── setTimeout(function, delay)
    │   │   ├── clearTimeout(timeoutID)
    │   │   ├── setInterval(function, delay)
    │   │   ├── clearInterval(intervalID)
    │   │   ├── addEventListener(event, function)
    │   │   └── removeEventListener(event, function)
    │   │
    │   ├── Properties
    │   │   ├── document
    │   │   ├── innerHeight
    │   │   ├── innerWidth
    │   │   ├── outerHeight
    │   │   ├── outerWidth
    │   │   ├── location
    │   │   ├── history
    │   │   ├── navigator
    │   │   └── localStorage
    │   │
    │   └── Events
    │       ├── load
    │       ├── resize
    │       ├── scroll
    │       └── unload
    │
    └── Node
        ├── Methods
        │   ├── appendChild(child)
        │   ├── removeChild(child)
        │   ├── cloneNode(deep)
        │   └── replaceChild(newChild, oldChild)
        │
        ├── Properties
        │   ├── nodeType
        │   ├── nodeName
        │   ├── nodeValue
        │   ├── parentNode
        │   ├── childNodes
        │   ├── firstChild
        │   ├── lastChild
        │   └── nextSibling
        │
        └── Types
            ├── Element
            ├── Attribute
            ├── Text
            ├── CDATASection
            ├── EntityReference
            ├── Entity
            ├── ProcessingInstruction
            ├── Comment
            ├── Document
            ├── DocumentType
            ├── DocumentFragment
            └── Notation
