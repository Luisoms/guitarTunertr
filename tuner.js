const switchTuner = document.getElementById("turnOnOff");
const tuner       = document.getElementById("guitar-tuner");
const tunerBase   = document.getElementById("tunerBase");

var SettingBase = {
    container: tunerBase,
    backgroundColor: "#212121",
    notOkayColor: "#e04646",
    okayColor: "#46e046",
    fontColor: "#FFFFFF"
};

function initializeTuner() {
    var tuners = [
        new OnlineTuner.Controller.GuitareTuner(
            new OnlineTuner.Widget.CircleWidget(
                SettingBase.container, 
                SettingBase.backgroundColor,
                SettingBase.notOkayColor, 
                SettingBase.okayColor,
                SettingBase.fontColor
            )
        )
    ];

    new OnlineTuner.Analyser(tuners).install(function() {
        console.log("Inicialziado Correctamente");
        
    }, function(errorMessage) {
        console.error("Oops, Algo anda mal", errorMessage);
    });
}

switchTuner.addEventListener('click', () => {
    switchTuner.classList.toggle('tunerOn');
    document.documentElement.classList.toggle('dark-mode');
});

initializeTuner();

