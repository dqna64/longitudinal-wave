let resolution = 100
let whitespace = 100*2 // 100 whitespace at top and bottom
// Domain: -2PI <= x <= 2PI
let domain_a = -Math.PI*2
let domain_b = Math.PI*2
// Range = -1 <= x <= 1
let range_a = -1
let range_b = 1

let particles = []
let numParticles = 1000
let numParticlesDisplayed = 300
let wave = new Wave(domain_a, domain_b, wavelength=0.5, amplitude=0.5, speed=0.018)

// SLiders
let wavelengthSlider
let amplitudeSlider
let speedSlider
let numParticlesDisplayedSlider

function setup() {
  width = (domain_b-domain_a)*resolution
  height = (range_b-range_a)*resolution
  createCanvas(width, height+whitespace)

  wavelengthSlider = createSlider(0.1, 2, 0.8, 0.1)
  amplitudeSlider = createSlider(-2, 2, 0.6, 0.1)
  speedSlider = createSlider(0, 0.4, 0.03, 0.001)
  numParticlesDisplayedSlider = createSlider(0, numParticles, 500)

  for (i=0; i < numParticles; i++) {
    particles.push(new Particle(domain_a, domain_b, range_a, range_b))
  }
}

function draw() {
  background(130)
  translate((domain_b-domain_a)*resolution/2, (range_b-range_a)*resolution/2 + whitespace/2)
  stroke(0)
  strokeWeight(1)
  line(0, range_a*resolution, 0, range_b*resolution)
  line(domain_a*resolution, 0, domain_b*resolution, 0)

  noFill()
  rect(domain_a*resolution, range_a*resolution, domain_b*resolution*2, range_b*resolution*2)

  wave.update(wavelengthSlider.value(), amplitudeSlider.value(), speedSlider.value())
  numParticlesDisplayed = numParticlesDisplayedSlider.value()

  for (i=0; i<numParticlesDisplayed; i++) {
    particles[i].update()
    particles[i].show(ghost=true)
  }

  wave.show()
}
