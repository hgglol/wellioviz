// let wellio = require('wellio')
// let TripleCombo = require("./well_log_templates/triple_combo_template")

async function plot_triple_combo_log(div_id, url="./static/00-01-11-082-23W4-0.LAS") {
    let ShaleSiltCutOff = 80
    let SiltSandCutOff = 55
    // var fileUrltoWellLog = "https://gist.githubusercontent.com/JustinGOSSES/2685e588d5c2f2a0ba1591ec7b9c9421/raw/415fe8a2f27dc7621f06f60ffd40a62c0d55a0f0/00-01-01-095-19W4-0.las"
    var fetched = await fetch(url)
    var well_as_string = await fetched.text()
    var well = las2json(well_as_string)
    // let depth_curve_name = well['CURVE INFORMATION BLOCK']
    var test = new TrackTemplate()
    var log = new TripleCombo()
    log.load_log(well)
    console.log('here')

}