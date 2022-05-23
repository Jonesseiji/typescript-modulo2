
export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);
    }

    template(): string {
        return `
            <table class="table table-hover table-bordered" >
                <thead>
                    <tr>
                        <th> Data </th>
                        <th> Quantidade </th>
                        <th> Valor </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }

    update(): void {
        this.elemento.innerHTML = this.template();
    }
}