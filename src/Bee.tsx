// aliases for developer clarity
type integer = number;
type float = number;

export class Bee {

    protected _threshold: integer = 0;
    protected _role: string = "";

    protected _health: float = 100;

    get health(): float {
        return this._health;
    }

    protected _dead: boolean = false;

    get dead(): boolean {
        return this._dead;
    }

    damage(value: integer): void {
        this._health *= (1 - (value / 100));
        this.checkVitals();
    }

    checkVitals(): void {
        if (this._health < this._threshold) {
            this._dead = true;
        }
    }

    render(): string {
        const status = this._dead ? "dead" : "alive";
        return `A ${this._role}, health: ${this._health}%. It is ${status}.`;
    }
}

export class Worker extends Bee {
    protected _threshold: integer = 70;
    protected _role: string = "Worker Bee";
}

export class Drone extends Bee {
    protected _threshold: integer = 50;
    protected _role: string = "Drone";
}

export class Queen extends Bee {
    protected _threshold: integer = 20;
    protected _role: string = "Queen Bee";
}