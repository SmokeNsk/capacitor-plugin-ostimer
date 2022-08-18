package ru.lab332.caplugin.ostimer;

import android.os.Handler;
import android.os.Message;
import androidx.annotation.NonNull;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "OsTimer")
public class OsTimerPlugin extends Plugin {
    public static String EVENT_NAME = "OsTimerTick";

    private OsTimer osTimer = new OsTimer();


    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void start(PluginCall call) {
        int delay = call.getInt("delay", getConfig().getInt("delay", 1500));
        int period = call.getInt("period", getConfig().getInt("period", 1500));
        osTimer.start(
                (OsTimerCallback) tick -> {
                    JSObject payload = new JSObject();
                    payload.put("tick", tick);
                    notifyListeners(EVENT_NAME, payload);
                },
                delay,
                period
        );

        call.resolve();
    }

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void stop(PluginCall call) {
        osTimer.stop();
        call.resolve();
    }
}
