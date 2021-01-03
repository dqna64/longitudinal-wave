
class Wave {
  constructor(domain_a, domain_b, wavelength, amplitude, speed) {
    this.domain_a = domain_a
    this.domain_b = domain_b
    this.wavelength = wavelength
    this.amplitude = amplitude
    this.speed = speed
    this.t = 0
  }

  show() {
    for (let x=this.domain_a; x<this.domain_b; x+=1/resolution) {
      fill(7, 60, 120)
      noStroke()
      ellipse(x*resolution, -this.f((x))*resolution, 3)
    }
  }

  update(wavelength, amplitude, speed) {
    this.wavelength = wavelength
    this.amplitude = amplitude
    this.speed = speed
    this.t += this.speed
  }

  f(x) {
    return Math.sin((x-this.t)/this.wavelength)*this.amplitude
  }
}
