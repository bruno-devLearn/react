export default function Stopwatch() {
    return (
        <div className="content">
            <div className="stopwatch">
                <div className="circle">
                    <div className="time">00:00:00</div>
                </div>
                <div className="actions">
                    <button id="start">
                        <span className="material-symbols-outlined">
                            play_arrow
                        </span>
                        start
                    </button>
                    <button id="pause">
                        <span className="material-symbols-outlined">pause</span>
                        pause
                    </button>

                    <button id="reset">
                        <span className="material-symbols-outlined">
                            refresh
                        </span>
                        reset
                    </button>
                </div>
                <div className="lap">
                    <button className="lap">
                        <span class="material-symbols-outlined">flag</span>
                        Lap
                    </button>
                </div>
            </div>
        </div>
    );
}
