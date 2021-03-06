// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// Here we import the plugins
import Lightbox from "stimulus-lightbox"
import { Autocomplete } from "stimulus-autocomplete"
import ScrollProgress from "stimulus-scroll-progress"

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))
// Here you call the plugins
application.register("lightbox", Lightbox)
application.register("autocomplete", Autocomplete)
application.register("scroll-progress", ScrollProgress)
