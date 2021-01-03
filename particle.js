
class Particle {
  constructor(domain_a, domain_b, range_a, range_b) {
    this.init_x = random(domain_a, domain_b)
    this.init_y = random(range_a, range_b)
    this.pos_x = this.init_x
    this.pos_y = this.init_y
    this.r = 6.5
    this.displacement = 0
  }

  show(ghost=true) {
    if (ghost) {
      fill(127,204,240,130)
      noStroke()
      ellipse(this.init_x*resolution, this.init_y*resolution, this.r)

      stroke(0,60)
      strokeWeight(0.8)
      line(this.init_x*resolution, this.init_y*resolution, this.pos_x*resolution, this.pos_y*resolution)
      //line(this.init_x*resolution, 0, this.init_x*resolution, -wave.f(this.init_x)*resolution)
      //fill(180,0,180)
      //noStroke()
      //ellipse(this.init_x*resolution, -wave.f(this.init_x)*resolution, 4)
    }
    fill(255, 198, 77)
    stroke(0)
    strokeWeight(0.9)
    ellipse((this.pos_x*resolution), this.pos_y*resolution, this.r)
  }

  update() {
    this.pos_x = this.init_x + wave.f(this.init_x)
  }
}
