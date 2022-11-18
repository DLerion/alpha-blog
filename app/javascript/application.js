// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//import Rails from "@rails/ujs"
//import Turbolinks from "turbolinks"


import "@hotwired/turbo-rails"
import "controllers"

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require('bootstrap')
require("@fortawesome/fontawesome-free/js/all")

//import "bootstrap"
//import "../stylesheets/application"



