from web3 import Web3

# Connect to an Ethereum node
infura_url = "https://mainnet.infura.io/v3/c5572994d54247879bd6e4e232c7eb69"
web3 = Web3(Web3.HTTPProvider(infura_url))

def web3_integration(ethereum_address):
    if web3.is_connected():
        address = ethereum_address
        if web3.is_address(address):
            balance = web3.eth.get_balance(address)
            
            print(f"Balance: {balance} Ether")
            return balance
        else:
            print("Invalid Ethereum address")
    else:
        print("Failed to connect to Ethereum network")

# Example usage
web3_integration("0xYourEthereumAddressHere")
